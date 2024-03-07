
const diccionarioDeEncriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}


function encriptarTexto(texto){
    // Prepara una variable vacía, que nos va a servir de "contenedor" del resultado final
    let resultado = "";
    texto = texto.toLowerCase();
    // Iteramos sobre cada letra del texto, en este caso, posicionDeLetra nos va a dar los numeros de la letra
    // Por ejemplo
    // Gino => 0, 1, 2, 3
    for(posicionDeLetra in texto){

        // Extraemos la letra que esté en el texto, en la posición indicada por posicionDeLetra
        // Para la primera vuelta, posicionDeLetra va a ser igual a cero, por tanto, texto[posicionDeLetra] nos va a dar la letra "G"
        // Para la segunda vuelta, posicionDeLetra va a ser igual a uno, por tanto, texto[posicionDeLetra] nos va a dar la letra "i"
        // Y así sucesivamente
        let letraExtraida = texto[posicionDeLetra];

        // Si la letra extraida existe en el diccionario de encriptación, entonces la reemplazamos por su valor
        if(diccionarioDeEncriptacion[letraExtraida]){
            // Acá hacemos el reemplazo de la letra
            // Por ejemplo, si la letra extraida es 'i', entonces la reemplazamos por 'imes'
            letraExtraida = diccionarioDeEncriptacion[letraExtraida];
        }
        
        // Concatenamos la letra extraida a la variable de resultado final
        resultado += letraExtraida;
    }

    // Retornamos el resultado final
    return resultado;
}

const diccionarioDeDesencriptacion = {
    "ufat": "u",
    "ober": "o",
    "ai": "a",
    "imes": "i",
    "enter": "e"
}

function desencriptarTexto(texto){
    texto = texto.toLowerCase();
    // Iteramos sobre cada token en el diccionario de desencriptación
    // Por ejemplo, en la primera vuelta, tokenEncriptado va a ser igual a "ufat"
    for(tokenEncriptado in diccionarioDeDesencriptacion){
        // Reemplazamos el token encriptado por su valor en el diccionario de desencriptación
        // Es decir, si el texto es "gaitober", entonces reemplazamos "ufat" por "u"
        texto = texto.replaceAll(tokenEncriptado, diccionarioDeDesencriptacion[tokenEncriptado])
    }
    return texto;
}


function encriptarTextoDeUsuario(){
    // Obtenemos el texto del input
    const texto = document.getElementById("textoLimpio").value;
    setResultado(encriptarTexto(texto));
}

function desencriptarTextoDeUsuario(){
    const texto = document.getElementById("textoLimpio").value;
    setResultado(desencriptarTexto(texto));
}

function copiarAlClipboard(){
    let textoPorCopiar = document.getElementById("resultado").innerHTML;
    if(textoPorCopiar === ""){
        alert("No hay texto para copiar");
        return;
    }
    navigator.clipboard.writeText(textoPorCopiar);
    alert("Texto copiado al portapapeles");
}


function setResultado(texto){
    document.getElementById("resultado").innerText = texto;
}