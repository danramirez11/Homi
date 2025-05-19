import { Text } from '../../theme/styledcomponents';
import './Explicacion.css'
import { RiLeafLine } from "react-icons/ri";

const Explicacion: React.FC = () => {

  return (
    <section id='seccionExp'>
        <div className='seccionExpImg'>
          <div
          className='ExpImg1' 
          style={{
          backgroundImage: 'url("https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/NoVIS-explicacion1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAwNzA2YzcwLWMzOTktNDUwZi04MWM4LWJhYzVmNjhhN2NhNCJ9.eyJ1cmwiOiJwcm95ZWN0b3MvTm9WSVMtZXhwbGljYWNpb24xLmpwZyIsImlhdCI6MTc0NzY4NjQyNSwiZXhwIjoxNzc5MjIyNDI1fQ.q0vBaKn42_P22MHz1y6cofywd8biwDB6LNzh-DBvxO4")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',}}
          />
          <div
          className='ExpImg2'  
          style={{
          backgroundImage: 'url("https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/NoVIS-explicacion2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAwNzA2YzcwLWMzOTktNDUwZi04MWM4LWJhYzVmNjhhN2NhNCJ9.eyJ1cmwiOiJwcm95ZWN0b3MvTm9WSVMtZXhwbGljYWNpb24yLmpwZyIsImlhdCI6MTc0NzY4NjQ1NSwiZXhwIjoxNzc5MjIyNDU1fQ.c3y0XOTtfPh3O48VV8KguJP65Ug1y0ZB9BrcciyXkac")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',}}
          />

        </div>
        <div className='seccionExpText'>
          <RiLeafLine size={35} color="#D4D3D3"/>
          <Text variant="headlineRegular" color="#2C2B2B">¿Por qué deberías acceder a este proyecto?</Text>
          <Text variant="bodyRegular" color="#2C2B2B">Disfrutas de zonas verdes, jardines y senderos en un entorno tranquilo sin salir de la ciudad. Además de un hogar con espacios diseñados en materiales premium, ideales para quienes buscan confort y estilo. Y muchos lugares de recreación como piscina, gimnasio, coworking, zonas BBQ, salón social… ¡todo sin salir de casa!</Text>
        </div>
    </section>
  );
};

export default Explicacion;