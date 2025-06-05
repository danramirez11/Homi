
import ProjectHeader from "../Payments/Components/ProjectHeader/ProjectHeader";
import PaymentPendingNotification from "./PendingNot/PendingNot";


const Factura = () => {
  return (
    <div className="mainContent">
      <div className="organization-info">
        <div className="Info-left">
          <ProjectHeader
            title="Apartamentos Campestres"
            subtitle="Apartamento 303 - Torre 3"
            imageUrl="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(portada).webp"
          />
            <PaymentPendingNotification />
        </div>
      </div>
    </div>
  );
};

export default Factura;
