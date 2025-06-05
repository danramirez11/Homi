import React from 'react';
import './CardPago.css'; // Ensure this path is correct
import svg from "./../../../../assets/descargar-white.svg"

const PaymentCard: React.FC = () => {
  // Static Data
  const cuotaValue = "$12,375,222";
  const currentDebt = "$297,000,000.0";
  const paidInstallments = 0;
  const remainingInstallments = 24;
  const dueDate = "30/07/2025";

  return (
    <div className="payment-card">
      <h2 className='first-title'>Valor de tu cuota</h2>
      <h1 className='cuota-number'>{cuotaValue}</h1>
      <h3 className='second-title'>Deuda Actual</h3>
      <h2 className='deuda-total'>{currentDebt}</h2>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${(paidInstallments / (paidInstallments + remainingInstallments)) * 100}%` }}></div>
      </div>
      
      <div className="installments-info">
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#A6BD49", // verde para cuotas pagadas
      }}
    ></div>
    <span className="paid">Cuotas pagadas {paidInstallments}</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#E9E9E9", // rojo para cuotas restantes
      }}
    ></div>
    <span className="remaining">Cuotas restantes {remainingInstallments}</span>
  </div>
</div>
      
      <h4 className='prox-fecha'>Próxima fecha de pago</h4>
      <h3 className='fecha-proxima'>{dueDate}</h3>
      
      <button className="account-button">
        <img src={svg} alt="" />Estado de cuenta</button>
    </div>
  );
};

export default PaymentCard;
