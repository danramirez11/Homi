import styled from 'styled-components';

//Buttons
// SE USA EN EL COMPONENTE DE ESTA MANERA: <Button variant="dark" size="medium">SUBMIT</Button>
type ButtonVariant = 'dark' | 'light';
type ButtonSize = 'small' | 'medium' | 'large';

const buttonColors = {
  dark: {
    bg: 'rgba(26, 25, 30, 1)',
    hover: 'rgba(51, 51, 51, 1)',
    color: '#FFFFFF',
  },
  light: {
    bg: 'rgba(243, 243, 243, 1)',
    hover: 'rgba(221, 221, 221, 1)',
    color: '#000000',
  },
};

const buttonSizes = {
  small: {
    width: '98px',
    height: '31px',
    padding: '0 10px',
    fontSize: '14px',
    gap: '5px',
  },
  medium: {
    width: '110px',
    height: '38px',
    padding: '10px 16px',
    fontSize: '16px',
    gap: '8px',
  },
  large: {
    width: '126px',
    height: '48px',
    padding: '15px 24px',
    fontSize: '18px',
    gap: '11px',
  },
};

export const Button = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
}>`
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  color: ${({ variant }) => buttonColors[variant].color};
  background-color: ${({ variant }) => buttonColors[variant].bg};
  width: ${({ size }) => buttonSizes[size].width};
  height: ${({ size }) => buttonSizes[size].height};
  min-width: ${({ size }) => buttonSizes[size].width};
  padding: ${({ size }) => buttonSizes[size].padding};
  font-size: ${({ size }) => buttonSizes[size].fontSize};
  border-radius: 36px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ size }) => buttonSizes[size].gap};

  &:hover {
    background-color: ${({ variant }) => buttonColors[variant].hover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

//Text

type TextVariant =
  | 'display'
  | 'headlineRegular'
  | 'headlineMedium'
  | 'headlineBold'
  | 'sectionTitle'
  | 'cardSubtitle'
  | 'subtitle'
  | 'bodyRegular'
  | 'bodyBold'
  | 'captionRegular'
  | 'captionItalic'
  | 'captionBold'
  | 'inputLabel'
  | 'inputText'
  | 'buttonBold'
  | 'buttonRegular';
//Inputs
//Cards
//Containers

