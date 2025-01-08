function MudarOpacidadeElemento (elemento, opacit){
    elemento.style.opacity = opacit;
    elemento.style.transition = "opacity 0.7s ease";
}

const botaoInterrogacao = document.getElementById('header-circle-question');
const tolltipDIV = document.querySelector('.tolltip-header-question');

botaoInterrogacao.addEventListener('mouseover', () => MudarOpacidadeElemento(tolltipDIV, "100%"));
botaoInterrogacao.addEventListener('mouseout', () => MudarOpacidadeElemento(tolltipDIV, "0%"));