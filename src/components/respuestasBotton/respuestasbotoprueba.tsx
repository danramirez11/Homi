import React, { useState } from "react";
import preguntasFormulario from "../../utils/Preguntas";
import BotonRespuesta from "./respuestaboton";

const TodasLasPreguntas: React.FC = () => {
  // Estado para manejar la selección de cada pregunta
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState<{
    [indicePregunta: number]: string; 
  }>({});

  const manejarSeleccion = (indicePregunta: number, textoOpcion: string) => {
    setRespuestasSeleccionadas((prev) => ({
      ...prev,
      [indicePregunta]: textoOpcion,
    }));
  };

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
                onClick={() => manejarSeleccion(i, opcion.texto)}
                isSelected={respuestasSeleccionadas[i] === opcion.texto}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodasLasPreguntas;
