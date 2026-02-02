window.onload = () => {
    const xhttp = new XMLHttpRequest();
    const tabla = document.getElementById('tabla');

    xhttp.onreadystatechange = function() {
        //Verificamos qe la transaccion de red se ha finalizado correctamente
        if (this.readyState === 4) {
            //Verificamos que la respuesta del servidor sea exitosa.
            if(this.status === 200){
                // Convertimos la respuesta JSON a un array de objetos
                const comunidad = JSON.parse(this.responseText);

                // Usamos forEach para iterar sobre cada objeto
                comunidad.forEach(personaje => {
                    const row = document.createElement('tr');
                    const nombre = document.createElement('td');
                    const raza = document.createElement('td');
                    const poder = document.createElement('td');

                    // Accedemos a las propiedades directamente del objeto 'personaje'
                    nombre.textContent = personaje.nombre;
                    raza.textContent = personaje.raza;
                    poder.textContent = personaje.poder;

                    // Añadimos cada celda individualmente a la fila
                    row.appendChild(nombre);
                    row.appendChild(raza);
                    row.appendChild(poder);

                    // Finalmente añadimos la fila a la tabla
                    tabla.appendChild(row);
                });
            }else { //Si el servidor falla mostramos un error
                console.error("¡Los orcos han interceptado el mensaje! Error: " + this.status);
            }
            
        }
    }
    xhttp.open('GET', 'datos_comunidad_del_anillo.php');
    xhttp.send();
}