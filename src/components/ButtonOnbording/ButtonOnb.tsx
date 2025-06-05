import React from 'react';
import type { ButtonOnbProps } from '../types';
import { Button } from '../../theme/styledcomponents';

const ButtonOnboarding: React.FC<ButtonOnbProps> = ({ onClick }) => {
  return (
    <Button variant='light' size='large' onClick={onClick}>
      Iniciar
    </Button>
  );
};

export default ButtonOnboarding;
