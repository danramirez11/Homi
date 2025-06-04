type Cuota = {
  numero: number
  fecha: string
  estado: "Vencido" | "Disponible" | "No emitido"
  saldo: string
}

export default function CuotaRow({ cuota }: { cuota: Cuota }) {
  const estadoColor = {
    Vencido: "text-red-500",
    Disponible: "text-blue-500",
    "No emitido": "text-gray-400"
  }[cuota.estado]

  return (
    <tr className="text-sm border-t">
      <td><input type="checkbox" /></td>
      <td>{cuota.numero}</td>
      <td>{cuota.fecha}</td>
      <td className={estadoColor}>{cuota.estado}</td>
      <td>{cuota.saldo}</td>
      <td><button>🧾</button></td>
    </tr>
  )
}