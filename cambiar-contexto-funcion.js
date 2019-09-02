const sebastian = {
  nombre: 'Sebastián',
  apellido: 'García'
}
const jessica = {
  nombre: 'Jessica',
  apellido: 'Cortés'
}

// const saludar = () => console.log(`Hola mi nombre es ${this.nombre}`)

function saludar (saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarASebastian = saludar.bind(sebastian)
// const saludarAJessica = saludar.bind(jessica)

// saludarAJessica()
// saludarASebastian()

// setTimeout(saludar.bind(sebastian, 'Hola che'), 1000)

//Bind no ejecuta la función sino que retorna una con el nuevo contexto.
//call ejecuta la función con el contexto dado, su primer elemento es el contexto/this, el segundo y siguientes son los demás parametros de la función
saludar.call(sebastian, 'Hola parce')
//Es muy similar al call, el primer parametro es quién será el this/contexto, el segundo parametro es un array con los parametros para la función
saludar.apply(jessica, ['Hola imbécil'])