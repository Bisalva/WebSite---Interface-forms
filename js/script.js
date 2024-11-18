function borrarFormulario() {
    // Borra todos los campos del formulario
    document.getElementById('formulario').reset();
    alertaBorrado();
    
  }

  function alertaBorrado(){
    // Muestra una alerta
    alert("El formulario ha sido borrado.");
  }