const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById(
  "alertValidacionesTexto"
);

function validarCantidad() {
  if (txtNumber.value.length == 0) {
    return false;
  }
  if (isNaN(txtNumber.value)) {
    return false;
  } // isNAN
  if (Number(txtNumber.value) <= 0) {
    return false;
  }
  return true;
} // validarCantidad()

btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.style.border = "";
  txtNumber.style.border = "";
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  // Validar el nombre del producto
  if (txtNombre.value.length < 3) {
    txtNombre.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML =
      "El <strong> Nombre </strong> no es correcto. <br/>";
    alertValidaciones.style.display = "block";
    //return false;
  } // If length<3

  // Validar la cantidad
  if (!validarCantidad()) {
    txtNumber.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML +=
      "La <strong> cantidad </strong> no es correcta. <br/>";
    alertValidaciones.style.display = "block";
  } // !validarCantidad
}); //btnAgregar.addEventListener

txtNombre.addEventListener("blur", function (event) {
  // Evento blur es cuando un campo pierde el this.focus, cuando se sale del campo
  txtNombre.value = txtNombre.value.trim();
}); // txtNombre.AddEventListener

txtNumber.addEventListener("blur", function (event) {
  // Evento blur es cuando un campo pierde el this.focus, cuando se sale del campo
  txtNumber.value = txtNumber.value.trim();
}); // txtNumber.AddEventListener
