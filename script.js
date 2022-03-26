function inserirItem() {
  const texto = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  item.innerText = texto.value;
  item.addEventListener('dblclick', riscarItem);
  item.addEventListener('click', mudarCorDeFundo);
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
    itemRiscado.remove('completed');
  } else {
    itemRiscado.add('completed');
  }
}

document.getElementById('criar-tarefa').addEventListener('click', inserirItem);

document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);

function apagaTudo() {
  let itensDaLista = document.querySelectorAll('#lista-tarefas li');
  for (i = 0; i < itensDaLista.length; i += 1) {
    itensDaLista[i].parentNode.removeChild(itensDaLista[i]);
  }
}
