import { useNavigate } from "react-router-dom";
import ProjectHeader from "../Payments/Components/ProjectHeader/ProjectHeader";
import BancoLarge from "../Factura/Components/BancoLarge/BancoLarge";
import InfoPagoCard from "../Factura/Components/InfoPago/InfoPago";
import "./Checked.css"; // Asegúrate de tener este archivo CSS para los estilos
import PayChecked from "./Components/PayChecked/PayChecked";
import CardChecked from "./Components/CardChecked/CardChecked";
import svg from "./../../assets/CaretCircleLeft.svg"
import svg2 from "./../../assets/ChatCircleDots.svg"

const Checked = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Aquí puedes implementar la lógica real de descarga del comprobante
    alert("Descargando comprobante...");
  };

  return (
    <div className="mainContent">
      <div className="header">
        <div className="header-atras" onClick={() => navigate("/pagos/paydone")}>
          <img src={svg} className="button-atras" width={50} />
          <p>Volver al portal</p>
        </div>
        <h1>Descarga tu comprobante </h1>
      </div>

      <div className="organization-info-factura">
        <div className="Info-left-factura">
          <ProjectHeader
            title="Apartamentos Campestres"
            subtitle="Apartamento 303 - Torre 3"
            imageUrl="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(portada).webp"
          />
            <PayChecked />
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
            <CardChecked />
          <div className="checkout-button">
            <button className="btn-realizar-pago" onClick={handleDownload}>
              Descargar comprobante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checked;
