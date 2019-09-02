const diasEntreFechas = (fecha1, fecha2) => {
  const unDia = 1000 * 60 * 60 * 24
  const diferencia = Math.abs(fecha1 - fecha2) //Dará un número en milisegundos

  return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const miNacimiento = new Date(1996, 4, 10)

console.log(hoy)
console.log(miNacimiento)

const diasDesdeMiNacimiento = diasEntreFechas(hoy, miNacimiento)

console.log(diasDesdeMiNacimiento / 365)