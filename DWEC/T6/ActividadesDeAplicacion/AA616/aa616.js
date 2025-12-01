const b = document.getElementById("btn");
let color = document.getElementById("color");

let cambiado = false;

function cambiaColor(){
    let p = document.getElementById("parrafo");
    /*if(cambiado){
        p.style.color = "";// vacío = vuelve al color por defecto
    }else{*/
        p.style.color = color.value;
    /*}
    cambiado = !cambiado;*/
}

b.addEventListener("click", cambiaColor);