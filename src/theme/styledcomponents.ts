import styled from 'styled-components';

export const InvisibleDiv = styled.div`
  display: none;
  visibility: hidden;
  opacity: 0;
`;

//Buttons
// SE USA EN EL COMPONENTE DE ESTA MANERA: <Button variant="dark" size="medium" weight="bold">SUBMIT</Button>
type ButtonVariant = 'dark' | 'light';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonWeight = 'regular' | 'bold';

const buttonColors = {
  dark: {
    bg: 'rgba(26, 25, 30, 1)',
    hover: 'rgba(51, 51, 51, 1)',
    color: 'rgba(255, 255, 255, 1)',
  },
  light: {
    bg: 'rgba(243, 243, 243, 1)',
    hover: 'rgba(221, 221, 221, 1)',
    color: 'rgba(44, 43, 43, 1)',
  },
};

const buttonSizes = {
  small: {
    width: '110px',
    height: '31px',
    padding: '0 10px',
    fontSize: '14px',
    gap: '5px',
  },
  medium: {
    width: '120px',
    height: '38px',
    padding: '10px 16px',
    fontSize: '16px',
    gap: '8px',
  },
  large: {
    width: '136px',
    height: '48px',
    padding: '15px 24px',
    fontSize: '18px',
    gap: '11px',
  },
};

export const Button = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  weight?: ButtonWeight;
}>`
  font-family: 'Archivo', sans-serif;
  font-weight: ${({ weight }) => (weight === 'bold' ? 700 : 400)};
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
// SE USA EN EL COMPONENTE DE ESTA MANERA: <Text variant="display">Texto display</Text>

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
  | 'inputText';

const textVariants = {
  display: {
    fontSize: '40px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  headlineRegular: {
    fontSize: '33px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  headlineMedium: {
    fontSize: '33px',
    fontWeight: 500,
    fontStyle: 'normal',
  },
  headlineBold: {
    fontSize: '33px',
    fontWeight: 700,
    fontStyle: 'normal',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  cardSubtitle: {
    fontSize: '23px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  subtitle: {
    fontSize: '19px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  bodyRegular: {
    fontSize: '16px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  bodyBold: {
    fontSize: '16px',
    fontWeight: 700,
    fontStyle: 'normal',
  },
  captionRegular: {
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  captionItalic: {
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'italic',
  },
  captionBold: {
    fontSize: '14px',
    fontWeight: 600,
    fontStyle: 'normal',
  },
  inputLabel: {
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  inputText: {
    fontSize: '12px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  
};
export const Text = styled.p<{ variant: TextVariant }>`
  font-family: 'Archivo', sans-serif;
  font-size: ${({ variant }) => textVariants[variant].fontSize};
  font-weight: ${({ variant }) => textVariants[variant].fontWeight};
  font-style: ${({ variant }) => textVariants[variant].fontStyle};
  margin: 0;
  color: ${({ color }) => color || 'inherit'};
`;

//Inputs
// SE USA EN EL COMPONENTE DE ESTA MANERA: <Input size="small" status="default" />

type InputSize = 'small' | 'medium' | 'large';
type InputStatus = 'default' | 'success' | 'error';

const inputSizes = {
  small: {
    width: '280px',
    height: '15px',
    padding: '10px 18px',
    gap: '25px',
  },
  medium: {
    width: '350px',
    height: '15px',
    padding: '10px 18px',
    gap: '25px',
  },
  large: {
    width: '420px',
    height: '15px',
    padding: '10px 18px',
    gap: '25px',
  },
};

const inputStatusColors = {
  default: {
    border: '#D4D3D3',
    boxShadow: 'none',
  },
  success: {
    border: '#D4D3D3',
    boxShadow: '0 0 0 3px rgba(166, 189, 73, 1)',
  },
  error: {
    border: '#D4D3D3',
    boxShadow: '0 0 0 3px rgba(235, 82, 71, 0.3)',
  },
};

export const Input = styled.input<{
  size: InputSize;
  status?: InputStatus;
}>`
  width: ${({ size }) => inputSizes[size].width};
  height: ${({ size }) => inputSizes[size].height};
  padding: ${({ size }) => inputSizes[size].padding};
  border-radius: 30px;
  border: 1.5px solid ${({ status = 'default' }) => inputStatusColors[status].border};
  background: #ffffff;
  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;

  box-shadow: ${({ status = 'default' }) => inputStatusColors[status].boxShadow};

  &:hover {
    border: 1.5px solid #86B7FE;
    box-shadow: 0px 0px 0px 1.5px rgba(134, 183, 254, 0.3);
  }

  &:focus {
    border: 1.5px solid #86B7FE;
    box-shadow: 0px 0px 0px 3px rgba(134, 183, 254, 0.3);
  }
`;
//Cards
//Containers
