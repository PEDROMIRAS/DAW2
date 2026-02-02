const btnMultiplicar = document.getElementById('btnEnviar');

btnMultiplicar.addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.forms[0];
    const data = new FormData(form);

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('resultado').textContent = this.responseText;
        }
    };

    xhttp.open('POST', 'multiplicar.php');
    xhttp.send(data);

    form.reset();
});