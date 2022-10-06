import Etiqueta from "./class/Etiqueta.js";
import ToDo from "./class/ToDo.js";


const $ = (etiqueta) => document.querySelector(etiqueta)

let toDoContainer = $('.tareas')
let añadirBoton = $('#añadirBoton')
let EtiquetasContainer = $('.select-etiqueta')
let añadirEtiqueta = $('#añadirEtiqueta')
let toDoLocalStrorage = localStorage.getItem('toDo')
let toDoArray = []

if (toDoLocalStrorage == null ) {
    toDoArray = []
}else{
    toDoArray = JSON.parse(toDoLocalStrorage)
}



let EtiquetasArray = []


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
// let toDoLocalStorage = JSON.parse(localStorage.getItem('toDo'))


function agregarToDo() {
    let inputToDo = $('#inputToDO')

    if (inputToDo.value == "") {// SI EL INPUT ESTA VACIO NO HACE NADA  

    }else{

        let etiquetaSeleccionada = $('.select-etiqueta')
        let indexEtiquetaSeleccionada = EtiquetasArray.findIndex((a)=>a.nombre == etiquetaSeleccionada.value)
    
        toDoArray.push(new ToDo({
            descripcion: inputToDo.value,
            etiqueta: EtiquetasArray[indexEtiquetaSeleccionada]
        }))

        localStorage.setItem('toDo', JSON.stringify(toDoArray))

        console.log(toDoArray);

        ToDoDisponibles()
        renderTareas()
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

// function guardarLocalStorage(lista, nombre) {
//     localStorage.setItem(nombre, JSON.stringify(lista))
// }

ToDoDisponibles()
renderTareas()
etiquetasExistentes()

añadirBoton.addEventListener('click', agregarToDo)
añadirEtiqueta.addEventListener('click', agregarEtiqueta)


// agregarToDo()



function renderTareas(valueInput) {
    toDoContainer.innerText = ""
    let inputToDo = $('#inputToDO')


    
    

    // console.log(toDoLocalStorage);

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


// localStorage.setItem('toDo', JSON.stringify(toDoArray))

function ToDoDisponibles() {//Contador de ToDo 
    let toDoDisponibles = $('.contador-todo')
    toDoDisponibles.innerText = `Tienes ${toDoArray.length} ToDos`

    if (toDoArray.length != 0 ){
        let felicitaciones = $('.congrats')
        felicitaciones.classList.add('invisible')
    }
}
