var sebastian = {
  nombre: 'Sebastián',
  apellido: 'García',
  altura: 1.70,
  cantLibros: 111
}
var daniela = {
  nombre: 'Daniela',
  apellido: 'Perez',
  altura: 1.71,
  cantLibros: 78
}
var camila = {
  nombre: 'Camila',
  apellido: 'Gutierrez',
  altura: 1.60,
  cantLibros: 132
}
var tatiana = {
  nombre: 'Tatiana',
  apellido: 'Osorio',
  altura: 1.55,
  cantLibros: 90
}

var personas = [sebastian, daniela, camila, tatiana]

// var acum = 0

// for (var i = 0; i < personas.length; i++) {
//   acum += personas[i].cantLibros
// }

// console.log(`En total todos tienen ${acum} libros.`)

//Existe una mejor manera de hacer esto, la cual es con un reduce

//Reducer: Recibe dos parametros: acumulador y el objeto con el que funcionará
const reducer = (acum, { cantLibros }) => acum + cantLibros

//El reduce recibe dos parametros, una función, que será el reducer y el valor original/inicial del acumulador
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros.`)
