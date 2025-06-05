// EstadoTag.tsx
import "./EstadoTag.css";

type Estado = "Vencido" | "Disponible" | "No emitido" | "Pagado";

export default function EstadoTag({ estado }: { estado: Estado }) {
  return (
    <span className={`estado-tag estado-${estado.toLowerCase().replace(" ", "-")}`}>
      {estado}
    </span>
  );
}
