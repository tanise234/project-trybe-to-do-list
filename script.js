// requisitos 7 e 8
function mudarCorDeFundo(event) {
  const itemClicado = document.querySelectorAll('.clicado');
  if (itemClicado.length === 1) {
    document.querySelector('.clicado').classList.remove('clicado');
  }
  let novoItemClicado = event.target.classList;
  novoItemClicado.add('clicado');
}

// requisito 9
function riscarItem(event) {
  const itemRiscado = event.target.classList;
  if (itemRiscado.contains('completed')) {
    itemRiscado.remove('completed');
  } else {
    itemRiscado.add('completed');
  }
}

// requisitos 5 e 6
function inserirItem() {
  const texto = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  item.innerText = texto.value;
  item.addEventListener('dblclick', riscarItem);
  item.addEventListener('click', mudarCorDeFundo);
  document.getElementById('lista-tarefas').appendChild(item);
  texto.value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', inserirItem);

// requisito 10
function apagaTudo() {
  const itensDaLista = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < itensDaLista.length; i += 1) {
    itensDaLista[i].parentNode.removeChild(itensDaLista[i]);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);

// requisito 11
function removeFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  for (let i = 0; i < finalizados.length; i += 1) {
    finalizados[i].parentNode.removeChild(finalizados[i]);
  }
}

document
  .getElementById('remover-finalizados')
  .addEventListener('click', removeFinalizados);

// requisito 13
function sobe() {
  const selecionado = document.querySelector('.clicado');
  const primeiroDaLista = document.querySelector('#lista-tarefas').firstChild;
  if (primeiroDaLista !== selecionado && selecionado !== null) {
    selecionado.classList.remove('clicado');
    selecionado.previousElementSibling.classList.add('clicado');
  }
}

function desce() {
  const selecionado = document.querySelector('.clicado');
  const ultimoDaLista = document.querySelector('#lista-tarefas').lastChild;
  if (ultimoDaLista !== selecionado && selecionado !== null) {
    selecionado.classList.remove('clicado');
    selecionado.nextElementSibling.classList.add('clicado');
  }
}

document.getElementById('mover-cima').addEventListener('click', sobe);

document.getElementById('mover-baixo').addEventListener('click', desce);

// requisito 14
function removeSelecionado() {
  const selecionado = document.querySelector('.clicado');
  selecionado.parentNode.removeChild(selecionado);
}

document
  .getElementById('remover-selecionado')
  .addEventListener('click', removeSelecionado);
