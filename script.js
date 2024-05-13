document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var opciones = document.getElementById('opciones').value;

    // Redirige a una nueva página y pasa los datos como parámetros de la URL
    window.location.href = 'pagina.html?nombre=' + encodeURIComponent(nombre) + '&email=' + encodeURIComponent(email) + '&opciones=' + encodeURIComponent(opciones);
});
