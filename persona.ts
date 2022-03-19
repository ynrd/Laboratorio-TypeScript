import {Telefono} from "./telefono"
import {Direccion} from "./direccion"
import {Mail} from "./mail"
export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: number;
  private cumpleaños: Date;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;
  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: number,
    cumpleaños: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleaños = cumpleaños;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }
  
  public get getNombre() : string {
      return this.nombre;
  }
  
  public set setNombre(nombre : string) {
      this.nombre = nombre;
  }
  
  public get getApellidos() : string {
      return this.apellidos;
  }
  
  public set setApellidos(apellidos : string) {
      this.apellidos = apellidos;
  }
  
  public get getEdad() : number {
      return this.edad;
  }
  
  public set setEdad(edad : number) {
      this.edad = edad;
  }
  
  public get getDni() : number {
      return this.dni;
  }
  
  public set setDni(dni : number) {
      this.dni = dni;
  }
  
  public get getCumple() : Date {
      return this.cumpleaños
  }
  
public set setCumple(cumpleaños : Date) {
    this.cumpleaños = cumpleaños;
}

public get getColor() : string {
    return this.colorFavorito;
}

public set setColor(colorFavorito : string) {
    this.colorFavorito = colorFavorito;
}

public get getSex() : string {
    return this.sexo;
}

public set setSex(sexo : string) {
    this.sexo = sexo;
}

public get getDirection() : Direccion[] {
    return this.direcciones;
}

public set setDirection(direcciones : Direccion[]) {
    this.direcciones = direcciones;
}

public get getMail() : Mail[] {
    return this.mails;
}

public set setMail(mails : Mail[]) {
    this.mails = mails;
}

public get getPhone() : Telefono[] {
    return this.telefonos;
}

public set setPhone(telefonos : Telefono[]) {
    this.telefonos = telefonos;
}

public get getNote() : string {
    return this.notas;
}

public set setNote(notas : string) {
    this.notas = notas;
}

}
