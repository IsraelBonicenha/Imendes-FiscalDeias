function MudarOpacidadeElemento (elemento, opacit, blockDIV, opacitBlockDIV){
    elemento.style.opacity = opacit;
    elemento.style.transition = "opacity 0.7s ease";


    blockDIV.style.opacity = opacitBlockDIV
    blockDIV.style.transition = "opacity 0.7s ease";
}

const botaoInterrogacao = document.getElementById('header-circle-question');
const tolltipDIV = document.querySelector('.tolltip-header-question');
const blockDIV = document.querySelector('.block-moment-tolltip')

botaoInterrogacao.addEventListener('mouseover', () => MudarOpacidadeElemento(tolltipDIV, "100%", blockDIV, "80%"));
botaoInterrogacao.addEventListener('mouseout', () => MudarOpacidadeElemento(tolltipDIV, "0%", blockDIV, "0%"));