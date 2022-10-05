export default class ToDo{
    constructor({
        descripcion,
        importancia = 0,
        etiqueta
    }) {
        
        this.descripcion = descripcion,
        this.importancia = importancia,
        this.etiqueta = etiqueta
    }
}