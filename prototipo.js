//array con las respuestas correctas
let correctas = [3, 2, 2, 2];

//array donde vamos a guardar las respuesta del usuario
let opcion_elegida = [];

//función para tomar el numero de la pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
  //guardamos la respuesta elegida
  opcion_elegida[num_pregunta] = seleccionada.value;

  //el siguiente código es para poner en color blanco
  //el fondo de los inputs para cuando elige otra opción
  //armo el id para seleccionar el section correspondiente
  id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "#FFFFFF80";
  labels[5].style.backgroundColor = "#FFFFFF80";
  labels[7].style.backgroundColor = "#FFFFFF80";

  //doy el color a label seleccionado
  seleccionada.parentNode.style.backgroundColor = "#FFFFFF80";
}

//funcion para comparar los arrays y saber cuantas estuvieron correctas

function Resultados(){ 
for(let i = 0; i < correctas.length; i++) {
  const x = correctas[i];

  console.log(correctas[i])
}
 }

let resultado = document.getElementById("resultado");
let b = document.getElementById("resultados");







function corregir(){
 var primera = document.getElementById("pc1");
  primera.style.backgroundColor = "green";

  var segunda = document.getElementById("pc2");
  segunda.style.backgroundColor = "green";

  var tercera = document.getElementById("pc3");
  tercera.style.backgroundColor = "green";

  var cuarta = document.getElementById("pc4");
  cuarta.style.backgroundColor = "green";




 }

