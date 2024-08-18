let textArea = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");
const h2 = document.querySelector(".sin-mensaje h2");
const p = document.querySelector(".sin-mensaje p");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


//Encriptación y desencriptación
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

//Funciones para manejar los botones
function btnEncriptar (){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    ajusteContenido();
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function btnCopiar(){
    const textcopiado = mensaje.value
    textArea.value = textcopiado
    mensaje.value = "";
}


//Mostrar u ocultar información
function ajusteContenido(){
    mensaje.style.display = 'block';
    document.querySelector('.copiar').style.display = 'inline-block';
    mensaje.style.backgroundImage = 'none';
    h2.style.display = "none";
    p.style.display = "none";
    document.querySelector('.sin-mensaje').style.display = 'none';
}


