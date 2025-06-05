import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProjectHeader from "../Payments/Components/ProjectHeader/ProjectHeader";
import PaymentPendingNotification from "./Components/PendingNot/PendingNot";
import BancoLarge from "./Components/BancoLarge/BancoLarge";
import InfoPagoCard from "./Components/InfoPago/InfoPago";
import "./Factura.css"; // Asegúrate de tener este archivo CSS para los estilos
import ResumenPagoCard from "./Components/Resumen/Resumen";
import SecurityConsejo from "./Components/SecureRec/SecureRec";
import svg from "./../../assets/CaretCircleLeft.svg"
import svg2 from "./../../assets/ChatCircleDots.svg"

const Factura = () => {
  const navigate = useNavigate();
  const [confirmado, setConfirmado] = useState(false);

  const handleCheckboxChange = () => {
    setConfirmado(!confirmado);
  };

  const handlePagoClick = () => {
    if (confirmado) {
      navigate("/checked");
    }
  };

  return (
    <div className="mainContent">
      <div className="header">
        <div className="header-atras" onClick={() => navigate("/pagos")}>
          <img src={svg} className="button-atras" width={50} />
          <p>Volver</p>
        </div>
        <h1>Revisa tu información de pago</h1>
      </div>

      <div className="organization-info-factura">
        <div className="Info-left-factura">
          <ProjectHeader
            title="Apartamentos Campestres"
            subtitle="Apartamento 303 - Torre 3"
            imageUrl="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(portada).webp"
          />
          <PaymentPendingNotification />
          <BancoLarge />

          <div className="info-pago-container">
            <InfoPagoCard
              titulo="Información del Pago"
              datos={[
                { label: "Entidad", valor: "CONSTRUCTORA JARAMILLO MORA SA" },
                { label: "NIT", valor: "800.094.968-9" },
                {
                  label: "Descripción",
                  valor: "Pago Cuota Inicial - MES JUNIO PROYECTO ORIGEN TIPO 2",
                },
              ]}
            />
            <InfoPagoCard
              titulo="Información del Pagador"
              datos={[
                { label: "Nombre", valor: "Melissa Ramírez López" },
                { label: "Cédula", valor: "1.025.784.392" },
                { label: "Email", valor: "valentina.ramirez@gmail.com" },
                { label: "Teléfono", valor: "(602) 489 8000" },
              ]}
            />
          </div>

          <div className="recommendation">
            <img src={svg2} alt="" />
            <p>
              Si tienes alguna inquietud sobre el proceso o tu estado de cuenta,
              por favor comunícate directamente con Jaramillo Mora a través del correo
              atencionalcliente@jaramillomora.com o al número (602) 489 8000.
              Estaremos atentos para brindarte soporte.
            </p>
          </div>
        </div>

        <div className="Info-right-factura">
          <SecurityConsejo />
          <ResumenPagoCard />

          <div className="checkout-button">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={confirmado}
                onChange={handleCheckboxChange}
              />
              <span className="custom-checkbox"></span>
              <span className="texto-pequeno">He confirmado los datos y son correctos</span>
            </label>

            <button
              className="btn-realizar-pago"
              disabled={!confirmado}
              onClick={handlePagoClick}
            >
              Realizar pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factura;
