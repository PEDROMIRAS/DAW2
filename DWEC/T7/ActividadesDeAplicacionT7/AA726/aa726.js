// Selección de elementos del HTML y definición de colores
const timerDisplay = document.getElementById('clock');
const gameContainer = document.getElementById('game-container');
const baseColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'lime', 'gold', 'magenta', 'teal', 'navy', 'coral'];

// Variables para seguir el progreso de la partida y el tiempo
let gameColors; 
let matchesFound = 0;
let totalSeconds = 0;
let timerInterval;
let isGameStarted = false;

// Transforma los segundos acumulados en formato visual (00:00:00)
function formatTime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    
    // Función interna para asegurar dos dígitos
    const pad = (n) => n < 10 ? '0' + n : n;
    
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

// Activa el cronómetro para que sume un segundo cada 1000ms
function startTimer() {
    // Limpiamos cualquier intervalo previo para evitar que el tiempo se acelere
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        totalSeconds++;
        timerDisplay.textContent = formatTime(totalSeconds);
    }, 1000);
}

// Genera las cartas físicamente en el contenedor
function createCards() {
    // Limpiamos el contenedor antes de generar las cartas nuevas
    gameContainer.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('draggable', 'true'); 
        card.id = `card-${i}`; 
        
        // El color se guarda como un dato interno, invisible para el jugador
        card.dataset.secretColor = gameColors[i];
        
        gameContainer.appendChild(card);
    }
}

// Gestiona las interacciones de arrastrar y soltar (Drag & Drop)
function setupGameLogic() {
    // Al empezar el arrastre, memorizamos qué carta se está moviendo
    gameContainer.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('card')) {
            e.dataTransfer.setData('text/plain', e.target.id);
        }
    });

    // Permite que las cartas se puedan soltar unas sobre otras
    gameContainer.addEventListener('dragover', (e) => e.preventDefault());

    // Al soltar la carta sobre otra, ejecutamos la comparación
    gameContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedCard = document.getElementById(draggedId);
        const targetCard = e.target;

        // Verificamos que sea una carta válida, distinta a la de origen y no revelada
        if (targetCard.classList.contains('card') && targetCard !== draggedCard && !targetCard.classList.contains('revealed')) {
            const originColor = draggedCard.dataset.secretColor;
            const targetColor = targetCard.dataset.secretColor;

            // Revelamos temporalmente los colores
            draggedCard.style.backgroundColor = originColor;
            targetCard.style.backgroundColor = targetColor;

            if (originColor === targetColor) {
                // Si coinciden, sumamos pareja y bloqueamos las cartas
                matchesFound++;
                draggedCard.classList.add('revealed');
                targetCard.classList.add('revealed');
                draggedCard.setAttribute('draggable', 'false');
                targetCard.setAttribute('draggable', 'false');

                // Si se completan todas las parejas, detenemos el tiempo y limpiamos la interfaz
                if (matchesFound === 15) {
                    clearInterval(timerInterval);
                    
                    // Crear un contenedor para el mensaje que no rompa el grid
                    gameContainer.innerHTML = `<div style="grid-column: 1 / -1; text-align: center;">
                        <h1 style="color: yellow; background-color: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
                            ¡Victoria! Tiempo: ${timerDisplay.textContent}
                        </h1>
                    </div>`;
                
                    isGameStarted = false;
                    timerDisplay.style.display = 'none';
                    document.getElementById('instrucciones').style.display = 'block';
                } 
                
            } else {
                // Si no coinciden, vuelven a negro tras un segundo
                setTimeout(() => {
                    if (!draggedCard.classList.contains('revealed')) draggedCard.style.backgroundColor = 'black';
                    if (!targetCard.classList.contains('revealed')) targetCard.style.backgroundColor = 'black';
                }, 1000);
            }
        }
    });
}

// Reinicia los valores e inicia una nueva sesión de juego
function startGame() {
    // REINICIO DE VARIABLES: Asegura que el cronómetro empiece de cero
    totalSeconds = 0;
    matchesFound = 0;
    timerDisplay.textContent = '00:00:00';
    
    // MEZCLA ALEATORIA: Creamos un tablero distinto para cada partida
    gameColors = [...baseColors, ...baseColors].sort(() => Math.random() - 0.5);

    // GESTIÓN VISUAL: Ocultamos instrucciones y mostramos el reloj
    document.getElementById('instrucciones').style.display = 'none';
    timerDisplay.style.display = 'block';
    
    createCards();
    startTimer();
}

// Escuchador para la tecla Espacio para iniciar el juego
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); 
        if (!isGameStarted) {
            isGameStarted = true;
            startGame();
        }
    }
});

// Configuración inicial de eventos (se ejecuta una sola vez al cargar la página)
setupGameLogic();