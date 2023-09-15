const form = document.getElementById("form-comparador");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const numeroA = parseFloat(document.getElementById("numero-a").value);
    const numeroB = parseFloat(document.getElementById("numero-b").value);
    const mensagemSucesso = `O número: <b>${numeroB}</b> é maior que o número: <b>${numeroA}</b>`;
    const mensagemError = `O número: <b>${numeroB}</b> é menor que o número: <b>${numeroA}</b>`;

    if (numeroB < numeroA) {
        const containerMensagemError = document.querySelector(".error-message");
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = "block";

        document.getElementById("numero-a").value = "";
        document.getElementById("numero-b").value = "";
    }
    
    if (numeroB > numeroA) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";

        document.getElementById("numero-a").value = "";
        document.getElementById("numero-b").value = "";
}});