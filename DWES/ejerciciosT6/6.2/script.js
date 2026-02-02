function lineas_producto() {
    const xhttp = new XMLHttpRequest();
    const lista = document.getElementById('lista');

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const productos = JSON.parse(this.responseText);

            // Limpiar lista antes de rellenar
            lista.innerHTML = '';

            // Recorrer cada producto
            for (const clave in productos) {
                const item = document.createElement('li');
                item.textContent = productos[clave];
                lista.appendChild(item);
            }
        }
    };

    xhttp.open('GET', 'datos_lineas_json.php', true);
    xhttp.send();
}

lineas_producto();