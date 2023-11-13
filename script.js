function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    if (email.trim() === '' || password.trim() === '' || username.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    alert('Login bem-sucedido!');
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}