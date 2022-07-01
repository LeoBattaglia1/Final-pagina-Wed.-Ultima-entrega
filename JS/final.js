//etiquetas p registrarse//
let capcha = document.getElementById("capcha");
let imprimeRespuestaUsuario = document.getElementById("imprimeRespuestaUsuario");
let imprimeRespuestaContrasenia = document.getElementById("imprimeRespuestaContrasenia");
let imprimeRespuestaCapcha = document.getElementById("imprimeRespuestaCapcha");

//input registrarse//
let inputCapcha = document.getElementById("inputCapcha");
let checkboxTerminos = document.getElementById("checkboxTerminos");
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let repetirContrasenia = document.getElementById("repetirContrasenia")


//boton registrarse//
let guardarDatos = document.getElementById("guardarDatos");



/*  FUNCIONES */

function generarCapcha() {
  capchaGenerado = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
  capcha.innerHTML = capchaGenerado;
}

function confirmarUsuario(){
  
  let usuarioIngresado = usuario.value;
  if(usuarioIngresado.length <= 6){    
    imprimeRespuestaUsuario.innerHTML = "El nombre de usuario de tener mas de 6 caracteres";   
  }else{
    imprimeRespuestaUsuario.innerHTML = "Nombre de usuario correcto";   
  }
}

  function confirmarContrasenia(){

    let contraseniaIngresa = contrasenia.value;
    let repContraseniaIngresada = repetirContrasenia.value;

    if(contraseniaIngresa === repContraseniaIngresada){
      imprimeRespuestaContrasenia.innerHTML = "Contrasenia correcta"
    }else{
      imprimeRespuestaContrasenia.innerHTML = "Las contrasenias no coinciden"
    }
  }

  function compararCapcha() {
    event.preventDefault();
    let capchaIngresado = Number(inputCapcha.value);
  
    if (capchaIngresado !== capchaGenerado) {
      imprimeRespuestaCapcha.innerHTML = "El codigo ingresado es incorrecto";
    } else {
      imprimeRespuestaCapcha.innerHTML = "El codigo ingresado es correcto";
    }
  }


  function ejecutarBotonGuardarDatos(){
    
    confirmarUsuario();
    confirmarContrasenia();
    compararCapcha()    
  }

checkboxTerminos.addEventListener("change", generarCapcha);
guardarDatos.addEventListener("click", ejecutarBotonGuardarDatos);







