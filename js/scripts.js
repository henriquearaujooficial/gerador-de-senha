// Lista de nomes chamados na sequência
const filaNomes = [];

// Seletores dos elementos
const proximoChamada = document.getElementById("proximoChamada");
const ultimaChamada = document.getElementById("ultimaChamada");
const penultimaChamada = document.getElementById("penultimaChamada");
const antepenultimaChamada = document.getElementById("antepenultimaChamada");
const botaoChamar = document.getElementById("botaoChamar");
const novoNomeInput = document.getElementById("novoNome");
const formularioChamada = document.getElementById("formularioChamada");

// Função para converter texto em fala
function falarNome(nome) {
  const utterance = new SpeechSynthesisUtterance(nome);
  utterance.lang = "PT-BR";
  window.speechSynthesis.speak(utterance);
}

// Função para atualizar o monitor
let monitorWindow;

function atualizarMonitor() {
  if (monitorWindow && !monitorWindow.closed) {
    monitorWindow.document
      .getElementById("proximoChamadaMonitor")
      .querySelector("#nomeAtualTextoMonitor").innerText =
      proximoChamada.querySelector("#nomeAtualTexto").innerText;
    monitorWindow.document
      .getElementById("ultimaChamadaMonitor")
      .querySelector("#nomeAtualTextoMonitor").innerText =
      ultimaChamada.querySelector("#nomeAtualTexto").innerText;
    monitorWindow.document
      .getElementById("penultimaChamadaMonitor")
      .querySelector("#nomeAtualTextoMonitor").innerText =
      penultimaChamada.querySelector("#nomeAtualTexto").innerText;
    monitorWindow.document
      .getElementById("antepenultimaChamadaMonitor")
      .querySelector("#nomeAtualTextoMonitor").innerText =
      antepenultimaChamada.querySelector("#nomeAtualTexto").innerText;
  }
}

// Função para chamar o nome e atualizar o monitor
function chamarNome(nome) {
  // Converte o nome para maiúsculas
  nome = nome.toUpperCase();

  // Chama a função para falar o nome
  falarNome(nome);

  const audio = document.getElementById("audioChamada");
  audio.play();

  // Adiciona o nome na fila de chamadas, se não estiver lá
  if (!filaNomes.includes(nome)) {
    filaNomes.unshift(nome);
    atualizarNomesExibidos();
  }

  // Atualiza o monitor
  atualizarMonitor();
}

// Atualiza os elementos da tela com os nomes
function atualizarNomesExibidos() {
  if (filaNomes.length > 1) {
    proximoChamada.querySelector("#nomeAtualTexto").innerText = filaNomes[0];
  } else {
    proximoChamada.querySelector("#nomeAtualTexto").innerText = "";
  }

  if (filaNomes.length > 2) {
    ultimaChamada.querySelector("#nomeAtualTexto").innerText = filaNomes[1];
  } else {
    ultimaChamada.querySelector("#nomeAtualTexto").innerText = "";
  }

  if (filaNomes.length > 3) {
    penultimaChamada.querySelector("#nomeAtualTexto").innerText = filaNomes[2];
  } else {
    penultimaChamada.querySelector("#nomeAtualTexto").innerText = "";
  }

  if (filaNomes.length > 4) {
    antepenultimaChamada.querySelector("#nomeAtualTexto").innerText =
      filaNomes[3];
  } else {
    antepenultimaChamada.querySelector("#nomeAtualTexto").innerText = "";
  }
}

// Função para adicionar eventos de clique aos nomes
function adicionarEventosClique() {
  document.querySelectorAll(".pessoaBox").forEach((box) => {
    box.addEventListener("click", function () {
      const nome = this.querySelector("#nomeAtualTexto").innerText.trim();
      if (nome) {
        falarNome(nome); // Apenas fala o nome clicado
      }
    });
  });
}

// Inicializa os eventos de clique nos nomes
adicionarEventosClique();

// Ação do botão para chamar o nome inserido
botaoChamar.addEventListener("click", function () {
  const nome = novoNomeInput.value.trim();

  if (nome) {
    chamarNome(nome);
    novoNomeInput.value = ""; // Limpa o campo de texto
    formularioChamada.style.display = "none"; // Oculta o formulário após chamar o nome
  } else {
    alert("Por favor, insira um nome ou senha.");
  }
});

// Evento de teclado para exibir o campo de inserção
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    formularioChamada.style.display = "block"; // Exibe o formulário
    novoNomeInput.focus(); // Foca no campo de entrada
  }
});

// Evento para abrir a tela do monitor
document.getElementById("abrirMonitor").addEventListener("click", function () {
  monitorWindow = window.open("", "monitor", "width=1920,height=1080");
  monitorWindow.document.write(`
    <html>
    <head>
      <title>Monitor de Senhas</title>
      <link href="./css/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container page">
      <!-- Barra Superior com a Logo e o Texto -->
      <div class="row barraSuperior">
        <div class="col-xs-2">
          <img src="/images/SEPD.png" class="imageLogo" />
        </div>
        <div class="col-xs-10">
          <span class="centralTexto">CONTROLE DE SENHA - GAMA</span>
        </div>
      </div>
      <div class="container">
        <div class="row main-content">
          <div class="col-md-6 boxCentralizado">
            <div class="pessoaBox" id="proximoChamadaMonitor">
              <span id="nomeAtualTextoMonitor"></span>
            </div>
          </div>
          <div class="col-md-6 boxDireita">
            <div class="pessoaBox" id="ultimaChamadaMonitor">
              <span id="nomeAtualTextoMonitor"></span>
            </div>
            <div class="pessoaBox" id="penultimaChamadaMonitor">
              <span id="nomeAtualTextoMonitor"></span>
            </div>
            <div class="pessoaBox" id="antepenultimaChamadaMonitor">
              <span id="nomeAtualTextoMonitor"></span>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);

  // Atualiza o monitor com as informações atuais
  atualizarMonitor();
});

// Função para zerar todas as chamadas
document.getElementById("zerarChamadas").addEventListener("click", function () {
  filaNomes.length = 0; // Limpa a fila de nomes
  proximoChamada.querySelector("#nomeAtualTexto").innerText = "";
  ultimaChamada.querySelector("#nomeAtualTexto").innerText = "";
  penultimaChamada.querySelector("#nomeAtualTexto").innerText = "";
  antepenultimaChamada.querySelector("#nomeAtualTexto").innerText = "";

  // Atualiza o monitor se estiver aberto
  atualizarMonitor();
});

// Função para exportar para CSV
// Função para exportar os dados para Excel

document.getElementById("exportarCSV").addEventListener("click", function () {
  if (filaNomes.length === 0) {
    alert("Não há senhas para exportar.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,Nome,Horário\n";
  filaNomes.forEach(function (nome) {
    let horario = new Date().toLocaleTimeString();
    csvContent += `"${nome}","${horario}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "relatorio_servicos.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
