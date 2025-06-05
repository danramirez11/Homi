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
      <label className="custom-checkbox">
        <input type="checkbox" />
        <span className="checkbox-style"></span>
      </label>

      <span className="cuota-numero">{cuota.numero}</span>
      <span className="cuota-fecha">{cuota.fecha}</span>
      <EstadoTag estado={cuota.estado} />
      <span className="cuota-saldo">{cuota.saldo}</span>
      <img className= "cuota-recibo" src="src\assets\descargar-gris.svg" alt="" />
    </div>
  );
}

