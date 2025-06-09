import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { Button, Text } from '../../theme/styledcomponents';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import supabase from '../../Services/Supabase';
import { getUser } from '../../store/userSlice';
import { useAppDispatch } from '../../store/store';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    document: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);

  const irARegistro = () => {
    navigate('/register');
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
  const handleLogin = async () => {
  setError(null);

  const documentValue = formData.document.trim();
  const documentNumber = Number(documentValue);

  if (!documentValue || isNaN(documentNumber)) {
    setError('El documento debe ser un número válido.');
    return;
  }

  // Buscar email con document_id numérico
  const { data, error: queryError } = await supabase
    .from('users')
    .select('email')
    .eq('document_id', documentNumber)
    .single();

  if (queryError || !data?.email) {
    setError('Documento no encontrado.');
    return;
  }

  const email = data.email;

  const { error: authError } = await supabase.auth.signInWithPassword({
    email,
    password: formData.password
  });

  if (authError) {
    setError('Contraseña incorrecta o error al iniciar sesión.');
  } else {
    dispatch(getUser());
    navigate('/dashboard');
  }
};


  return (
    <section className='LoginSection'>
      <div className="LoginHeader">
        <img className='LogoLogin' src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Logo2JaramilloMora.webp" alt="LogoJM"/>
        <Text variant="sectionTitleMedium" color="#2C2B2B">Bienvenido de vuelta</Text>
        <Text variant="bodyRegular" color="#2C2B2B">Retoma tu camino hacia el hogar ideal</Text>
      </div>

      <form className="LoginForm" onSubmit={(e) => e.preventDefault()}>
        <div className='LoginFormInfo'>
          <Text variant="bodyBold" color="#2C2B2B">Documento de identificación</Text>
          <input
            type="text"
            name="document"
            className='inputLogin'
            placeholder="Ingresa tu número de documento"
            value={formData.document}
            onChange={handleChange}
            required
          />

          <Text variant="bodyBold" color="#2C2B2B">Contraseña</Text>
          <div className="inputPasswordWrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className='inputLogin'
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
      </form>

      <div className='LoginEnlaces'>
        <Button variant="dark" size="medium" weight="regular" onClick={handleLogin}>
          Iniciar sesión
        </Button>
        <div className="LoginorRegister">
          <Text variant="bodyRegular" color="#2C2B2B">¿Todavía no tienes una cuenta?</Text>
          <Text variant="bodyBold" color="#2C2B2B" onClick={irARegistro} className='LoginEnlaceText'> Crear una</Text>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;