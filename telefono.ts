export class Telefono {
  private tipo: string;
  private numero: number;
  constructor(tipo: string, numero: number) {
    this.tipo = tipo;
    this.numero = numero;
  }

  
  public get getTipo() : string {
      return this.tipo;
  }
  
  public set setTipo(tipo : string) {
      this.tipo = tipo;
  }

  
  public get getNumber() : number {
      return this.numero;
  }
  
  public set setNumber(numero : number) {
      this.numero = numero;
  }
  
  
}
