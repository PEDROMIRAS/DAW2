// ====== ELEMENTOS DEL DOM ======
const btnHM = document.getElementById("btnHM");
const btnImg = document.getElementById("btnImg");
const btnForm = document.getElementById("btnForm");
const btnHide = document.getElementById("btnHide");

const HW = document.getElementById("HW");
const image = document.getElementById("image");
const formContainer = document.getElementById("formulario");
const form = formContainer.querySelector("form"); // Selecciona el formulario dentro del contenedor
const inputName = document.getElementById("inputName"); // Input del formulario
const textForm = document.getElementById("texto-formulario"); // Div donde se mostrará el texto

// ====== FUNCIONES ======

// Función que oculta todas las secciones
function hideAll() {
    HW.style.display = "none";
    image.style.display = "none";
    formContainer.style.display = "none";
}

// Funciones para mostrar cada sección
function showText() {
    hideAll();
    HW.style.display = "block";
}

function showImage() {
    hideAll();
    image.style.display = "block";
}

function showForm() {
    hideAll();
    formContainer.style.display = "block";
}

// ====== EVENTOS ======

// Botones para mostrar secciones
btnHM.addEventListener("click", showText);
btnImg.addEventListener("click", showImage);
btnForm.addEventListener("click", showForm);

// Botón para ocultar todo
btnHide.addEventListener("click", hideAll);

// Capturar texto del formulario al enviar
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    const texto = inputName.value; // Obtiene el texto del input
    textForm.textContent = `Has escrito: ${texto}`; // Muestra el texto en el div
    inputName.value = ""; // Limpia el input
});