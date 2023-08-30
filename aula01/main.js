'use strict'

function trocarTitulo(){
    const tituloAtual = document.getElementById('titulo')
    const tituloNovo = prompt('Digite o nome da escola')
    tituloAtual.textContent = 'Escola: ${tituloNovo}'

   const Nome = document.getElementById('idade')
   const nomeNovo = prompt('Digite seu nome')

const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)
}