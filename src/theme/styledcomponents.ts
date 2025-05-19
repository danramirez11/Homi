import styled from 'styled-components';

//Buttons

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

//Text
//Inputs
//Cards
//Containers

