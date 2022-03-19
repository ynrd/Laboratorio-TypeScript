export class Direccion {
  private calle: string;
  private numero: string;
  private piso: string;
  private letra: string;
  private codigoPostal: number;
  private poblacion: string;
  private provincia: string;
  constructor(
    calle: string,
    numero: string,
    piso: string,
    letra: string,
    codigoPostal: number,
    poblacion: string,
    provincia: string
  ) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  } 
  public get getCalle() : string {
      return this.calle;
  }
  public set setCalle(calle : string) {
      this.calle = calle;
  }

  public get getNumero() : string {
    return this.numero;
}
public set setNumero(numero : string) {
    this.numero = numero;
}


public get getPiso() : string {
    return this.piso;
}
public set setPiso(piso : string) {
    this.piso = piso;
}


public get getLetra() : string {
    return this.letra;
}
public set setLetra(letra : string) {
    this.letra = letra;
}


public get getCodigoP() : number {
    return this.codigoPostal;
} 
public set setCodigoP(codigoPostal : number) {
    this.codigoPostal = codigoPostal;
}


public get getPoblacion() : string {
    return this.poblacion;
}
public set setPoblacion(poblacion : string) {
    this.poblacion = poblacion;
}


public get getProvincia() : string {
    return this.provincia;
}
public set setProvincia(provincia : string) {
    this.provincia = provincia;
}
  
  }
