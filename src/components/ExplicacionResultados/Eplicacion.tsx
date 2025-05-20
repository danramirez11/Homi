import Usedetail from '../../hooks/usedetail';
import { Text } from '../../theme/styledcomponents';
import './Explicacion.css'
import { RiLeafLine } from "react-icons/ri";
import type { Proyecto } from "../../types/Proyectos";

// const Portada = ({ Proyectodata }: { Proyectodata: Proyecto }) => {

const Explicacion = ({ Proyectodata }: { Proyectodata: Proyecto }) => {


  return (
    <section id='seccionExp'>
        <div className='seccionExpImg'>
          <div
          className='ExpImg1' 
          style={{
          backgroundImage: `url(${Proyectodata.img_explicacion1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',}}
          />
          <div
          className='ExpImg2'  
          style={{
          backgroundImage: `url(${Proyectodata.img_explicación2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',}}
          />

        </div>
        <div className='seccionExpText'>
          <RiLeafLine size={35} color="#D4D3D3"/>
          <Text variant="headlineRegular" color="#2C2B2B">¿Por qué deberías acceder a este proyecto?</Text>
          <Text variant="subtitle" color="#2C2B2B">{Proyectodata.explicacion}</Text>
        </div>
    </section>
  );
};

export default Explicacion;