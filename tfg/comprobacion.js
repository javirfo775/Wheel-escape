document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (!email.includes('@')) {
      alert('El campo email debe contener el carácter "@"');
      return;
    }

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      alert('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
      return;
    }

    // Si todas las validaciones pasan, puedes realizar alguna acción adicional aquí, como enviar el formulario.
    alert('Inicio de sesión exitoso!');
    form.reset();
  });
});
