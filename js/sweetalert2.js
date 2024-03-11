document.getElementById('miFormulario').addEventListener('submit', function(event) {
  // Evitamos que el formulario se envíe automáticamente
  
  // Verificamos si todos los campos requeridos están llenos
  if (validateForm()) {
      // Mostramos la alerta si el formulario está completo
      Swal.fire({
          icon: 'success',
          text: '¡Gracias por contactarme! Te responderé lo antes posible.',
          imageAlt: 'Custom image',
          footer: '<img src="img/icono.png" alt="logo" style="width:200">',
          timer: 6000,
      })
  }
});

function validateForm() {
  // Obtenemos todos los campos requeridos del formulario
  const requiredFields = document.querySelectorAll('#miFormulario [required]');

  // Verificamos que todos los campos requeridos tengan algún valor
  for (const field of requiredFields) {
      if (!field.value.trim()) {
          return false;
      }
  }

  // Si todos los campos requeridos tienen valor, el formulario está completo
  return true;
}