
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i es para que afecte mayusculas como minusculas
    // g es para toda la linea u oracion 
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter")
    var txtCifrado = txtCifrado.replace(/o/igm,"ober")
    var txtCifrado = txtCifrado.replace(/i/igm,"imes")
    var txtCifrado = txtCifrado.replace(/a/igm,"ai")
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat")

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}


function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i es para que afecte mayusculas como minusculas
    // g es para toda la linea u oracion 
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm,"e")
    var txtCifrado = txtCifrado.replace(/ober/igm,"o")
    var txtCifrado = txtCifrado.replace(/imes/igm,"i")
    var txtCifrado = txtCifrado.replace(/ai/igm,"a")
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u")

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}


function copy() {
    var contenido = document.querySelector("#texto2")
    contenido.select();
    document.execCommand("copy");
    alert("¡se copio!")
}