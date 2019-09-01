var sebastian = {
  nombre: 'Sebastián',
  apellido: 'García',
  altura: 1.70
}
var daniela = {
  nombre: 'Daniela',
  apellido: 'Perez',
  altura: 1.71
}
var camila = {
  nombre: 'Camila',
  apellido: 'Gutierrez',
  altura: 1.60
}
var tatiana = {
  nombre: 'Tatiana',
  apellido: 'Osorio',
  altura: 1.55
}

var personas = [sebastian, daniela, camila, tatiana]

//Arrow Functions
// const esAlta = (persona) => {
//   return persona.altura >= 1.7
// }
//Cuando solo se tiene un parametro, no se necesitan los parentesis
// const esAlta = persona => persona.altura >= 1.7 
//si solo se está haciendo un return de algo, no hacen falta las llaves ni el return
// const esAlta = (persona) => persona.altura >= 1.7
//se puede desglosar el objeto encerrando en llaves la propiedad de este que necesitaremos
const esAlta = ({altura}) => altura >= 1.70

//filter - devuelve un nuevo array.
var personasAltas = personas.filter(esAlta)//lleva como parametro una condición(En este caso si una persona es alta o no)

//en javascript los array por parametro se toman por referencia
// const alturaACms = persona => {
  // persona.altura *= 100
  // return persona
  //dado a que se está modificando la persona original, lo ideal es retornar un nuevo array con ese valor modificado
  // return {
    // ...persona, //se retorna un nuevo objeto con la persona desglosada
    // altura: persona.altura * 100 //modificandole la altura
  // }
// }
const alturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})


//map - retorna un array con las modificaciones pasadas por parametro
var personasCms = personas.map(alturaACms)

// el === compara si son el mismo objeto en memoria