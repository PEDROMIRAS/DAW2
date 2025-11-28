let enlaces = window.setTimeout(()=>{
    let id1 = document.getElementById('a1');
    if(id1){
        id1.remove();
        console.log("Primer enlace eliminado.");
    }
    setTimeout(()=>{
        let id2 = document.getElementById('a2');
        if (id2) {
            id2.remove();
            console.log("Segundo enlace eliminado.")
        }
    },10000);
},5000);

