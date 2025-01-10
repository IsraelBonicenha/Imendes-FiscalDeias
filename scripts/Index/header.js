function MudarOpacidadeElemento (elemento, opacit, blockDIV, opacitBlockDIV, entradaTrue){
    elemento.style.opacity = opacit;
    elemento.style.transition = "opacity 0.7s ease";

    if (entradaTrue){
        blockDIV.style.position = "fixed";
        blockDIV.style.opacity = opacitBlockDIV;
        blockDIV.style.transition = "opacity 0.7s ease";
    }
    else{
        blockDIV.style.opacity = opacitBlockDIV;
        blockDIV.style.transition = "opacity 0.7s ease";
        setTimeout(() => {blockDIV.style.position = "relative";}, 500)
    }
}

const botaoInterrogacao = document.getElementById('header-circle-question');
const tolltipDIV = document.querySelector('.tolltip-header-question');
const blockDIV = document.querySelector('.block-moment-tolltip')

botaoInterrogacao.addEventListener('mouseover', () => MudarOpacidadeElemento(tolltipDIV, "100%", blockDIV, "80%", true));
botaoInterrogacao.addEventListener('mouseout', () => MudarOpacidadeElemento(tolltipDIV, "0%", blockDIV, "0%", false));