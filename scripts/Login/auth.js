export function Autendicar() {
    if (!sessionStorage.getItem("auth")) {
        sessionStorage.setItem("auth", "false");
      }
    
    let autendicado = sessionStorage.getItem("auth") === "true";
    
    if (autendicado){
        window.location.href = "https://israelbonicenha.github.io/Imendes-FiscalDeias/Index.html";
    }
    else{
        window.location.href = "https://israelbonicenha.github.io/Imendes-FiscalDeias/pages/Login.html";
    }
}