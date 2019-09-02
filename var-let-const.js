//var, es el mas antiguo en JS. var se crea globalmente
var sebastian =  {
  nombre: 'Sebastián',
  apellido: 'García',
  edad: 23
}

function esMayorDeEdad (persona) {
  let mensaje
  const MAYORIA_EDAD = 18
  if (persona.edad >= MAYORIA_EDAD ){
    mensaje = 'Es mayor de edad.'
  } else {
    mensaje = 'Es menor de edad.'
  }
  console.log(mensaje)
}

// esMayorDeEdad(sebastian)

for (let i = 0; i < 10; i++) {
  console.log(i)
}

//let solo existe en el scope donde es declarado