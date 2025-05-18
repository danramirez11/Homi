
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

export interface NavjmProps {
  logoSrc: string;
  logoAlt?: string;
  onLoginClick: () => void;
}

export interface ButtonOnbProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
