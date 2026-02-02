const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', (e)=>{
    e.preventDefault();
    const form = document.forms[0];
    const data = new FormData(form);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('datos').innerHTML = this.responseText;
        }
    }

    xhttp.open('POST', 'datos.php');
    xhttp.send(data);

    form.reset();
})