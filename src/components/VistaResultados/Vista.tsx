import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { Text } from '../../theme/styledcomponents';
import './Vista.css'
import Usedetail from '../../hooks/usedetail';

const Vista: React.FC = () => {
const {proyecto} = Usedetail()
  return (
    <section 
    id='SectionVista3D'>
        <div 
        className='VistaInformacion'
        style={{
        backgroundImage: `linear-gradient(to bottom,#32352700,#323527bb), url(${proyecto.img_informacion})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}
        >
            <div className='VistaInforText'>
              
              <Text variant="headlineRegular" color="#EFEFEF">¿Te imaginas vivir tu día a día así?</Text>
              <Text variant="subtitle" color="#EFEFEF">{proyecto.texto_intro}</Text>  
            </div>
        </div>
        <div 
        className='Vista3DLink'
        style={{
        backgroundImage: `linear-gradient(to bottom,#32352700,#323527bb), url(${proyecto.img_vista3D})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}
        >
            <div className='Vista3DInfo'>
                <Text variant="cardSubtitle" color="#EFEFEF">Dale un vistazo</Text>
                <Text variant="cardSubtitle" color="#EFEFEF">al tour 360°</Text> 
            </div>
            <a href="linkVista_3D"><BsArrowUpRightCircleFill size={45} color="#EFEFEF"/></a>
        </div>
    </section>
  );
};

export default Vista;