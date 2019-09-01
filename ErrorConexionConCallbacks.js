const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const tradSex = sexEN => (sexEN == 'male') ? 'hombre' : 'mujer'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
    .get(url, opts, callback)
    .fail(() => console.log(`Sucedió un error. No se pudo obtener el personaje ${id}.`))
}
//callback hell
obtenerPersonaje(1, char => {
  console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`)

  obtenerPersonaje(2, char => { 
    console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`)

    obtenerPersonaje(3, char => {
      console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`)

      obtenerPersonaje(4, char => {
        console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`)

        obtenerPersonaje(5, char => {
          console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`)

          obtenerPersonaje(6, char => {
            console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`)

            obtenerPersonaje(7, char => console.log(`Hola, yo me llamo ${char.name} y soy ${tradSex(char.gender)}.`))
          })
        })
      })
    })
  })
})