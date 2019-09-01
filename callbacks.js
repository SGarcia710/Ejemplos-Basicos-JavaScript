const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const tradSex = sexEN => (sexEN == 'male') ? 'hombre' : 'mujer'

//request con JQuery
const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }
//callback = Es una función que se ejecutará en algún futuro pero no sabemos exactamente cuando.
const onResponse = char => console.log(`Hola yo soy ${char.name} y soy ${tradSex(char.gender)}.`)
$.get(lukeURL, opts, onResponse)
  //console.log(arguments) La variable arguments es una variable que tienen todas las funciones y nos devuelve un array con todos los parametros que tiene la función
