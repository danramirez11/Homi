import EstadoTag from "../EstadoTag/EstadoTag";
import "./CuotaItem.css";

type Cuota = {
  numero: number;
  fecha: string;
  estado: "Vencido" | "Disponible" | "No emitido" | "Pagado";
  saldo: string;
};

type Props = {
  cuota: Cuota;
  onSeleccionar: (checked: boolean) => void;
};

export default function CuotaItem({ cuota, onSeleccionar }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSeleccionar(e.target.checked);
  };

  return (
    <div className="cuota-item">
      <label className="custom-checkbox">
        <input type="checkbox" onChange={handleChange} />
        <span className="checkbox-style"></span>
      </label>

      <span className="cuota-numero">{cuota.numero}</span>
      <span className="cuota-fecha">{cuota.fecha}</span>
      <EstadoTag estado={cuota.estado} />
      <span className="cuota-saldo">{cuota.saldo}</span>
      <img className="cuota-recibo" src="src/assets/descargar-gris.svg" alt="" />
    </div>
  );
}
