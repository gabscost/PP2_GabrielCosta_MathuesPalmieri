function verificarForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var assunto = document.querySelector('input[name="assunto"]:checked');
    var preferencias = document.querySelectorAll('input[name="preferencias[]"]:checked');

    // Verificar se todos os campos estão preenchidos
    if (nome === "" || email === "" || mensagem === "" || assunto === null || preferencias.length === 0) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Exibir os dados verificados
    document.getElementById("verNome").textContent = nome;
    document.getElementById("verEmail").textContent = email;
    document.getElementById("verMensagem").textContent = mensagem;
    document.getElementById("verAssunto").textContent = assunto.value;
    var preferenciasText = "";
    preferencias.forEach(function(preferencia) {
        preferenciasText += preferencia.value + ", ";
    });
    document.getElementById("verPreferencias").textContent = preferenciasText.slice(0, -2); // Remove a última vírgula
    document.getElementById("dadosVerificados").style.display = "block";
}

function limparForm() {
    document.getElementById("contactForm").reset();
    document.getElementById("dadosVerificados").style.display = "none";
}

function alterarForm() {
    document.getElementById("contactForm").reset();
    document.getElementById("dadosVerificados").style.display = "none";
}

function enviarForm() {
    // Aqui você pode adicionar a lógica para enviar o formulário, por exemplo, usando AJAX
    alert("Formulário enviado com sucesso!");
}

