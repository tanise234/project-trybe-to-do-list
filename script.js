// função: receber o texto
// criar item da lista
// guardar o texto no item
// limpar a caixa d input

document.getElementById('criar-tarefa').addEventListener('click', inserirItem);

function inserirItem() {
  let texto = document.getElementById('texto-tarefa');
  let item = document.createElement('li');
  item.innerText = texto.value;
  item.addEventListener('click', mudarCorDeFundo);
  document.getElementById('lista-tarefas').appendChild(item);
  texto.value = '';
}

function mudarCorDeFundo(event) {
  event.target.classList = 'clicado';
}
