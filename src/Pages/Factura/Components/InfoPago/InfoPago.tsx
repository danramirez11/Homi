import "./InfoPago.css";

type InfoPagoCardProps = {
  titulo: string;
  datos: { label: string; valor: string }[];
};

const InfoPagoCard = ({ titulo, datos }: InfoPagoCardProps) => {
  return (
    <div className="info-pago-card">
      <div className="info-header">{titulo}</div>
      <div className="info-content">
        {datos.map((item, index) => (
          <p key={index}>
            <strong>{item.label}: </strong>
            {item.valor}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoPagoCard;
