# Gerador de Senha
# Projeto feito na SEPD (Secretaria da Paessoa com Deficiência) para suprir a necessidade de um trabalho feito com a carreta da inclusão nas cidades do DF

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/henriquearaujooficial/gerador-de-senha/blob/main/LICENSE)

# 🛠️ Projeto construído usando:
```bash
- HTML
- CSS
- JS
```

# Gerador de Senhas e suas descrições:

## Uma descrição do que cada parte do código faz:

## Passo a Passo de Funcionamento do Sistema de Controle e Gerador de Senhas
## Vou detalhar cada parte do código, explicando seu funcionamento.

## 1. Estrutura HTML
<head>: Contém metadados sobre o documento, como o título e links para os arquivos CSS e a favicon. O uso do <meta charset="UTF-8"> garante que o documento utilize o padrão de codificação UTF-8, suportando caracteres especiais. O <meta name="viewport"> assegura que o layout seja adaptável em diferentes dispositivos.
<body>: Envolve o conteúdo visível da página. Usa div para organizar os elementos em containers responsivos.
## 2. Estruturação CSS
Uso do Bootstrap: O framework Bootstrap é utilizado para garantir um design responsivo e componentes prontos para serem reutilizados (como container, row, col-xx), fornecendo classes de layout pré-definidas.
Estilização customizada: O arquivo style.css é responsável por ajustar estilos adicionais, como cores, fontes, espaçamentos e o design dos componentes. Por exemplo:
.container e .main-content: são usados para definir o layout principal e o alinhamento dos elementos.
.pessoaBox: Personaliza as caixas de exibição dos nomes chamados, utilizando propriedades como background-color, border, padding e font-size.
## 3. Estrutura JavaScript
Controle de Fluxo de Interface:
Eventos de Clique e Teclado: São capturados para executar funções específicas, como exibir o formulário de chamada de senha, chamar nomes ou zerar as chamadas.
Manipulação do DOM: O código JavaScript usa o método document.getElementById() para acessar elementos HTML, como caixas de texto e botões. Em seguida, métodos como .innerText e .querySelector() permitem atualizar dinamicamente o conteúdo da página com base nas interações do usuário.
Fila de Nomes: A variável filaNomes é um array que mantém o histórico de senhas chamadas. O método unshift() insere novos nomes no início do array.
Conversão de Texto em Fala: A função falarNome() usa a Web Speech API para converter o nome chamado em áudio sintetizado (text-to-speech).
Janela Externa (Monitor): A função atualizarMonitor() atualiza os elementos de uma nova janela (monitorWindow) que exibe o monitor de senhas em uma tela externa. O uso de window.open() permite abrir uma janela dedicada para esse monitor.
## 4. Gestão de Senhas
Função chamarNome: Converte o nome para letras maiúsculas (toUpperCase()), adiciona-o à fila de nomes, aciona a fala e atualiza as caixas de exibição na página. Esta função é essencial para garantir que o sistema de controle de senhas funcione conforme esperado, mantendo o histórico das últimas chamadas.
Função atualizarNomesExibidos: Garante que a interface exiba corretamente o próximo nome e os últimos três chamados, fazendo um loop inverso sobre o array filaNomes.
## 5. Exportação de Dados para CSV
Função exportarParaExcel(): Usa a biblioteca XLSX para gerar um arquivo Excel a partir dos registros de atendimento, aplicando estilos às células (como negrito e alinhamento) e criando planilhas separadas para o resumo e os dados de atendimento.
Função exportarCSV(): Exporta os nomes chamados e seus horários em formato CSV. A função utiliza Array.prototype.forEach() para iterar sobre os itens na filaNomes, gerando o conteúdo CSV na string csvContent, que é posteriormente convertido para uma URI codificada e baixada via anchor.
## 6. Acessibilidade e Responsividade
Responsividade via CSS: O uso de unidades relativas como vw (viewport width) e classes do Bootstrap (ex: col-xs-2, col-md-12) garantem que o layout se adapte bem a diferentes tamanhos de tela, como monitores grandes e dispositivos móveis.
Acessibilidade: O campo de texto e os botões são acessíveis por teclado. O evento keydown permite que a interface seja controlada sem mouse, uma prática importante para acessibilidade.
## 7. Integração de Áudio
Elemento de Áudio: Um arquivo de áudio (audio/chamada.wav) é reproduzido quando uma senha é chamada. Isso melhora a interação do sistema, alertando os usuários de forma auditiva.
## 8. Comentários e Melhorias Potenciais
Documentação: O código possui uma estrutura clara, mas seria interessante adicionar mais comentários explicativos em áreas críticas, como no gerenciamento de eventos ou no monitor.
Desempenho: Utilizar mecanismos de debounce para evitar chamadas múltiplas de eventos (como teclas pressionadas repetidamente) poderia ser um aprimoramento.
Esse é o detalhamento técnico das principais partes do código. Ele utiliza boas práticas de desenvolvimento, como separação de responsabilidades (HTML para estrutura, CSS para estilo, e JS para lógica), além de incorporar recursos modernos da web, como APIs de fala e manipulação de DOM.



![GERADOR DE SENHA](./senha.png)
