
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

export interface EstadoObraItem {
  id: string; 
  user_id: string; 
  created_at: string; 
  updated_at:string;
  proyecto: string;
  inmueble:string;
  fecha: string;
  espacio: string;
  descripcion:string;
  estado: 'Recibido' | 'Resuelto' | 'Rechazado';
}

export interface EstadoObraListProps {
  data: EstadoObraItem[];
}