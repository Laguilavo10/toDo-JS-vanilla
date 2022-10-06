import Etiqueta from "./class/Etiqueta.js";
import ToDo from "./class/ToDo.js";


const $ = (etiqueta) => document.querySelector(etiqueta)

let toDoContainer = $('.lista-todo')
let añadirBoton = $('#añadirBoton')
let EtiquetasContainer = $('.select-etiqueta')
let añadirEtiqueta = $('#añadirEtiqueta')




console.log(EtiquetasContainer);

let toDoArray = [] //aca estaran los ToDo para hacer
let EtiquetasArray = [] //aca estaran los ToDo para hacer
// EtiquetasArray.push(new Etiqueta({
//     nombre: 'Mis Tareas',
//     color: bcb8b1,
// }))


function agregarToDo() {
    let inputToDo = $('#inputToDO').value
    let etiquetaSeleccionada = $('.select-etiqueta')

    //agrega la nueva tarea al array 
    toDoArray.push(new ToDo({
        descripcion: inputToDo,
        etiqueta: etiquetaSeleccionada.value
    }))

    //crea el div, le introduce la info y la pega en el HTML
    const ultimaPosicionArray = toDoArray[toDoArray.length-1]

    console.log({toDoArray});

    
    let tareaDiv = document.createElement('div')


    let colorEtiqueta = document.createElement('span')

    let divClass = tareaDiv.setAttribute("class", "todo")

    let spanClass = colorEtiqueta.setAttribute("class", "colorCirculo")


    tareaDiv.innerText = ultimaPosicionArray.descripcion
    console.log({etiquetaSeleccionada});
    colorEtiqueta.innerText = etiquetaSeleccionada.innerText


    tareaDiv.append(colorEtiqueta)
    toDoContainer.appendChild(tareaDiv)
    inputToDo = "" 
}






function agregarEtiqueta() {
    let inputEtiqueta = $('#inputEtiqueta')
    let inputColorEtiqueta = $('#inputColorEtiqueta')

    console.log('hola');
    EtiquetasArray.push(new Etiqueta({
        nombre: inputEtiqueta.value,
        color: inputColorEtiqueta.value,
    }))

    const ultimaPosicionArray = EtiquetasArray[EtiquetasArray.length-1]
    let etiquetaDiv = document.createElement('option')
    etiquetaDiv.setAttribute('value', ultimaPosicionArray.nombre)
    etiquetaDiv.innerText = ultimaPosicionArray.nombre
    EtiquetasContainer.append(etiquetaDiv)
    inputEtiqueta.value = ""
}

añadirBoton.addEventListener('click', agregarToDo)
añadirEtiqueta.addEventListener('click', agregarEtiqueta)









