import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'
import { Button, Text } from '../../theme/styledcomponents';

const RegisterForm = () => {
  const navigate = useNavigate();

  const irALogin = () => {
    navigate('/login');
  };

  return (
    <section className='RegisterSection'>
      <div className="RegisterHeader">
        <img className='LogoRegister' src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Logo2JaramilloMora.webp" alt="LogoJM"/>
        <Text variant="sectionTitleMedium" color="#2C2B2B">Crea tu cuenta con nosotros</Text>
        <Text variant="bodyRegular" color="#2C2B2B">Más que vender, queremos acompañarte</Text>
      </div>

      <form className="RegisterForm">
        <div className='RegisterFormInfo'>
          <Text variant="bodyBold" color="#2C2B2B">Correo electrónico</Text>
          <input type="email" className='inputRegister' placeholder="Ingresa tu correo electrónico"/>

          <Text variant="bodyBold" color="#2C2B2B">Documento de identificación</Text>
          <input type="text" className='inputRegister' placeholder="Ingresa tu número de documento"/>

          <Text variant="bodyBold" color="#2C2B2B">Nombre completo</Text>
          <input type="text" className='inputRegister' placeholder="Ingresa tu nombre completo"/>

          <Text variant="bodyBold" color="#2C2B2B">Contraseña</Text>
          <input type="password" className='inputRegister' placeholder="Ingresa tu contraseña"/>
        </div>
      </form>

      <div className='RegisterEnlaces'>
          <Button variant="dark" size="medium" weight="regular">Crear cuenta</Button>
          <div className="LoginorRegister">
            <Text variant="bodyRegular" color="#2C2B2B">¿Ya tienes una cuenta?</Text>
            <Text variant="bodyBold" color="#2C2B2B" onClick={irALogin} className='RegisterEnlaceText'>Ingresar</Text>
          </div>
      </div>
    </section>
  );
};

export default RegisterForm;