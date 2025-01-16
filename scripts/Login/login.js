import { Autendicar } from "./auth.js";

const loginForm = document.getElementById("LoginForm");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // Envia os dados para a API usando fetch
    const response = await fetch("https://fiscaldeias.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    // Processa a resposta da API
    const result = await response.json();
    if (response.ok) {
      alert(result.message);

      if (result.auth == true){
        sessionStorage.setItem("auth", "true");
        Autendicar()
      }

    } else {
      alert(result.error); // Exibe mensagem de erro
    }
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    alert("Ocorreu um erro ao enviar os dados.");
  }
});