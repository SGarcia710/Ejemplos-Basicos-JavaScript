//Cuando creamos una promesa, se pone en estado Pending
//si la promesa se resuelve, pasará a fulfilled
//si ocurre algún error en la acción asincrona que se está resolviendo, pasará a rejected

//para obtener el valor de la promesa resuelta, se usa el .then pasandole por parametro otra función la cual el primer parametro que recibirá esa función es el valor que nosotros esperabamos

//para obtener el error usamos .catch y le mandamos otra función la cual tendrá como parametro el error que sucedió 

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
  .then(char => console.log(`El personaje 1 ${char.name}.`))
  .catch(onError)