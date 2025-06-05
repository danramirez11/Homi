import "./Pagos2.css";
import { Text } from "../../theme/styledcomponents";
import ProjectHeader from "../Payments/Components/ProjectHeader/ProjectHeader";
import CuotaRow from "../Payments/Components/CuotaITem/CuotaItem";
import PagoBar from "../Payments/Components/BarraPago/BarraPago";
import EncargoLabel from "../Payments/Components/BancoLabel/BancoLabel";
import PaydoneCard from "./Components/PaydoneCard";
import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";



const cuotas = [
  { numero: 1, fecha: "2025-06-01", estado: "Pagado" as const, saldo: "$12,375,222" },
  { numero: 2, fecha: "2025-07-01", estado: "Disponible" as const, saldo: "$12,375,222" },
  { numero: 3, fecha: "2025-08-01", estado: "No emitido" as const, saldo: "$12,375,222" },
  { numero: 4, fecha: "2025-09-01", estado: "No emitido" as const, saldo: "$12,375,222" },
  { numero: 5, fecha: "2025-10-01", estado: "No emitido" as const, saldo: "$12,375,222" },
];

const Paydone = () => {
  const [cuotasSeleccionadas, setCuotasSeleccionadas] = useState<number>(0);

  // para el ejemplo solo se activa con una selección
  const handleSeleccionCuota = (checked: boolean) => {
    setCuotasSeleccionadas(checked ? 1 : 0);
  };

  const total = cuotasSeleccionadas > 0 ? 12400222 : 0;
  const tieneIntereses = true;

  return (
    <div className='perfilContainer'>
        <div className="side-bar">
          <SideBar />
          </div>
          
    <div className="layoutContainer" style={{ marginLeft: '250px' }}>
      <div className="mainContent">
        <section className="PagosContainer">
          <Text variant="sectionTitle">Gestión de pagos</Text>

          <div className="tabs">
            <div className="tabActive">Apartamentos Campestres</div>
            <div className="tabInactive">Reserva Kachipay</div>
            <div className="tabInactive">Olivo Apartamentos</div>
          </div>
        </section>

        <div className="organization-info">
          <div className="Info-left">
            <ProjectHeader
              title="Apartamentos Campestres"
              subtitle="Apartamento 303 - Torre 3"
              imageUrl="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(portada).webp"
            />

            {cuotas.map((cuota) => (
              <CuotaRow key={cuota.numero} cuota={cuota} onSeleccionar={handleSeleccionCuota} />
            ))}

            <p className="mostrar-mas">Mostrar más(19)</p>

            <PagoBar
  cuotasSeleccionadas={cuotasSeleccionadas}
  total={total}
  tieneIntereses={tieneIntereses}
/>
          </div>

          <div className="Info-right">
            <EncargoLabel />
            <PaydoneCard/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Paydone;