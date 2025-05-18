import React from "react";
import type { Opcion } from "../types"; // Asegúrate de que 'icono' sea IconType


interface BotonRespuestaProps {
  opcion: Opcion;
  onClick: () => void;
  isSelected: boolean;
}

const BotonRespuesta: React.FC<BotonRespuestaProps> = ({ opcion, onClick }) => {
  const IconComponent = opcion.icono;


  return (
    <button
      onClick={onClick}
      className={`BotonRespuestaForms`}
    >
      {opcion.imagen && (
        <img
          src={opcion.imagen}
          alt={opcion.texto}
          className="OpcionImagenForms"
        />
      )}

      {IconComponent && (
        <div className="flex flex-col items-center">
{IconComponent && <IconComponent />}
          <span>
            {opcion.texto}
          </span>
        </div>
      )}
    </button>
  );
};

export default BotonRespuesta;
