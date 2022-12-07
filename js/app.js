
const nombre = document.getElementById('nombre');
const paterno = document.getElementById('paterno');
const materno = document.getElementById('materno');

const curp = document.getElementById('curp');
const occ = document.getElementById('occ');

const promedio = document.getElementById('promedio');
const estado = document.getElementById('estado');
const nivel = document.getElementById('nivel');



const submit = document.getElementById('submit');

submit.addEventListener('click', validar);

function validar() {
    if(nombre.value === '' || paterno.value === '' || materno.value === '' || curp.value === '' || occ.value === '') {
        alerta('Por favor revisa que la información que ingresaste sea correcta.');
        return;
    }
    confirm();
}

function alerta(mensaje) {
    Swal.fire({
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 2000
      })
}


function confirm() {
    Swal.fire({
        title: '¿Desea enviar su formulario de pre-registro?',
        showDenyButton: true,
        confirmButtonText: 'Enviar',
        denyButtonText: `Editar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Enviado!', '', 'success')
          setTimeout(() => {
            window.location.href = "../comprobante.html";
          }, 3000);
        } else if (result.isDenied) {
          Swal.fire('Por favor llena corractamente el formulario', '', 'info')
        }
      })
}