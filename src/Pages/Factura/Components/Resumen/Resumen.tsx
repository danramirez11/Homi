import "./Resumen.css";

const ResumenPagoCard = () => {
  return (
    <div className="resumen-card">
      <h3 className="resumen-title">Resumen de tu pago</h3>
      <p className="no-factura"><strong>N° de factura:</strong> 778965</p>
      <p className="fecha-pago"><strong>Fecha de pago:</strong> 01/07/2025</p>
      <p className="descripcion-pago"><strong>Descripción:</strong> Pago Cuota Inicial - MES JUNIO PROYECTO ORIGEN TIPO 2</p>

      <hr className="resumen-separator" />

      <div className="resumen-section">
        <p className="resumen-label">Valor cuota</p>
        <p className="resumen-amount">$12,375,222</p>
        <p className="resumen-intereses">
          Intereses por mora<br />
          <span className="resumen-mora">$24,778</span>
        </p>
      </div>

      <hr className="resumen-separator" />

      <div className="resumen-section">
        <p className="resumen-label">Valor total</p>
        <p className="resumen-total">$12,400,222</p>
      </div>
    </div>
  );
};

export default ResumenPagoCard;
