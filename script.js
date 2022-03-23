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
  item.addEventListener('dblclick', riscarItem);
  document.getElementById('lista-tarefas').appendChild(item);
  texto.value = '';
}

function mudarCorDeFundo(event) {
  let itemClicado = document.querySelectorAll('.clicado');
  if (itemClicado.length === 1) {
    document.querySelector('.clicado').classList.remove('clicado');
  }
  event.target.classList = 'clicado';
}

function riscarItem(event) {
  let itemRiscado = event.target.classList;
  if (itemRiscado.contains('completed')) {
    console.log(event.target.classList);
    itemRiscado.remove('completed');
  } else {
    itemRiscado.add('completed');
    console.log(event.target);
  }
}
