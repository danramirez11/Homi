import { FaCircleChevronLeft } from 'react-icons/fa6';
import './BotonSim.css';
import { Text } from '../../theme/styledcomponents';

interface BotonSimProps {
  onClick?: () => void;
}

const BotonSim: React.FC<BotonSimProps> = ({ onClick }) => {
  return (
    <div className='botonAtrasSim' onClick={onClick}>
      <FaCircleChevronLeft size={32} color="#2C2B2B" />
      <Text variant="subtitle" color="#2C2B2B">Volver</Text>
    </div>
  );
};

export default BotonSim;