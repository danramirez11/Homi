import React from 'react';
import "../../screens/Onboarding/Onboarding.css"
import type { ButtonOnbProps } from '../types';

const ButtonOnboarding: React.FC<ButtonOnbProps> = ({ onClick, children,  }) => {
  return (
    <button
      onClick={onClick}
      className="Onboarding_button"
    >
      {children}
    </button>
  );
};

export default ButtonOnboarding;
