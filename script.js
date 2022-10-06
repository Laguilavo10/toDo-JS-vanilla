const $ = (etiqueta) => document.querySelector(etiqueta)

import Etiqueta from "./class/Etiqueta.js";
import ToDo from "./class/ToDo.js";


let toDoContainer = $('.tareas')
let añadirBoton = $('#añadirBoton')
let EtiquetasContainer = $('.select-etiqueta')
let añadirEtiqueta = $('#añadirEtiqueta')

let toDoLocalStrorage = localStorage.getItem('toDo')
let toDoArray = []
let EtiquetasArray = []

if (toDoLocalStrorage == null ) {
    toDoArray = []
}else{
    toDoArray = JSON.parse(toDoLocalStrorage)
}

//Funciones que se hacen al cargar la pagina

EtiquetaDefault()
ToDoDisponibles()
renderTareas()
etiquetasExistentes()


//Eventos

añadirBoton.addEventListener('click', agregarToDo)
añadirEtiqueta.addEventListener('click', agregarEtiqueta)


//Funciones

function agregarToDo() {                //Agrega las nueva Tarea dentro del Array de tareas para que luego se renderize
    let inputToDo = $('#inputToDO')
    
    if (inputToDo.value == "") {
        // SI EL INPUT ESTA VACIO NO HACE NADA  
    }else{
        
        let etiquetaSeleccionada = $('.select-etiqueta')
        let indexEtiquetaSeleccionada = EtiquetasArray.findIndex((a)=>a.nombre == etiquetaSeleccionada.value)
    
        toDoArray.push(new ToDo({
            descripcion: inputToDo.value,
            etiqueta: EtiquetasArray[indexEtiquetaSeleccionada]
        }))
        
        localStorage.setItem('toDo', JSON.stringify(toDoArray))
        
        
        ToDoDisponibles()
        renderTareas()
    }
}

function agregarEtiqueta() {            //Agrega la neuva Etiqueta dentro del Array de etiquetas para que luego se renderize 
    
    let inputEtiqueta = $('#inputEtiqueta')
    if (inputEtiqueta.value == "") {
        
        //NO HACE NADA
        
    }else{
        
        let inputColorEtiqueta = $('#inputColorEtiqueta')
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
        
        etiquetasExistentes()
        
    }
}

function etiquetasExistentes() {        //Renderiza las EWtiquetas que existen
    
    let etiquetasCreadasDiv = $('.etiquetas-existentes')
    etiquetasCreadasDiv.innerText = ""
    for (const iterator of EtiquetasArray) {
        let divEtiqueta = document.createElement('div')
        let circuloColor = document.createElement('div')
        let infoEtiqueta = document.createElement('p')
        divEtiqueta.setAttribute('class', "etiqueta-div")
        circuloColor.setAttribute('class', 'color-circulo')
        circuloColor.setAttribute('style', `background-color : ${iterator.color};`)
        infoEtiqueta.innerText = iterator.nombre
        divEtiqueta.append(circuloColor, infoEtiqueta)
        etiquetasCreadasDiv.append(divEtiqueta)
    }   
}

function renderTareas(valueInput) {     //Muestra las tareas guardadas en el localStorage 
    toDoContainer.innerText = ""
    let inputToDo = $('#inputToDO')

    for (const iterator of toDoArray) {
        
        let tareaDiv = document.createElement('div')
        tareaDiv.setAttribute("class", "todo")

        let colorEtiqueta = document.createElement('div')
        colorEtiqueta.setAttribute("class", "color-circulo")
        colorEtiqueta.setAttribute("style", `background-color : ${iterator.etiqueta.color};`)
        let descToDo = document.createElement('p')
        descToDo.innerText = iterator.descripcion
        tareaDiv.append(colorEtiqueta, descToDo)
        toDoContainer.appendChild(tareaDiv)
        inputToDo.value = "" 
        ToDoDisponibles()
    }
}

function ToDoDisponibles() {            //Muestra en la parte superior cuantas tareas hay por realizar 
    let toDoDisponibles = $('.contador-todo')
    toDoDisponibles.innerText = `Tienes ${toDoArray.length} ToDos`

    if (toDoArray.length != 0 ){
        let felicitaciones = $('.congrats')
        felicitaciones.classList.add('invisible')
    }
}

function EtiquetaDefault(params) {      //me crea la instancia de la etiqueta Tareas que viene por Defecto
    EtiquetasArray.push(new Etiqueta({
        nombre: 'Tareas',
        color: '#ffb703'
    }))
    let etiquetaDivDefault = document.createElement('option')
    etiquetaDivDefault.setAttribute('value', EtiquetasArray[0].nombre)
    etiquetaDivDefault.innerText = EtiquetasArray[0].nombre
    EtiquetasContainer.append(etiquetaDivDefault)
    inputEtiqueta.value = "" 
}
