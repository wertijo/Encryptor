
var texto;
var encriptado;
var desencriptado;
var acentos;
var validador;

//funciones para pasar de Strig a cadena de arreglo
function pasarArray(cadena, separador) {
    var arrayDeCadena = cadena.split(separador);
    return arrayDeCadena;
}

//Funciones para evaluar mayuscuas y caracteres especiales
function evaluarTextoEscrito() {
    let texto= document.querySelector(".texto_inicial").value;    
    let validador = texto.match(/^[a-z\s]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        return true;
    }
}

//Funciones de encriptado
//Este codigo lo quise hacer lo más autónomo posible, sin usar tantas funciones
function encriptar() {

    if (!evaluarTextoEscrito()) {
        let texto= document.querySelector(".texto_inicial").value;
        encriptado = pasarArray(texto, "");

        for (var i = 0; i <= encriptado.length - 1; i++) {

            let a = "ai";
            let e = "enter";
            let y = "imes";
            let o = "ober";
            let u = "ufat";


            if (encriptado[i] == "a") {
                encriptado[i] = a;
            } else if (encriptado[i] == "e") {
                encriptado[i] = e;
            } else if (encriptado[i] == "i") {
                encriptado[i] = y;
            } else if (encriptado[i] == "o") {
                encriptado[i] = o;
            } else if (encriptado[i] == "u") {
                encriptado[i] = u;
            } else {
                encriptado[i] = encriptado[i];
            }

        }

        encriptado = encriptado.toString();
        encriptado = encriptado.replace(/,/g, "");

        
        document.querySelector(".texto_final").style.backgroundImage="none";
        document.querySelector(".texto_final").value = encriptado;
    }

    else {
        document.querySelector(".texto_final").value = "Hubo un error";
    }
}

//Funciones de desencriptado
//Este codigo va a ser más coto, usando funciones

function desencriptar() {
    let texto= document.querySelector(".texto_inicial").value;
    desencriptado=texto;

    if(!evaluarTextoEscrito()){
    desencriptado = desencriptado.replace(/(ai|enter|imes|ober|ufat)/g, function (palabra) {
        switch (palabra) {
            case 'ai': return "a";
            case 'enter': return "e";
            case 'imes': return "i";
            case 'ober': return "o";
            case 'ufat': return "u";
            default: break;
        }
    }
    )

    document.querySelector(".texto_final").value = desencriptado;}

    else{
        document.querySelector(".texto_final").value = "Hubo un error";
    }

}


//Funciones de borrado

function borrar() {
    if(screen.width>480){
    document.querySelector(".texto_final").style.backgroundImage=" url('imagenes/Muñeco.png')";
    }
    document.querySelector(".texto_inicial").value = "";
    document.querySelector(".texto_final").value = "";
};

// Funciones de copiar

function copiar() {
    var copiarTexto = document.querySelector(".texto_final").value
    navigator.clipboard.writeText(copiarTexto);
}

