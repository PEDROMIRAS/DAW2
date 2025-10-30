// Diccionario: Español -> Traducciones (Inglés, Francés, Alemán)
// Se crea un objeto Map llamado "diccionario". 
// Cada clave es una palabra en español, y su valor es otro Map con las traducciones a tres idiomas.
const diccionario = new Map([
    ['hola', new Map([
        ['inglés', 'hello'],
        ['francés', 'bonjour'],
        ['alemán', 'hallo']
    ])],
    ['adiós', new Map([
        ['inglés', 'goodbye'],
        ['francés', 'au revoir'],
        ['alemán', 'auf wiedersehen']
    ])],
    ['coche', new Map([
        ['inglés', 'car'],
        ['francés', 'voiture'],
        ['alemán', 'auto']
    ])],
    ['casa', new Map([
        ['inglés', 'house'],
        ['francés', 'maison'],
        ['alemán', 'haus']
    ])],
    ['perro', new Map([
        ['inglés', 'dog'],
        ['francés', 'chien'],
        ['alemán', 'hund']
    ])]
]);

// Escribe un título en el documento HTML
document.write('<h2>Diccionario de Traducciones</h2>')

// Recorre todas las entradas del diccionario principal
// Cada entrada tiene:
// - 'espanol': palabra en español (clave del Map principal)
// - 'traducciones': otro Map con las traducciones a distintos idiomas
for (const [espanol, traducciones] of diccionario) {
    // Muestra la palabra en español en negrita y mayúsculas
    document.write(`<b>${espanol.toUpperCase()}</b>: <br> `);

    // Recorre el sub-Map con las traducciones
    // Cada entrada tiene:
    // - 'idioma': el nombre del idioma
    // - 'palabra': la traducción correspondiente
    for (const [idioma, palabra] of traducciones) {
        // Muestra el idioma en mayúsculas seguido de la palabra traducida
        document.write(` ${idioma.toUpperCase()}: ${palabra}`);
        document.write('<br>'); // Salto de línea después de cada traducción
    }

    // Deja un espacio entre cada grupo de palabras
    document.write('<br>');
}