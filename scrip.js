let texto = document.querySelector("#texto");
let texto2 = document.querySelector("#texto2");
let fondo = document.querySelector("#fondo");
let tituloMensaje = document.querySelector("#mensaje_encriptado");
let parrafo = document.querySelector("#parrafo");
let copia= document.querySelector(".btn-copy");
let caja = document.querySelector(".encriptado");
const media = window.matchMedia('(max-width: 800px)');
function encriptar() {
        
    let textoCrifrado = texto.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")  
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        
     if(texto.value.length != 0){
        if(media.matches){
            caja.setAttribute("style", "height:60%");
        }else{
            caja.setAttribute("style", "height:90%");
        }
        copia.setAttribute("style", "display:block");
        texto2.setAttribute("style", "display:block");
        fondo.setAttribute("style", "display:none");
        parrafo.setAttribute("style", "display:none");
        tituloMensaje.setAttribute("style", "display:none");
        texto.value=textoCrifrado
        texto2.value=textoCrifrado
        Swal.fire({
            title: "Mensaje Encriptado con éxito",
            timer: 1500,
            icon: "success"
          });        
    }else{
        copia.setAttribute("style", "display:none");
        texto2.setAttribute("style", "display:none");
        fondo.setAttribute("style", "display:block");
        parrafo.setAttribute("style", "display:block");
        fondo.src="img/error.png"
        tituloMensaje.textContent="Ningun Mensaje fue encontrado"
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar"
        Swal.fire({
            title: "Oops...",
            text: "Debes ingresar un texto",
            timer: 2000,
            icon: "error"
          });
    }                         
}

function desencriptar(){         
    
    let textoCrifrado = texto.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")  
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
    if(texto.value.length != 0){
        if(media.matches){
            caja.setAttribute("style", "height:60%");
        }else{
            caja.setAttribute("style", "height:90%");
        }
        copia.setAttribute("style", "display:block");
        texto2.setAttribute("style", "display:block");
        fondo.setAttribute("style", "display:none");
        parrafo.setAttribute("style", "display:none");
        tituloMensaje.setAttribute("style", "display:none");
        texto.value=textoCrifrado
        texto2.value=textoCrifrado
        Swal.fire({
            title: "Mensaje Desncriptado con éxito",
            timer: 1500,
            icon: "success"
        });
    }else{
        copia.setAttribute("style", "display:none");
        texto2.setAttribute("style", "display:none");
        fondo.setAttribute("style", "display:block");
        parrafo.setAttribute("style", "display:block");
        fondo.src="img/error.png"
        Swal.fire({
            title: "Oops...",
            text: "Debes ingresar un texto",
            timer: 2000,
            icon: "error"
          });
    }    
}

function copiar(){
    navigator.clipboard.writeText(texto.value)
.then(() => {
    Swal.fire({
        title: "texto copiado en el portapapeles",
        timer: 1000,
        // icon: "error"
      });
},() => {
  console.error('Error al copiar');
  /* Rechazado - fallo al copiar el texto al portapapeles */
});


}