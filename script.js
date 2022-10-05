import Etiqueta from "./class/Etiqueta.js";
import ToDo from "./class/ToDo.js";


const $ = (etiqueta) => document.querySelector(etiqueta)

let toDoContainer = $('.lista-todo')

let añadirBoton = $('#añadirBoton')
let toDoArray = [] //aca estaran los ToDo para hacer 


añadirBoton.addEventListener('click', ()=>{
    let inputToDo = $('#inputToDO').value

    toDoArray.push(new ToDo({
        descripcion: inputToDo,
        etiqueta: "buenos dias"
    }))


} )




console.log(toDoArray);
for (const iterator of toDoArray) {
        let tareaDiv = document.createElement('div')
        tareaDiv.innerHTML = "bbcita"
        toDoContainer.appendChild(tareaDiv)
}



