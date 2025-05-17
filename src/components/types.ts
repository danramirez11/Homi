
export interface Opcion {
  texto: string;
  icono?:  React.ComponentType;
   imagen?: string;
}

export interface PreguntaFormulario {
  pregunta: string;
  descripcion: string;
  opciones: Opcion[];
}
