//en estos casos poner punto y coma es opcional
alert('hola')
var nombre = 'Sebastian'
//en estos casos poner punto y coma es innecesario
function saludar(){
  console.log('mensaje')
}; 
if( condicion ) {
  console.log('condición')
};
for (let i = 0; i < array.length; i++) {
  const element = array[i];
};
//en estos casos es obligatorio usar punto y coma
console.log('Hola mi nombre es Sebastian'); //aquí es obligatorio ponerlo
[1,2,3].forEach(element => console.log(n * 2))

const nombre = 'Sebastian'
console.log('Hola mi nombre es Sebastian'); //aquí es obligatorio ponerlo
`${nombre} es un desarrollador`


//Después del return no puede haber un enter, porque para javaScript es como si hubiera un punto y coma
function calcularDoble(numero) {
  return { //antes de esta llave no puede haber un punto y coma
    original: numero, doble: numero * 2 
  }
}