const caja = document.getElementById('caja');

let x = 0;
let y = 0;
const step = 10;

window.onload = ()=>{
    document.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowUp'){
            y -= step;
        }else if(e.key === 'ArrowDown'){
            y += step;
        }else if(e.key === 'ArrowLeft'){
            x -= step;
        }else if(e.key === 'ArrowRight'){
            x += step;
        }
        caja.style.left = x + 'px';
        caja.style.top = y + 'px';
        e.preventDefault();
    })
};