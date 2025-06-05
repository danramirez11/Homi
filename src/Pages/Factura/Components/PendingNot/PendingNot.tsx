import React, { useEffect, useState } from 'react';
import './PendingNot.css';
import svg from "./../../../../assets/time2.svg"

const PaymentPendingNotification: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutos en segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // limpieza
  }, [timeLeft]);

  // Función para mostrar el tiempo en formato mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="notification-container">
      <div className="icon"><img src={svg} alt="" /></div>
      <div className="notification-content">
        <h3 className="notification-title">Transacción pendiente de pago</h3>
        <p className="notification-message">
          Su solicitud ha sido validada exitosamente. Recuerde que debe revisar
          la información dentro del tiempo estimado para que podamos enviarla a
          la fiduciaria y continuar con el proceso.
        </p>
      </div>
      <div className="timer">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default PaymentPendingNotification;
