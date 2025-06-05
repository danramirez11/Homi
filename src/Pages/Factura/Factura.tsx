import { useNavigate } from "react-router-dom";
import ProjectHeader from "../Payments/Components/ProjectHeader/ProjectHeader";
import PaymentPendingNotification from "./Components/PendingNot/PendingNot";
import BancoLarge from "./Components/BancoLarge/BancoLarge";
import InfoPagoCard from "./Components/InfoPago/InfoPago";
import "./Factura.css"; // Asegúrate de tener este archivo CSS para los estilos
import ResumenPagoCard from "./Components/Resumen/Resumen";

const Factura = () => {
  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <div className="header">
        <div className="header-atras" onClick={() => navigate("/pagos")}>
          <img src="src/assets/CaretCircleLeft.svg" className="button-atras" width={50}/>
          <p>Volver</p>
        </div>
        <h1>Revisa tu información de pago</h1>
      </div>

      <div className="organization-info">
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
                { label: "Nombre", valor: "Valentina Ramírez López" },
                { label: "Cédula", valor: "1.025.784.392" },
                {
                  label: "Email",
                  valor: "valentina.ramirez@gmail.com",
                },
                { label: "Teléfono", valor: "(602) 489 8000" },
              ]}
            />
          </div>

          <div className="recommendation">
            <img src="src/assets/ChatCircleDots.svg" alt="" />
            <p>
              Si tienes alguna inquietud sobre el proceso o tu estado de cuenta,
              por favor comunícate directamente con Jaramillo Mora a través del correo
              atencionalcliente@jaramillomora.com o al número (602) 489 8000.
              Estaremos atentos para brindarte soporte.
            </p>
          </div>
        </div>
        <div className="Info-right-factura">
            <ResumenPagoCard />
        </div>
      </div>
    </div>
  );
};

export default Factura;
