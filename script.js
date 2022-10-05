import Etiqueta from "./class/Etiqueta.js";
import ToDo from "./class/ToDo.js";


const $ = (etiqueta) => document.querySelector(etiqueta)

let toDoContainer = $('.lista-todo')

let añadirBoton = $('#añadirBoton')
let toDoArray = [] //aca estaran los ToDo para hacer 


function agregarToDo() {
    let inputToDo = $('#inputToDO').value

    //agrega la nueva tarea al array 
    toDoArray.push(new ToDo({
        descripcion: inputToDo,
        etiqueta: "buenos dias"
    }))

    const ultimaPosicionArray = toDoArray[toDoArray.length-1]
    let tareaDiv = document.createElement('div')
    tareaDiv.innerHTML = ultimaPosicionArray.descripcion
    toDoContainer.appendChild(tareaDiv)
    console.log(toDoArray);
}

añadirBoton.addEventListener('click', agregarToDo)



function name(params) {
    
}
console.log(toDoArray);
for (const iterator of toDoArray) {
        let tareaDiv = document.createElement('div')
        tareaDiv.innerHTML = "bbcita"
        toDoContainer.appendChild(tareaDiv)
}



