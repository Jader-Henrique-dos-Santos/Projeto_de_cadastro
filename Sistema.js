const loginInput = document.querySelector("#Login");
const senhaInput = document.querySelector("#Senha");
const botao = document.querySelector("#btn");
const msg = document.querySelector("#msg");

botao.addEventListener("click", () => {

    console.log("Botão clicado!"); 

    const login = loginInput.value.trim(); 
    const senha = senhaInput.value;

    if (login.length < 5) {
        msg.textContent = "Login muito curto";
        return;
    }

    if (senha.length < 8) {
        msg.textContent = "Senha muito curta";
        return;
    }

    msg.textContent = "Cadastro válido ✅";
});
