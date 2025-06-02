import { FaCircleChevronLeft } from 'react-icons/fa6';
import { Text } from '../../theme/styledcomponents';
import './BotonAtras.css'

const BotonAtras: React.FC = () => {

  return (
    <div className='botonAtras'>
        <FaCircleChevronLeft size={32} color="#EFEFEF"/>
        <Text variant="subtitle" color="#EFEFEF">Volver</Text>
    </div>
  );
};

export default BotonAtras;