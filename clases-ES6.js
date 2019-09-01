//ECMAScript 2015 o ES6
class Persona {
  constructor(nom, ape, alt) {
    this.nom = nom;
    this.ape = ape;
    this.alt = alt;
  }
  saludar(fn) {
    console.log(`Hola me llamo ${this.nom} ${this.ape}.`);
    if(fn) {
      fn(this.nom, this.ape)
    }
  }
  soyAlto() {
    return this.alt >= 1.7;
  }
}

class Desarrollador extends Persona {
  constructor(nom, ape, alt) {
    super(nom, ape, alt)
  }
  saludar(fn){
    var { nom, ape } = this
    console.log(`Hola, me llamo ${nom} ${ape} y soy Desarrollador(a).`)
    if(fn) {
      fn(nom, ape, true)
    }
  }
}

var sebastian = new Persona('Sebastián', 'García', 1.7);
var tatiana = new Desarrollador('Tatiana', 'Erazo', 1.5);
var camila = new Persona('Camila', 'Henao', 1.8)

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah, no sabía que eras desarrollador(a).`)
  }
}

camila.saludar()
sebastian.saludar(responderSaludo)
tatiana.saludar(responderSaludo)
