// requisitos 7 e 8
function mudarCorDeFundo(event) {
  const itemClicado = document.querySelectorAll('.clicado');
  if (itemClicado.length === 1) {
    document.querySelector('.clicado').classList.remove('clicado');
  }
  const novoItemClicado = event.target.classList;
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
    const aux1 = selecionado.previousElementSibling.innerHTML;
    const aux2 = selecionado.innerHTML;
    selecionado.innerHTML = aux1;
    selecionado.previousElementSibling.innerHTML = aux2;
    selecionado.classList.remove('clicado');
    selecionado.previousElementSibling.classList.add('clicado');
  }
}

function desce() {
  const selecionado = document.querySelector('.clicado');
  const ultimoDaLista = document.querySelector('#lista-tarefas').lastChild;
  if (ultimoDaLista !== selecionado && selecionado !== null) {
    const aux1 = selecionado.nextElementSibling.innerHTML;
    const aux2 = selecionado.innerHTML;
    selecionado.innerHTML = aux1;
    selecionado.nextElementSibling.innerHTML = aux2;
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

// requisito 12
function salvaLista() {
  localStorage.clear();
  const lista = document.getElementById('lista-tarefas');
  localStorage.setItem('index', JSON.stringify(lista.innerHTML));
}

function recuperaLista() {
  if (localStorage.length > 0) {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = JSON.parse(localStorage.getItem('index'));
    for (let i = 0; i < lista.children.length; i += 1) {
      lista.children[i].addEventListener('dblclick', riscarItem);
      lista.children[i].addEventListener('click', mudarCorDeFundo);
    }
  }
}

window.onload = recuperaLista;
document.getElementById('salvar-tarefas').addEventListener('click', salvaLista);
