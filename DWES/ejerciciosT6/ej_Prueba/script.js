function updateTime() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("hora").textContent = this.responseText;
        }
    };

    xhttp.open("GET", "hora_server.php");
    xhttp.send();
}

// Llamar al cargar la página
window.onload = function () {
    updateTime();
    // Actualizar cada segundo
    setInterval(updateTime, 5000);
};