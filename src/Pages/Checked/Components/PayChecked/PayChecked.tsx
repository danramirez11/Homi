import React from 'react';
import './PayChecked.css';

const PayChecked: React.FC = () => {
  return (
    <div className="checked-notification-container">
      <div className="checked-icon">
        <img src="src\assets\CheckCircle.svg" alt="" />
      </div>
      <div className="checked-notification-content">
        <h3 className="checked-notification-title">Transacción exitosa</h3>
        <p className="checked-notification-message">
          Gracias por utilizar nuestros servicios. Su solicitud ha sido validada exitosamente y se ha enviado a la fiduciaria para continuar con el proceso.
        </p>
      </div>
    </div>
  );
};

export default PayChecked;
