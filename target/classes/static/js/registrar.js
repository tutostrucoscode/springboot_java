// Call the dataTables jQuery plugin
$(document).ready(function () {
// on ready
});

async function registrarUsuario() {
    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    let repetirPasspord = document.getElementById('txtRepetirPassword').value;
    if (repetirPasspord !== datos.password) {
        alert('La contrasena ingresada es diferente')
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    alert("La cuenta se creo con exito");
    window.location.href = 'login.html'

}
