import React from "react";
import type { Opcion } from "../types"; // Asegúrate de que 'icono' sea IconType
import "./respuestasboton.css"

interface BotonRespuestaProps {
  opcion: Opcion;
  onClick: () => void;
  isSelected: boolean;
}

const BotonRespuesta: React.FC<BotonRespuestaProps> = ({ opcion, onClick, isSelected }) => {
  console.log("Renderizando opción:", opcion.texto, "icono:", opcion.icono);
  const IconComponent = opcion.icono;


  return (
    <button
      onClick={() => {
        console.log("Click en:", opcion.texto);
        onClick();
      }}
      className={`BotonRespuestaForms ${isSelected ? "selected" : ""}`}
    >
      {opcion.imagen && (
        <img
          src={opcion.imagen}
          alt={opcion.texto}
          className="OpcionImagenForms"
        />
      )}

      {IconComponent && (
        <div className="IconoContainer">
{IconComponent && <IconComponent />}
          <p>
            {opcion.texto}
          </p>
        </div>
      )}
    </button>
  );
};

export default BotonRespuesta;
