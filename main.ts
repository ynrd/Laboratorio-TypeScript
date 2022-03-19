import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Persona } from "./persona";
import { Telefono } from "./telefono";
const date: Date = new Date("Jan 01 2000");
const direccion: Direccion = new Direccion(
  "Calle de las Afortunadas",
  "4",
  "2",
  "B",
  23000,
  "Alcorcón",
  "Madrid"
);
const mails: Mail[] = [
  new Mail("personal", "ada.byron@gmail.com"),
  new Mail("profesional", "ada.trabajo@gmail.com"),
];
const telefonos: Telefono[] = [
  new Telefono("personal", 123456789),
  new Telefono("profesional", 987654321),
];

const persona1 = new Persona(
  "Ada",
  "Byron",
  23,
  12345678,
  date,
  "azul",
  "mujer",
  [direccion],
  mails,
  telefonos,
  "le encanta programar"
);
console.log(persona1);

const date2: Date = new Date("Feb 02 2002");
const direccion2: Direccion = new Direccion(
  "Calle de las Ciencias",
  "5",
  "3",
  "C",
  26722,
  "Fuenlabrada",
  "Madrid"
);
const mails2: Mail[] = [
  new Mail("personal", "libertad@gmail.com"),
  new Mail("profesional", "purificacion.garcia@gmail.com"),
];
const telefonos2: Telefono[] = [
  new Telefono("personal", 567890432),
  new Telefono("profesional", 654789321),
];

const persona2 = new Persona(
  "Purificación",
  "García",
  20,
  87654322,
  date2,
  "rojo",
  "no binario",
  [direccion2],
  mails2,
  telefonos2,
  "le gusta dibujar"
);
console.log(persona2);

const date3: Date = new Date("March 03 2001");
const direccion3: Direccion = new Direccion(
  "Calle de las Artes",
  "8",
  "4",
  "A",
  28922,
  "Móstoles",
  "Madrid"
);
const mails3: Mail[] = [
  new Mail("personal", "almadeartista@gmail.com"),
  new Mail("profesional", "arte.jobs@gmail.com"),
];
const telefonos3: Telefono[] = [
  new Telefono("personal", 922765342),
  new Telefono("profesional", 687654234),
];

const persona3 = new Persona(
  "Esmeralda",
  "Gonzalez",
  21,
  54326789,
  date3,
  "amarillo",
  "mujer",
  [direccion3],
  mails3,
  telefonos3,
  "le gusta la fotografía"
);
//aqui utilizo metodos de acceso get, pero no lo repito en las otras partes de codigo para evitar verbosidad
console.log(
  persona3.getNombre,
  persona3.getApellidos,
  persona3.getEdad,
  persona3.getCumple,
  persona3.getColor,
  persona3.getDirection,
  persona3.getDni,
  persona3.getMail,
  persona3.getPhone,
  persona3.getSex,
  persona3.getNote
);

function dniSearch(personas: Persona[], dni: number): Persona | null {
  for (let i = 0; i < personas.length; i++) {
    if (dni === personas[i].getDni) {
      return personas[i];
    }
  }
  return null;
}

const p = dniSearch([persona1, persona2, persona3], 54326789)!;
p.getDirection.push(new Direccion("Calle Nueva", "2", "3","A", 23006, "Alcobendas", "Madrid"));
p.getMail.push(new Mail("ludico", "pazyarte@yahoo.com"));
p.getPhone.push(new Telefono("casa", 666999666));
console.log(p);