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
    btnHM.style.display = "none";
    btnImg.style.display = "block";
    btnForm.style.display = "none";
}
function showForm(){
    btnHM.style.display = "none";
    btnImg.style.display = "none";
    btnForm.style.display = "block";
}

btnHM.addEventListener("click", showImage);