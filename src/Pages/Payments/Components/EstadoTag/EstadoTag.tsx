

export default function EstadoTag({ estado }: { estado: "Vencido" | "Disponible" | "No emitido" }) {
  const estadoClass = estado.toLowerCase().replace(" ", "-"); // "vencido", "disponible", "no-emitido"
  return <span className={`estado-tag ${estadoClass}`}>{estado}</span>;
}

