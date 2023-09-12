const form = document.getElementById("form-comparador");
let numeroBMaiorr = true;

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const numeroA = document.getElementById("numero-a").value;
    const numeroB = document.getElementById("numero-b").value;
    const mensagemSucesso = `O número: <b>${numeroB}</b> é maior que o número: <b>${numeroA}</b>`;

    function numeroBMaior(numeroA, numeroB) {
        if (Math.max(numeroA, numeroB), numeroB > numeroA) {
            return numeroB;
        }
    }

    numeroBMaiorr = numeroBMaior(numeroA, numeroB)
    if (numeroBMaiorr) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";

        numeroA.value = "";
        numeroB.value = "";

    } else {
        numeroB.style.border = "1px solid red";
        document.querySelector(".error-message").style.display = "block";
    }
})

numeroB.addEventListener("keyup", function(evento) {
    console.log(evento.target.value);

    if (!numeroBMaiorr) {
        numeroB.classList.add("error");
        document.querySelector(".error-message").style.display = "block";
    } else {
        numeroB.classList.remove("error");
        document.querySelector(".error-message").style.display = "none";
    }
});