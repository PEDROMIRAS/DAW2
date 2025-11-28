
/*Reecribe la siguiente funcion de remplazo de caracteres utiilizando expresiones regulares: 
    function escapeHTML(text){
        var replacements = [["&","&amp;"],["\"","&quot;"],["<","&lt;"],[">","&gt;"]];
        foreach(replacements, function(replace){
            text = text.replace(replace[0],replace[1]);
        });
        return text;
    }*/

function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")   // Reemplaza todos los &
        .replace(/"/g, "&quot;")  // Reemplaza todas las comillas "
        .replace(/</g, "&lt;")    // Reemplaza todos los <
        .replace(/>/g, "&gt;");   // Reemplaza todos los >
}

// Ejemplo
console.log(escapeHTML('5 < 6 & 7 > 4 "test"'));
// Salida: 5 &lt; 6 &amp; 7 &gt; 4 &quot;test&quot;
