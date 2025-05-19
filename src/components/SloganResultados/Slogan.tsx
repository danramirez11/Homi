import { RiLeafLine } from 'react-icons/ri';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import './Slogan.css'

const Slogan: React.FC = () => {

  return (
    <section id='seccionSlogan'>
        <div className='SloganInfo'>
            <RiLeafLine size={35} color="#D4D3D3"/>
            <h3>El lujo de vivir donde la <span style={{color:'#A6BD49' }}>naturaleza inspira</span></h3>
            <p>Sus torres, cuidadosamente diseñadas, emergen como parte del paisaje, ofreciendo a sus residentes visuales inigualables que inspiran y renuevan. Aquí, cada amanecer nos recuerda la belleza que reside en la simplicidad</p>
        </div>
        <div 
        className='Slogan3D'
        style={{
        backgroundImage: 'url("https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/NoVIS-plano.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAwNzA2YzcwLWMzOTktNDUwZi04MWM4LWJhYzVmNjhhN2NhNCJ9.eyJ1cmwiOiJwcm95ZWN0b3MvTm9WSVMtcGxhbm8uanBnIiwiaWF0IjoxNzQ3NjkwMjEyLCJleHAiOjE3NzkyMjYyMTJ9.IBtlM9ZTdzrDvhUi0Tb17aoq1VqJKxWRAa8bCCf49aE")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',}}
        >
            <div className='3DInfo'>
                <p>¡Conoce el plano</p>
                <p>desde arriba!</p> 
            </div>
            <a href="https://storage.googleapis.com/jaramillomora.com/360/virtual-origen-t1/index.htm"><BsArrowUpRightCircleFill size={35} color="#EFEFEF"/></a>
        </div>
    </section>
  );
};

export default Slogan;