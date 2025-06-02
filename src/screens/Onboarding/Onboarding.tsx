import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Onboarding.css";
import ButtonOnboarding from '../../components/ButtonOnbording/ButtonOnb';
import Navjm from '../../components/Navjm/Nav';
import { Text } from '../../theme/styledcomponents';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
  

       <Navjm onLoginClick={() => {}} />

      <div className="Onboarding_div1">
        <div className="Onboarding_div2">
          <Text variant="display" color="#EFEFEF">¡Bienvenido!</Text>
           <Text variant="subtitle" color="#EFEFEF" className="Onboarding_p">
           Encuentra el hogar de tus sueños en unos pocos pasos.<br />
           ¡Haz click en iniciar para comenzar con tu formulario!
        </Text>

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
