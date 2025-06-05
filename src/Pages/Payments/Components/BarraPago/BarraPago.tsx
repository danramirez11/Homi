import "./BarraPago.css";
import { useNavigate } from "react-router-dom";

type PagoBarProps = {
  cuotasSeleccionadas: number;
  total: number;
  tieneIntereses: boolean;
};

const PagoBar = ({ cuotasSeleccionadas, total, tieneIntereses }: PagoBarProps) => {
  const navigate = useNavigate(); // ✅ Esto debe ir dentro del componente

  const handleClick = () => {
    if (cuotasSeleccionadas > 0) {
      navigate("/factura");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={`pago-bar ${cuotasSeleccionadas > 0 ? "activo" : "inactivo"}`}>
      <div className="pago-info">
        <p>
          {cuotasSeleccionadas === 0 ? (
            "0 cuotas seleccionadas"
          ) : (
            <>
              {`${cuotasSeleccionadas} cuota${cuotasSeleccionadas > 1 ? "s" : ""} seleccionada`}
              {tieneIntereses && (
                <span className="intereses"> + intereses por mora</span>
              )}
            </>
          )}
        </p>

        <p className="total-label">Total a pagar</p>
      </div>

      <div className="pago-accion">
        <span className="valor">${total.toLocaleString()}</span>
        <button
          className="boton"
          disabled={cuotasSeleccionadas === 0}
          onClick={handleClick}
        >
          <img src="src/assets/CreditCard.svg" alt="" />
          Pagar
        </button>
      </div>
    </div>
  );
};

export default PagoBar;
