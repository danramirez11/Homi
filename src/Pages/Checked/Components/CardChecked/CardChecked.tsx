import './CardChecked.css';


const CardChecked = () => {
  return (
    <div className="checked-card">
      <div className="checked-header">
        <img src="src\assets\CheckCircle.svg" alt="Éxito" className="checked-icon-success" />
        <h2 className="checked-success-text">¡Tu pago fue realizado con éxito!</h2>
      </div>

      <h3 className="checked-title">Resumen de tu pago</h3>
      <p className="checked-factura"><strong>N° de factura:</strong> 778965</p>
      <p className="checked-fecha"><strong>Fecha de pago:</strong> 01/07/2025</p>
      <p className="checked-descripcion">
        <strong>Descripción:</strong> Pago Cuota Inicial - MES JUNIO PROYECTO ORIGEN TIPO 2
      </p>

      <hr className="checked-separator" />

      <div className="checked-section">
        <p className="checked-label">Valor cuota</p>
        <p className="checked-amount">$12,375,222</p>
        <p className="checked-intereses">
          Intereses por mora<br />
          <span className="checked-mora">$24,778</span>
        </p>
      </div>

      <hr className="checked-separator" />

      <div className="checked-section">
        <p className="checked-label">Valor total</p>
        <p className="checked-total">$12,400,222</p>
      </div>
    </div>
  );
};

export default CardChecked;

