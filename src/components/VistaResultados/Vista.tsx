import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { Text } from '../../theme/styledcomponents';
import './Vista.css'

const Vista: React.FC = () => {

  return (
    <section 
    id='SectionVista3D'>
        <div 
        className='VistaInformacion'
        style={{
        backgroundImage: 'linear-gradient(to bottom,#32352700,#323527bb), url("img_frase")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}
        >
            <div className='VistaInforText'>
              <Text variant="headlineRegular" color="#EFEFEF">¿Te imaginas vivir tu día a día así?</Text>
              <Text variant="subtitle" color="#EFEFEF">Más que un apartamento, es una inversión en tu bienestar, tu entorno y tu estilo de vida</Text>  
            </div>
        </div>
        <div 
        className='Vista3DLink'
        style={{
        backgroundImage: 'linear-gradient(to bottom,#32352700,#323527bb), url("img_vista3D")',
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