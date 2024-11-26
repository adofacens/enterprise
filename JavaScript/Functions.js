// Manipulação dos objetos DOM (Document Object Model)
// Representação de dados dos objetos que compõem uma estrutura
// e o conteúdo de um documento Web

// Essencial para manipular e interagir com elementos de uma página
// Document.querySelector()

// Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado'; // Modifica o texto do elemento

// Uso principal: Buscar e modificar elemntos HTML


// Document.createElement()
// Cria novos elemntos dinamicamente

// Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);

// Uso principal: Adicionar novos elementos ao DOM


// addEventListener()
// Funções que lidam com interações dos usuários
// Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  alert('Botão Clicado!');
}
);
// Uso principal: Criar interatividade, como cliques ou movimento do mouse

// setTimeout()
// Controlam ações que ocorrem em intervalos ou após um tempo
// Executa uma função após um período de tempo (unidade de medida > Milisegundos)

setTimeout(() => {
  alert('Executado após 2 segundos!');
},2000);


// alert > ele executa o toString do seu objeto e apresenta em tela
// console.log > ele registra a informação no console do navegador ficando restrita ao conhecimento do desenvolvedor
// Uso principal: Atrasar execuções ou criar temporizadores

// Aula JavaScript > DOM e Functions > Github