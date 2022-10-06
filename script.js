import Etiqueta from "./class/Etiqueta.js";
import ToDo from "./class/ToDo.js";


const $ = (etiqueta) => document.querySelector(etiqueta)

let toDoContainer = $('.lista-todo')
let añadirBoton = $('#añadirBoton')
let EtiquetasContainer = $('.select-etiqueta')
let añadirEtiqueta = $('#añadirEtiqueta')

function ToDoDisponibles() {//Contador de ToDo 
    let toDoDisponibles = $('.contador-todo')
    toDoDisponibles.innerText = `Tienes ${toDoArray.length} ToDos`
    if (toDoArray.length != 0 ){
        let felicitaciones = $('.congrats')
        felicitaciones.classList.add('invisible')
    }
}

let toDoArray = [] //aca estaran los ToDo para hacer
let EtiquetasArray = [] //aca estaran los ToDo para hacer


 // Etiqueta Tareas por Defecto

EtiquetasArray.push(new Etiqueta({
    nombre: 'Tareas',
    color: '#ffb703'
}))

let etiquetaDivDefault = document.createElement('option')
etiquetaDivDefault.setAttribute('value', EtiquetasArray[0].nombre)
etiquetaDivDefault.innerText = EtiquetasArray[0].nombre
EtiquetasContainer.append(etiquetaDivDefault)
inputEtiqueta.value = ""


function agregarToDo() {
    let inputToDo = $('#inputToDO')

    if (inputToDo.value == "") {

       //NO HACE NADA

    }else{

        let etiquetaSeleccionada = $('.select-etiqueta')

        let nose = EtiquetasArray.findIndex((a)=>a.nombre == etiquetaSeleccionada.value)


        //agrega la nueva tarea al array 
        toDoArray.push(new ToDo({
            descripcion: inputToDo.value,
            etiqueta: EtiquetasArray[nose]
        }))

        console.log(toDoArray);

        //crea el div, le introduce la info y la pega en el HTML
        const ultimaPosicionArray = toDoArray[toDoArray.length-1]

        
        let tareaDiv = document.createElement('div')
        tareaDiv.setAttribute("class", "todo")


        let colorEtiqueta = document.createElement('div')
        colorEtiqueta.setAttribute("class", "color-circulo")
        colorEtiqueta.setAttribute("style", `background-color : ${ultimaPosicionArray.etiqueta.color};`)
        let descToDo = document.createElement('p')
        descToDo.innerText = ultimaPosicionArray.descripcion
        tareaDiv.append(colorEtiqueta, descToDo)
        toDoContainer.appendChild(tareaDiv)
        inputToDo.value = "" 
        ToDoDisponibles()
    }
}

function agregarEtiqueta() {
    
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

function etiquetasExistentes() {
    
    let etiquetasCreadasDiv = $('.etiquetas-existentes')
    etiquetasCreadasDiv.innerText = ""
    // console.log(EtiquetasArray, etiquetasCreadasDiv);
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

etiquetasExistentes()

añadirBoton.addEventListener('click', agregarToDo)
añadirEtiqueta.addEventListener('click', agregarEtiqueta)

ToDoDisponibles()