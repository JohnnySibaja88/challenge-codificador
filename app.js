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
let textoLimpio = 'uno dos le saco el arr2oz';
let textoCorregido = textoLimpio.replace(/[^\sa-z]|\s+$/ig, '');

if (textoLimpio !== textoCorregido) {
  alert('Se han detectado números o símbolos en el texto. Han sido eliminados.');
}

textoLimpio = textoCorregido.toLowerCase().replace(/\s+/g, ' ');

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


const resultadoEncriptado = encriptarPalabra(diccionarioEncriptador);
const resultadoDesencriptado = desencriptarTexto(diccionarioDesEncriptador) 


function encriptarPalabra(diccionario) {
    let palabraEncriptada = '';
  
    for (let i = 0; i < textoLimpio.length; i++) {
      const letra = textoLimpio[i];
  
      // Verificar si la letra está en el diccionario
      if (letra in diccionario) {
        // Reemplazar la letra por su valor correspondiente
        palabraEncriptada += diccionario[letra];
      } else {
        // Si la letra no está en el diccionario, mantenerla sin cambios
        palabraEncriptada += letra;
      }
    }
  
    return palabraEncriptada;
  }


function desencriptarTexto(diccionarioDeDesencriptacion){
    let texto = textoLimpio
    texto = texto.toLowerCase();
    // Iteramos sobre cada token en el diccionario de desencriptación
    // Por ejemplo, en la primera vuelta, tokenEncriptado va a ser igual a "ufat"
    for(tokenEncriptado in diccionarioDeDesencriptacion){
        // Reemplazamos el token encriptado por su valor en el diccionario de desencriptación
        // Es decir, si el texto es "gaitober", entonces reemplazamos "ufat" por "u"
        texto = texto.replaceAll(tokenEncriptado, diccionarioDeDesencriptacion[tokenEncriptado])
    }
    return texto;
};



console.log(textoLimpio)
 console.log(resultadoEncriptado)
console.log(resultadoDesencriptado)