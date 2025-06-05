type PagoBarProps = {
  cuotasSeleccionadas: number;
  total: number;
  tieneIntereses: boolean;
};

const PagoBar = ({ cuotasSeleccionadas, total, tieneIntereses }: PagoBarProps) => {
  return (
    <div className={`pago-bar ${cuotasSeleccionadas > 0 ? "activo" : "inactivo"}`}>
      <div className="pago-info">
        <p>
  {cuotasSeleccionadas === 0
    ? "0 cuotas seleccionadas"
    : `${cuotasSeleccionadas} cuota${cuotasSeleccionadas > 1 ? "s" : ""} seleccionada${tieneIntereses ? " + intereses por mora" : ""}`}
</p>

        <p className="total-label">Total a pagar</p>
      </div>

      <div className="pago-accion">
        <span className="valor">${total.toLocaleString()}</span>
        <button className="boton" disabled={cuotasSeleccionadas === 0}>
          💳 Pagar
        </button>
      </div>
    </div>
  );
};

export default PagoBar;
