import React from "react";
import "./BancoLarge.css"; // Asegúrate de que esta ruta sea correcta
import logoBanco from "./../../../../utils/Img/bancgobogta.png"; // Asegúrate de que esta ruta sea correcta

const BancoLarge: React.FC = () => {
  return (
    <>
    <div className="banco-large-container">
    <div className="banco-large-left">
        <img src={logoBanco} alt="Banco" className="bank-logo" width={168.205} height={45.377} />
        <span className="title">Número de Encargo</span>
        <span className="number">00200964674</span>
      </div>
      <div className="banco-large-info-right">
          <p>Convenio Nº: 1554789</p>
          <p>N° de factura: 778965</p>
          <p>Fecha de emisión: 30/05/2025</p>
      </div>
    </div>
      
    </>
  );
};

export default BancoLarge;