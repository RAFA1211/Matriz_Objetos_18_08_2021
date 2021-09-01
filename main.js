

let array  = new Array(5).fill(undefined);
console.log (array);

// let filas= new Array(5).fill(undefined);
// let Columnas = new Array(5).fill(undefined)

// let Matriz = [];

// for (let x = 0; x< filas.length; x++) {
//    for (let y= 0; y<Columnas.length; y++) {
//        Matriz [x][y] = undefined;
            
//    }
    
// }
// console.log(Matriz);

// let Columnas = new Array(2).fill(undefined)
// let filas = []

// for (let x = 0; x < Columnas.length; x++) {
//     filas.push(Columnas);
    
// }
// filas [0][1] = "Rafael";
// console.log(filas);

let matriz = [[undefined, undefined], [undefined, undefined]];
matriz[0][1]= "Rafael";
console.log(matriz);

let matriz1 = [];
matriz1.push([undefined, undefined]);
matriz1.push([undefined, undefined]);
matriz1[0][1]="Angarita";
console.log(matriz1);

const matriz2 = [new Array(2), new Array(2)];
matriz2[0][1]= "Diplomado";
matriz2[1][0]= "Comfenalco";
console.log(matriz2);


//Esta es una forma ideal 
addEventListener("DOMContentLoaded", (e)=>{
let Dimension = 2;
let matriz2 = [];
for (let i= 0; i< Dimension; i++) {
    matriz2.push(new Array (Dimension));
}
matriz2[1][1]= "Angarita"
console.log(matriz2);
})


addEventListener("DOMContentLoaded", (e)=>{
    let Dimension2 = 5;
    let matriz3 = [];
    for (let i= 0; i< Dimension2; i++) {
        matriz3.push(new Array (Dimension2).fill(undefined));
    }
    matriz3[1][1]= "XXXXXXX"
    matriz3[4][0]= "YYYYYYY"
    console.log(matriz3);
    })


    //Matriz Tridimensional
    addEventListener("DOMContentLoaded", (e)=>{
        let Dimension3 = 5;
        let matriz4 = [];
        let fila5 = []
        for (let i= 0; i< Dimension3; i++) {
            fila5.push(new Array (Dimension3).fill(undefined));
            matriz4.push(fila5);
        }
        matriz4[0][1][1]= "DDDDDDDD"
        matriz4[1][4][0]= "PPPPPPPP"
        console.log(matriz4);
        })


        // Objetos 

        addEventListener("DOMContentLoaded", (e)=>{
        let data = new Array (5).fill(undefined);
        let data2 = new Array (5).fill(undefined);
        let obj ={
            1: data,
        0: data2 };
obj [0][1] = "Rafael Angarita";
        console.log(obj);})


        addEventListener("DOMContentLoaded", (e)=>{
            let data3 = new Array (5).fill(undefined);
            let data4 = new Array (5).fill(undefined);
            let obj ={
                "Datos_animales": data3,
            "Datos_Peces": data4 };
    obj.Datos_animales[2] = "Leon";
            console.log(obj.Datos_animales);})


// let objeto = {datos:matriz};
// Object.preventExtensions(objeto);
// objeto.datos[3][0][4][0][0] = "Rafael Angarita";
// console.log(objeto);

let D = 5;
let matriz4 = new Array(D).fill(null);

for(var i=0; i<matriz.length; i++) {
    matriz[i] = new Array(D).fill(null);
    for(var j=0; j<matriz[i].length; j++) {
        matriz[i][j] = new Array(D).fill(null);
        for(var r=0; r<matriz[i][j].length; r++) {
            matriz[i][j][r] = new Array(D).fill(null);
            for(var q=0; q<matriz[i][j][r].length; q++) {
                matriz[i][j][r][q] = new Array(D).fill(null);
            }
        }
    }
}




let obj = {
    suma : function(){
        return this.num1 + this.num2;
    }
}
let obj2 = Object.create(obj);
obj2.num1 = 5;
obj2.num2 = 5;

console.log(obj2);
// console.log(obj2.suma());
