const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById(
  "alertValidacionesTexto"
);
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");
// bandera
let isValid = true;
let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalEnProductos = 0;

function validarCantidad() {
  if (txtNumber.value.length == 0) {
    return false;
  } //length==0
  if (isNaN(txtNumber.value)) {
    return false;
  } // isNAN
  if (Number(txtNumber.value) <= 0) {
    return false;
  }
  return true;
} // validarCantidad()

function getPrecio() {
  return Math.round(Math.random() * 10000) / 100;
} // getPrecio()

btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.style.border = "";
  txtNumber.style.border = "";
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  isValid = true;
  // Validar el nombre del producto
  if (txtNombre.value.length < 3) {
    txtNombre.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML =
      "El <strong> Nombre </strong> no es correcto. <br/>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } // If length<3

  // Validar la cantidad
  if (!validarCantidad()) {
    txtNumber.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML +=
      "La <strong> Cantidad </strong> no es correcta. <br/>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } // !validarCantidad

  if (isValid) {
    contador++;
    precio = getPrecio();
    let row = `<tr>
                <td>${contador}</td>
                <td>${txtNombre.value}</td>
                <td>${txtNumber.value}</td>
                <td>${precio}</td>
                </tr>`;
    cuerpoTabla.insertAdjacentHTML("beforeend", row);

    costoTotal += precio * Number(txtNumber.value);
    totalEnProductos += Number(txtNumber.value);
    contadorProductos.innerText = contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = "$ " + costoTotal.toFixed(2);
    // Variables de local storage
    localStorage.setItem("contador", contador);
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("costoTotal", costoTotal);
    // Limpiamos cuadros
    txtNombre.value = "";
    txtNumber.value = "";
    txtNombre.focus();
  } // isValid
}); //btnAgregar.addEventListener

txtNombre.addEventListener("blur", function (event) {
  // Evento blur es cuando un campo pierde el this.focus, cuando se sale del campo
  txtNombre.value = txtNombre.value.trim();
}); // txtNombre.AddEventListener

txtNumber.addEventListener("blur", function (event) {
  // Evento blur es cuando un campo pierde el this.focus, cuando se sale del campo
  txtNumber.value = txtNumber.value.trim();
}); // txtNumber.AddEventListener

window.addEventListener("load", function () {
  // Variables de local storage
  if (this.localStorage.getItem("contador") != null) {
    contador = Number(this.localStorage.getItem("contador"));
  } //!null
  if (this.localStorage.getItem("totalEnProductos") != null) {
    totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"));
  } //!null
  if (this.localStorage.getItem("costoTotal") != null) {
    costoTotal = Number(this.localStorage.getItem("costoTotal"));
  } //!null
  contadorProductos.innerText = contador;
  productosTotal.innerText = totalEnProductos;
  precioTotal.innerText = "$ " + costoTotal.toFixed(2);
});
