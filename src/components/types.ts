
export interface Opcion {
  texto: string;
  icono?:  React.ComponentType;
  imagen?: string;
  viviendas: string[];
}

export interface PreguntaFormulario {
  pregunta: string;
  esMultiple: boolean;
  descripcion: string;
  opciones: Opcion[];
}
