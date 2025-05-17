

import React from "react";
import preguntasFormulario from "../../utils/Preguntas";// Ajusta la ruta según tu proyecto
import BotonRespuesta from "./respuestaboton";

const TodasLasPreguntas: React.FC = () => {
  return (
    <div className="space-y-8 p-4 max-w-6xl mx-auto">
      {preguntasFormulario.map((pregunta, i) => (
        <div key={i}>
          <h2 className="text-2xl font-semibold mb-2">{pregunta.pregunta}</h2>
          <p className="text-gray-600 mb-4">{pregunta.descripcion}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pregunta.opciones.map((opcion, index) => (
 <BotonRespuesta
  key={index}
  opcion={opcion}
  onClick={() => console.log("Clicked", opcion.texto)} // puedes reemplazar esto
  isSelected={false} // o true si deseas testear selección
/>

))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodasLasPreguntas;
