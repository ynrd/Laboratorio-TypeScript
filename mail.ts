export class Mail {
  private tipo: string;
  private direccion: string;
  constructor(tipo: string, direccion: string) {
    this.direccion = direccion;
    this.tipo = tipo;
  }

  
  public get getTipo() : string {
      return this.tipo;
  }
  
  public set setTipo(tipo : string) {
      this.tipo = tipo;
  }

  public get getDirection() : string {
      return this.direccion;
  }
  
  public set setDirection(direccion : string) {
      this.direccion = direccion;
  }
    
}
