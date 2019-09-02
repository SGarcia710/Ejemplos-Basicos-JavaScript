//Funcion que recuerda el estado de las cosas cuando fue invocada.

const crearSaludos = (finalDeFrase) => (nombre) => console.log(`Hola ${nombre} ${finalDeFrase}.`)

const saludoArgentino = crearSaludos('che')
const saludoMexicano = crearSaludos('wey')
const saludoColombiano = crearSaludos('parce')

saludoArgentino('Sebastián')
saludoMexicano('Sebastián')
saludoColombiano('Sebastián')