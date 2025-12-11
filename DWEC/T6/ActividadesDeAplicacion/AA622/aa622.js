const expira = 60*30;
document.cookie = "nombre=Pedro;edad=25";

document.cookie =`nombre=Pedro;max-age=${expira}`;
document.cookie =`edad=25;max-age=${expira}`;

