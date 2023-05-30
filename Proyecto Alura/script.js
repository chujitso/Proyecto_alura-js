const textArea = document.querySelector(".text-area");
const textMsj = document.querySelector(".mensaje");

//"La letra "e" es convertida para "enter""
//"La letra "i" es convertida para "imes""
//"La letra "a" es convertida para "ai""
//"La letra "o" es convertida para "ober""
//"La letra "u" es convertida para "ufat""



function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    textMsj.value = textoEncriptado
    textArea.value = "";
    textMsj.style.backgroundImage ="none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    textMsj.value = textoEncriptado
    textArea.value = "";
   
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}


function copyText() {
  var copyText = document.getElementById("boton");
  navigator.clipboard.writeText(copyText.value);
}

function pasteText() {
  var pasteText = document.getElementById("pegar");
  navigator.clipboard.readText().then(function(clipText) {
    document.getElementById("pegar").value = clipText;
    });
}

 

