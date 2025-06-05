

const PagoBar = () => {
  const cuotasSeleccionadas: number = 1; // valor fijo para demo
  const total = 150000;
  const tieneIntereses = true;

  const activo = cuotasSeleccionadas > 0;

  return (
    <div className={`pago-bar ${activo ? "activo" : "inactivo"}`}>
      <div className="pago-info">
        <p>
          {cuotasSeleccionadas === 0
            ? "0 cuotas seleccionadas"
            : `${cuotasSeleccionadas} cuota${cuotasSeleccionadas > 1 ? "s" : ""} seleccionada`}
          {tieneIntereses && <span className="intereses"> + intereses por mora</span>}
        </p>
        <p className="total-label">Total a pagar</p>
      </div>

      <div className="pago-accion">
        <span className="valor">${total.toLocaleString()}</span>
        <button className="boton" disabled={!activo}>
          💳 Pagar
        </button>
      </div>
    </div>
  );
};

export default PagoBar;
