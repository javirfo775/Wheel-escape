document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var tel=document.getElementById('telefono').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (/[\d]/.test(nombre)) {
      alert('El campo nombre no debe contener números.');
      return;
    }

    function validarEmail(email) {
	  var regex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
	  return regex.test(email);
	}

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      alert('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Si todas las validaciones pasan, puedes realizar alguna acción adicional aquí, como enviar el formulario.
    alert('Registro exitoso!');
    form.reset();
  });
});
