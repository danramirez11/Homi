import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spiner';
import './Splash.css';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/onboarding');
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Logo2JaramilloMora.webp" alt="Logo JaramilloMora" className="Splash_logoj" />
      <Spinner />
      <div className='splash-homi'>
        <p className='splash_p'>Power by Homi</p>
         <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//LogoHomi.webp" alt="Logo Homi" className="Splash_logoh" />
      </div>
     
    </div>
  );
};

export default SplashScreen;
