const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const tradSex = sexEN => (sexEN == 'male') ? 'hombre' : 'mujer'

const onCharResponse = char => console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`)

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onCharResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)