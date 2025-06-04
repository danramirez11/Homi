import "./pagos.css";
import { Text } from "../../theme/styledcomponents";
import ProjectHeader from "./Components/ProjectHeader/ProjectHeader";
import CuotaItem from "./Components/CuotaITem/CuotaItem"; // asegúrate que el nombre esté bien

const cuotas = [
  { numero: 1, fecha: "2025-06-01", estado: "Vencido" as const, saldo: "$100.000" },
  { numero: 2, fecha: "2025-07-01", estado: "Disponible" as const, saldo: "$100.000" },
  { numero: 3, fecha: "2025-08-01", estado: "No emitido" as const, saldo: "$100.000" },
  { numero: 4, fecha: "2025-09-01", estado: "Disponible" as const, saldo: "$100.000" },
  { numero: 5, fecha: "2025-10-01", estado: "Vencido" as const, saldo: "$100.000" },
];

const Pagos = () => {
  return (
    <div className="layoutContainer">
      <div className="leftPlaceholder" />

      <div className="mainContent">
        <div className="topStickyHeader">
          <section className="PagosContainer">
            <Text variant="sectionTitle">Gestión de pagos</Text>

            <div className="tabs">
              <div className="tabActive">Apartamentos Campestres</div>
              <div className="tabInactive">Ciudad Guabinas</div>
            </div>
          </section>

          <ProjectHeader
            title="Apartamentos Campestres"
            subtitle="Apartamento 303 - Torre 3"
            imageUrl="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(portada).webp"
          />
        </div>

        <section className="cuotasListContainer">
          {cuotas.map((cuota) => (
            <CuotaItem key={cuota.numero} cuota={cuota} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Pagos;

