function ExibirOcultar_restoRegistro(elemento, elemento2) {

    // Verificar a visibilidade do elemento
    const estilos = getComputedStyle(elemento)
    let éVisivel = estilos.left != "0px"

    if (éVisivel){
        elemento.style.left = "0px";
        elemento.style.transition = "left 1s ease";

        elemento2.style.transform = "rotate(-0deg)";
        elemento2.style.transition = "transform 1s ease";
    }
    else{
        elemento.style.left = "450px";
        elemento.style.transition = "left 1s ease";

        elemento2.style.transform = "rotate(540deg)";
        elemento2.style.transition = "transform 1s ease";
    }

}

const btnExibir_restoRegistro = document.getElementById("btn-exibir-resto")
const restoDIVleft = document.querySelector(".resto-content-left")
const setinhabtn = document.getElementById("setinhabtn")

btnExibir_restoRegistro.addEventListener('click', () => ExibirOcultar_restoRegistro(restoDIVleft, setinhabtn))