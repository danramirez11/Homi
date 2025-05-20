import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import './Planos.css'
import { Text } from '../../theme/styledcomponents';


const Planos: React.FC = () => {

  return (
    <section id='SectionPlanos'>
        <div className='SectionPlanosIzq'>
            <div className='SectionPlanosIzq1'>
                <Text variant="sectionTitle" color="#2C2B2B" className='PlanosTitle'>Creemos que esta es tu vivienda ideal</Text>
                <div className='PlanosIzqText'>
                    <Text variant="cardSubtitle" color="#919191">Apartamento Tipo 1</Text>
                    <Text variant="cardSubtitle" color="#919191">Sin espacio flexible</Text>
                </div>
            </div>
            <div className='SectionPlanosIzq2'>
                <div className='SectionPlanosDetalle'>
                    <Text variant="cardSubtitle" color="#EFEFEF" className='PlanosTitle'>Tres estilos de vivienda, una misma calidad</Text> 
                    <a href="linkTipo_proyecto"><BsArrowUpRightCircleFill size={45} color="#EFEFEF"/></a>
                </div>
                <div className='SectionPlanosEspacios'>
                    <div className='PlanosEspacio'>
                        <Text variant="subtitle" color="#EFEFEF">Tipo 1: Espacio flexible</Text>
                        <Text variant="subtitle" color="#EFEFEF">165.14 m²</Text>
                    </div>
                    <hr />
                    <div className='PlanosEspacio'>
                        <Text variant="subtitle" color="#EFEFEF">Tipo 1: Sin espacio flexible</Text>
                        <Text variant="subtitle" color="#EFEFEF">157.11 m²</Text>
                    </div>
                    <hr />
                    <div className='PlanosEspacio'>
                        <Text variant="subtitle" color="#EFEFEF">Tipo 2</Text>
                        <Text variant="subtitle" color="#EFEFEF">124.57 m²</Text>
                    </div>
                </div>
            </div>
        </div>
        <div 
        className='SectionPlanosDer'
        style={{
        backgroundImage: 'url("img_interior_vista")',//modificar
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}
        >
        </div>
    </section>
  );
};

export default Planos;