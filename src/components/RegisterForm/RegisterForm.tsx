import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import { Button, Text } from '../../theme/styledcomponents';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import supabase from '../../Services/Supabase';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    document: ''
  });
  const [error, setError] = useState<string | null>(null);

  const irALogin = () => {
    navigate('/login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { email, password, fullName, document } = formData;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          document_id: document
        }
      }
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/login');
    }
  };

  return (
    <section className='RegisterSection'>
      <div className="RegisterHeader">
        <img className='LogoRegister' src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Logo2JaramilloMora.webp" alt="LogoJM" />
        <Text variant="sectionTitleMedium" color="#2C2B2B">Crea tu cuenta con nosotros</Text>
        <Text variant="bodyRegular" color="#2C2B2B">Más que vender, queremos acompañarte</Text>
      </div>

      <form className="RegisterForm" onSubmit={handleRegister}>
        <div className='RegisterFormInfo'>
          <Text variant="bodyBold" color="#2C2B2B">Correo electrónico</Text>
          <input
            type="email"
            name="email"
            className='inputRegister'
            placeholder="Ingresa tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Text variant="bodyBold" color="#2C2B2B">Documento de identificación</Text>
          <input
            type="text"
            name="document"
            className='inputRegister'
            placeholder="Ingresa tu número de documento"
            value={formData.document}
            onChange={handleChange}
            required
          />

          <Text variant="bodyBold" color="#2C2B2B">Nombre completo</Text>
          <input
            type="text"
            name="fullName"
            className='inputRegister'
            placeholder="Ingresa tu nombre completo"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <Text variant="bodyBold" color="#2C2B2B">Contraseña</Text>
          <div className="inputPasswordWrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className='inputRegister'
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="togglePassword" onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {error && <p className="errorMessage">{error}</p>}
        </div>

        <div className='RegisterEnlaces'>
          <Button type="submit" variant="dark" size="medium" weight="regular">Crear cuenta</Button>
          <div className="LoginorRegister">
            <Text variant="bodyRegular" color="#2C2B2B">¿Ya tienes una cuenta?</Text>
            <Text variant="bodyBold" color="#2C2B2B" onClick={irALogin} className='RegisterEnlaceText'>Ingresar</Text>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;