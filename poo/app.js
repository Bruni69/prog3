class estudiante{
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }
    promedio() {
        return this.notas.reduce((a, b) => a + b, 0) / 
        this.notas.length;

    }
}
let e1= new estudiante("Maria", 20, [8, 9,10]);
console.log(e1.promedio());


let{nombre, edad}= e1;
console.log(nombre);

let e2 ={...e1, edad: 21};
console.log(e2);    
