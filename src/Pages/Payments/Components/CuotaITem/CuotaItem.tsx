import EstadoTag from "../EstadoTag/EstadoTag";
import "./CuotaItem.css";

type Cuota = {
  numero: number;
  fecha: string;
  estado: "Vencido" | "Disponible" | "No emitido";
  saldo: string;
};

export default function CuotaItem({ cuota }: { cuota: Cuota }) {
  return (
    <div className="cuota-item">
      <input type="checkbox" className="cuota-checkbox" />
      <span className="cuota-numero">#{cuota.numero}</span>
      <span className="cuota-fecha">{cuota.fecha}</span>
      <EstadoTag estado={cuota.estado} />
      <span className="cuota-saldo">{cuota.saldo}</span>
      <button className="cuota-recibo" title="Ver recibo">🧾</button>
    </div>
  );
}

