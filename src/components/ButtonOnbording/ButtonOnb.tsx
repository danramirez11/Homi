import React from 'react';
import "../../screens/Onboarding/Onboarding.css"
import type { ButtonOnbProps } from '../types';
import { Button } from '../../theme/styledcomponents';

const ButtonOnboarding: React.FC<ButtonOnbProps> = ({ onClick, children,  }) => {
  return (
    <Button variant='light' size='large'
      onClick={onClick}
      className="Onboarding_button"
    >
      {children}
    </Button>
  );
};

export default ButtonOnboarding;
