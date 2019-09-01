const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, (data) => resolve(data))
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error  al obtener el personaje ${id}.`)
}

obtenerPersonaje(1)
  .then(char => {
    console.log(`El personaje 1 ${char.name}.`)
    return obtenerPersonaje(2)
  })
  .then(char => {
    console.log(`El personaje 2 ${char.name}.`)
    return obtenerPersonaje(3)
  })
  .then(char => {
    console.log(`El personaje 3 ${char.name}.`)
    return obtenerPersonaje(4)
  })
  .then(char => {
    console.log(`El personaje 4 ${char.name}.`)
  })
  .catch(onError)