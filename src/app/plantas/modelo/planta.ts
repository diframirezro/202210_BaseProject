export class Planta{
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo:string
  altura_maxima: number;
  clima: string;
  sustrato_tierra: string;

  constructor(
    id:number,
    nombre_comun: string,
    nombre_cientifico: string,
    tipo:string,
    altura_maxima: number,
    clima: string,
    sustrato_tierra: string,
    ){
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo = tipo;
    this.altura_maxima = altura_maxima;
    this.clima = clima;
    this.sustrato_tierra = sustrato_tierra
  }

}


