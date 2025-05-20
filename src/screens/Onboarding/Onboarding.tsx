import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Onboarding.css";
import ButtonOnboarding from '../../components/ButtonOnbording/ButtonOnb';
import Navjm from '../../components/Navjm/Nav';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
  

       <Navjm onLoginClick={() => {}} />

      <div className="Onboarding_div1">
        <div className="Onboarding_div2">
          <h1 className="Onboarding_h1">¡Bienvenido!</h1>
           <p className="Onboarding_p">
           Encuentra el hogar de tus sueños en unos pocos pasos.<br />
           ¡Haz click en iniciar para comenzar con tu formulario!
        </p>

        </div>

        <ButtonOnboarding onClick={() => navigate('/form')}>
          Iniciar
        </ButtonOnboarding>
          <p className="Power_by">Power by Homi</p>
      </div>
    
    </>
  );
};

export default Onboarding;
