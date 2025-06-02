
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
