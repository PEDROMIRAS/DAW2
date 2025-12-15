let cont = 0;
const contador = document.getElementById('contador');

const btn = document.querySelector('button');

btn.addEventListener('click', function(btn){
    cont++;
    contador.textContent = cont;
});
