import React from "react";
import "./Warning.css"; // Asegúrate de que esta ruta sea correcta
const Warning: React.FC = () => {
  return (
    <>
      <div className="warning-message">
        <img src="src\assets\Info-icon.svg" alt="" />
        <span className="message">Estas en mora</span>
      </div>
      <p className="mini-message">Recuerda que si te pasas de la fecha, puedes generar intereses del 1% mensual.</p>
    </>
  );
};

export default Warning;