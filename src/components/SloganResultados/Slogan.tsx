import { RiLeafLine } from 'react-icons/ri';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import './Slogan.css'
import { Text } from '../../theme/styledcomponents';

const Slogan: React.FC = () => {

  return (
    <section id='seccionSlogan'>
        <div className='SloganInfo'>
            <RiLeafLine size={35} color="#D4D3D3"/>
            <Text variant="headlineRegular" color="#2C2B2B">slogan_2</Text>
            <Text variant="subtitle" color="#2C2B2B" className='SloganInfoText'>descripción_corta</Text>
        </div>
        <div 
        className='SloganPlano'
        style={{
        backgroundImage: 'url("img_plano")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}
        >
            <div className='PlanoInfo'>
                <Text variant="cardSubtitle" color="#EFEFEF">¡Conoce el plano</Text>
                <Text variant="cardSubtitle" color="#EFEFEF">desde arriba!</Text> 
            </div>
            <a href="link_plano"><BsArrowUpRightCircleFill size={45} color="#EFEFEF"/></a>
        </div>
    </section>
  );
};

export default Slogan;