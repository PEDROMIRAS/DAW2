const btnHM = document.getElementById("btnHM");
const btnImg = document.getElementById("btnImg");
const btnForm = document.getElementById("btnForm");
const HW = document.getElementById("HW");
const image = document.getElementById("image");
const form = document.getElementById("formulario");

function showText(){
    HW.style.display = "block";
    image.style.display = "none";
    form.style.display = "none";
};

function showImage(){
    HW.style.display = "none";
    image.style.display = "block";
    form.style.display = "none";
}
function showForm(){
    HW.style.display = "none";
    image.style.display = "none";
    form.style.display = "block";
}

btnHM.addEventListener("click", showText);
btnImg.addEventListener("click",showImage);
btnForm.addEventListener("click", showForm);