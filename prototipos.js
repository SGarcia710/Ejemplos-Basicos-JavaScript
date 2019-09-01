function heredaDe(protHijo, protPadre) {
  var fn = function () {}
  fn.prototype = protPadre.prototype
  protHijo.prototype = new fn
  protHijo.prototype.constructor = protHijo
}//Herencia prototipal

function Persona(nom, ape, alt) {
  this.nom = nom
  this.ape = ape
  this.alt = alt
}//Constructor (JavaScript implicitamente retorna this)

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nom} ${this.ape}.`)
}

Persona.prototype.soyAlto = function () {
  return this.alt >= 1.7
}

function Desarrollador(nom, ape) {
  this.nom = nom
  this.ape = ape
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.salduar = function () {
  console.log(`Hola, me llamo ${this.nom} ${this.ape} y soy desarrollador(a).`)
}


var sebastian = new Persona('Sebastián', 'García', 1.7)// La palabra new lo que hace es que se cree un nuevo objeto el cual se le asignará como prototipo el cual se le indique seguido y acto seguido se ejecutará el constructor/función que lleve el mismo nombre y retornará el objeto que se acaba de construir.

var erika = new Persona('Erika', 'Luna', 1.5)
var arturo = new Persona('Arturo', 'Martinez', 1.78)

var tatiana = new Desarrollador('Tatiana', 'García', 1.7)

tatiana.salduar()
console.log(tatiana.soyAlto())