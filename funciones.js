
let p1 = 34;
let p2  = 44;
function nombre(p1,p2){
   
    return p1 + p2;
};
console.log(nombre(p1, p2));
let result = nombre(p1, p2);
document.getElementById("demo").innerHTML = result;
const car = {
        tipo:"meercedez",
        modelo:"s500",
        color:"negro",
        fecha:2015,
        full_name: function(){
            return this.tipo + " " + this.modelo;
        }
    };
console.log(car.full_name)
document.getElementById("demo1").innerHTML = car.modelo;
function multiplicar(result){
    result= result * 23
    document.getElementById("demo2").innerHTML = result;
}

let texto = "cadena de texto";
let cadena = new String(texto);
console.log(cadena);
console.log(texto);
console.log(typeof(cadena));
console.log(cadena.slice(0,10));
const lista = {
    curso_id:'4',
    nombre : 'python'
}
let c = parseInt(lista.curso_id);
console.log(c*4);
console.log(typeof(lista));

const carros =['audi','bmw','mercedez','toyota']
carros.map(carro=>(
    console.log(carro)
));
const num = [34,24,87,96]
//metodo at recibe la pocicion de un array
console.log(num.at(-1));

const beers =[{
    tipo:"meercedez",
    modelo:"s500",
    color:"negro",
    fecha:2015
},
{
    tipo:"toyota",
    modelo:"tvs",
    color:"blanco",
    fecha:2014
},
{
    tipo:"audi",
    modelo:"asde",
    color:"blanco",
    fecha:2016
}];
console.log(beers.tipo);
