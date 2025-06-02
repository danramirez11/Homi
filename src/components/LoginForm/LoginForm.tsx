import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
import { Button, Text } from '../../theme/styledcomponents';

const LoginForm = () => {
  const navigate = useNavigate();

  const irARegistro = () => {
    navigate('/register');
  };

  return (
    <section className='LoginSection'>
      <div className="LoginHeader">
        <img className='LogoLogin' src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Logo2JaramilloMora.webp" alt="LogoJM"/>
        <Text variant="sectionTitleMedium" color="#2C2B2B">Bienvenido de vuelta</Text>
        <Text variant="bodyRegular" color="#2C2B2B">Retoma tu camino hacia el hogar ideal</Text>
      </div>

      <form className="LoginForm">
        <div className='LoginFormInfo'>
          <Text variant="bodyBold" color="#2C2B2B">Documento de identificación</Text>
          <input type="text" className='inputLogin' placeholder="Ingresa tu número de documento"/>

          <Text variant="bodyBold" color="#2C2B2B">Contraseña</Text>
          <input type="password" className='inputLogin' placeholder="Ingresa tu contraseña"/>
        </div>
      </form>

      <div className='LoginEnlaces'>
          <Button variant="dark" size="medium" weight="regular">Iniciar sesión</Button>
          <div className="LoginorRegister">
            <Text variant="bodyRegular" color="#2C2B2B">¿Todavía no tienes una cuenta?</Text>
            <Text variant="bodyBold" color="#2C2B2B" onClick={irARegistro} className='LoginEnlaceText'> Crear una</Text>
          </div>
      </div>
    </section>
  );
};

export default LoginForm;