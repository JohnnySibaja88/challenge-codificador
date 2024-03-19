/* 
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

*/

// let textoLimpio = '';
// let textoCorregido = textoLimpio.replace(/[^\sa-z]|\s+$/ig, '');

// if (textoLimpio !== textoCorregido) {
//   alert('Se han detectado números o símbolos en el texto. Han sido eliminados.');
// }

// textoLimpio = textoCorregido.toLowerCase().replace(/\s+/g, ' ');



const diccionarioEncriptador = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
};
const diccionarioDesEncriptador = {
  "ufat" : "u",
  "ober" : "o",
  "ai"  :   "a",
  "imes" : "i",
  "enter": "e",
};

const textoIngresado = ''
const textoEncriptado = encriptarTexto(textoIngresado)
const textoDesencriptado= desencriptarTexto(textoEncriptado)



function encriptarTexto(texto){
  // Prepara una variable vacía, que nos va a servir de "contenedor" del resultado final
  let resultado = "";
  texto = texto.toLowerCase();
  // Iteramos sobre cada letra del texto, en este caso, posicionDeLetra nos va a dar los numeros de la letra
  // Por ejemplo
  // Gino => 0, 1, 2, 3
  for( let posicionDeLetra in texto){

      // Extraemos la letra que esté en el texto, en la posición indicada por posicionDeLetra
      // Para la primera vuelta, posicionDeLetra va a ser igual a cero, por tanto, texto[posicionDeLetra] nos va a dar la letra "G"
      // Para la segunda vuelta, posicionDeLetra va a ser igual a uno, por tanto, texto[posicionDeLetra] nos va a dar la letra "i"
      // Y así sucesivamente
      let letraExtraida = texto[posicionDeLetra];

      // Si la letra extraida existe en el diccionario de encriptación, entonces la reemplazamos por su valor
      if(diccionarioEncriptador[letraExtraida]){
          // Acá hacemos el reemplazo de la letra
          // Por ejemplo, si la letra extraida es 'i', entonces la reemplazamos por 'imes'
          letraExtraida = diccionarioEncriptador[letraExtraida];
      }
      
      // Concatenamos la letra extraida a la variable de resultado final
      resultado += letraExtraida;
  }

  // Retornamos el resultado final
  return resultado;
}






function desencriptarTexto(texto){
    texto = texto.toLowerCase();
    // Iteramos sobre cada token en el diccionario de desencriptación
    // Por ejemplo, en la primera vuelta, tokenEncriptado va a ser igual a "ufat"
    for(tokenEncriptado in diccionarioDesEncriptador){
        // Reemplazamos el token encriptado por su valor en el diccionario de desencriptación
        // Es decir, si el texto es "gaitober", entonces reemplazamos "ufat" por "u"
        texto = texto.replaceAll(tokenEncriptado, diccionarioDesEncriptador[tokenEncriptado])
    }
    return texto;
};


function obtenerTextoIngresado(){
    const texto = document.getElementById("textoIngresado").value;
    return texto;
    }

function setResultado(texto){
    document.getElementById("resultado").innerText = texto;
}

function btnEncriptar(){
    let textoIngresado = obtenerTextoIngresado ();
     let textoCorregido = textoIngresado.replace(/[^\sa-z]|\s+$/ig, '').toLowerCase();
        if (textoIngresado !== textoCorregido) {
        alert('Se han detectado mayúsculas, números y/o símbolos en el texto. Han sido eliminados o cambiados.');
            }

        textoIngresado = textoCorregido.replace(/\s+/g, ' ');

 
    setResultado(encriptarTexto(textoIngresado))
}

function btnDesEncriptar(){
    let textoIngresado= obtenerTextoIngresado()
    setResultado(desencriptarTexto(textoIngresado))
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


