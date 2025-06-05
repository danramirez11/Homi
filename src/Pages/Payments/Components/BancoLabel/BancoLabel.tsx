import React from "react";
import "./BancoLabel.css"; // Asegúrate de que esta ruta sea correcta

const EncargoLabel: React.FC = () => {
  return (
    <div className="encargo-label">
      <img src="https://www.greatplacetowork.com.co/images/CompaniesCertification/Fotos/Fidubogota/2024/b18dacd7-bd1b-4b79-9a89-9a14b7464d54.png" alt="Banco" className="bank-logo" width={168.205} height={45.377} />
      <span className="title">Número de Encargo</span>
      <span className="number">00200964674</span>
    </div>
  );
};

export default EncargoLabel;