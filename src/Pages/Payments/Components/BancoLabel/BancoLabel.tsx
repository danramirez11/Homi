import React from "react";
import "./BancoLabel.css"; // Asegúrate de que esta ruta sea correcta

const EncargoLabel: React.FC = () => {
  return (
    <div className="encargo-label">
      <img src="src\utils\Img\bancgobogta.png" alt="Banco" className="bank-logo" width={168.205} height={45.377} />
      <span className="title">Número de Encargo</span>
      <span className="number">00200964674</span>
    </div>
  );
};

export default EncargoLabel;