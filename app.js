
function verificar(){

    let textoDeUsuario = (document.getElementById('textoEncriptar').value);    
    let regex = /^[a-z\s¡!]+$/;
    if (!regex.test(textoDeUsuario)) {
        alert("El texto solo debe contener letras minúsculas, sin acentos ni caracteres especiales.");
        document.getElementById('encontrado').style.visibility = 'visible';
        document.getElementById('activar').style.visibility = 'hidden';
        document.getElementById('cajaTexto').value = "";
        return true; 
    } else return false;


}


function encriptarTexto() {
    

    if (!verificar()) {
        let textoDeUsuario = (document.getElementById('textoEncriptar').value); 
        console.log("hola");
        
let textoEncriptado = textoDeUsuario
        
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat");
    
        document.getElementById('cajaTexto').value = textoEncriptado;
        document.getElementById('activar').style.visibility = 'visible';
        document.getElementById('encontrado').style.visibility = 'hidden';
        

    return textoEncriptado;
    }
}

function desencriptarTexto() {

    let textoDeUsuario = (document.getElementById('textoEncriptar').value);
    if (!verificar()) {
    
    let textoDesencriptado = textoDeUsuario
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
            document.getElementById('cajaTexto').value = textoDesencriptado;
    
        return textoDesencriptado;
    }
    }
    function copiarTexto() {       
        const textoACopiar = document.getElementById('cajaTexto').value;
        console.log(textoACopiar);
    
        navigator.clipboard.writeText(textoACopiar).then(function() {       
    
        document.getElementById('textoEncriptar').value = textoACopiar;
        document.getElementById('cajaTexto').value = "";

        }).catch(function(err) {
   
            console.error('Error al copiar texto: ', err);
        });
    }



