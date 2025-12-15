const teclasPermitidas = ['0','1','2','3','4','5','6','7','8','9'];
const teclas = {
    0:'./images/num0.png',
    1:'./images/num1.png',
    2:'./images/num2.png',
    3:'./images/num3.png',
    4:'./images/num4.png',
    5:'./images/num5.png',
    6:'./images/num6.png',
    7:'./images/num7.png',
    8:'./images/num8.png',
    9:'./images/num9.png'
}

const image = document.querySelector('img');

document.addEventListener('keydown',(keyPress)=>{
    if (teclasPermitidas.includes(keyPress.key)) {
        const nuevaImagen = teclas[keyPress.key];
        if (nuevaImagen) {
            image.src = nuevaImagen;
            console.log(keyPress.key);
        }
    }
});
