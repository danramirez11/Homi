import { FaCircleChevronLeft } from 'react-icons/fa6';
import { Text } from '../../theme/styledcomponents';
import './BotonAtras.css';

type BotonAtrasProps = {
  color?: string;
  onClick?: () => void;
};

const BotonAtras: React.FC<BotonAtrasProps> = ({ color = '#EFEFEF', onClick }) => {
  return (
    <div className='botonAtras' onClick={onClick} style={{ cursor: 'pointer' }}>
      <FaCircleChevronLeft size={32} color={color} />
      <Text variant="subtitle" color={color}>Volver</Text>
    </div>
  );
};

export default BotonAtras;
