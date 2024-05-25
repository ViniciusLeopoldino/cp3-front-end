document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const nascimento = document.getElementById('nascimento').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const complemento = document.getElementById('complemento').value;
    const genero = document.getElementById('genero').value;
    const raca = document.getElementById('raca').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    const data = {
        nome,
        email,
        cpf,
        nascimento,
        cep,
        rua,
        numero,
        cidade,
        estado,
        complemento,
        genero,
        raca
    };

    localStorage.setItem('cadastroData', JSON.stringify(data));

    window.location.href = 'success.html';
});
