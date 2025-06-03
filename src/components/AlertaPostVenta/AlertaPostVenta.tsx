import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Text } from '../../theme/styledcomponents';
import './AlertaPostVenta.css';

const AlertaPostVenta: React.FC = () => {
  return (
    <div className="alertaPostVenta">
      <div className="alertaTitulo">
        <AiOutlineInfoCircle size={20} color="#D32F2F" />
        <Text variant="subtitle">Visita técnica para evaluación postventa</Text>
      </div>
      <Text variant="captionRegular">
        Le informamos que, como parte del proceso de validación de su solicitud de postventa,
        se programará la visita de un perito físico a su inmueble. Esta inspección tiene como
        objetivo evaluar de manera técnica y objetiva las condiciones reportadas.
      </Text>
    </div>
  );
};

export default AlertaPostVenta;
