

function jugar(rondas = 5){
    
    let Jugador1 = 0;
    for (let i = 0; i < rondas; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        Jugador1 += dado1 + dado2;
        console.log(`Jugador1: Ronda ${i + 1}: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);

    }
    let Jugador2 = 0;
    for (let i = 0; i < rondas; i++) {
        let dado1 = Math.floor(Math.random() * 6)+1;
        let dado2 = Math.floor(Math.random() * 6)+1;
        Jugador2 += dado1 + dado2;
        console.log(`Jugador2: Ronda ${i + 1}: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
    }
    console.log(`Jugador1: ${Jugador1}`);
    console.log(`Jugador2: ${Jugador2}`);
    
    if (Jugador1 > Jugador2) {
        console.log('Jugador1 gana');
    } else if (Jugador1 == Jugador2) {
        console.log('Empate')
    } else if (Jugador2 > Jugador1) {
        console.log('Jugador2 gana');
    } 

}

jugar();
jugar(3);
jugar(10);