import React from 'react';
import './SecureRec.css';
import svg from "./../../../../assets/Info.svg"

const SecurityConsejo: React.FC = () => {
  return (
    <div className="security-container">
      <div className="icon">
        <img src={svg} alt="Icono de seguridad" />
      </div>
      <div className="security-content">
        <h3 className="security-title">Consejo de seguridad</h3>
        <p className="security-message">
          Evita realizar transacciones en lugares de conexión pública, siempre hazlo desde sitios de confianza.
        </p>
      </div>
    </div>
  );
};

export default SecurityConsejo;
