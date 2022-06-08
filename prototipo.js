//array con las respuestas correctas
let correctas = [3, 2, 2, 2];

//array donde vamos a guardar las respuesta del usuario
let opcion_elegida = {};

//función para tomar el numero de la pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
  //guardamos la respuesta elegida
  opcion_elegida[num_pregunta] = seleccionada.value;

  //el siguiente código es para poner en color blanco
  //el fondo de los inputs para cuando elige otra opción
  //armo el id para seleccionar el section correspondiente
  id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  //doy el color a label seleccionado
  seleccionada.parentNode.style.backgroundColor = "#00AA";
}

//funcion para comparar los arrays y saber cuantas estuvieron correctas

function corregir() {
  for (i = 0; i < correctas.length; i++) {
    id = "p" + i + correctas[i];
    console.log(document.getElementById(id.style));
    document.getElementById(id).style.backgroundColor = "green";
    //if (correctas[i] == Number(opcion_elegida[i])) {
    //  //document.getElementById(id).childNodes;
    //  seleccionada.parentNode.style.backgroundColor = "#FFFFF";
    //}
  }
}