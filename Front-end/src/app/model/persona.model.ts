export class persona{
    id?: number; //Indico que el dato no es necesario con '?'
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}