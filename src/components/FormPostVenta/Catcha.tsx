import React from 'react';
import { Text, Input, Button } from '../../theme/styledcomponents';
import './Catcha.css';

interface Props {
  captchaValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const CaptchaSection: React.FC<Props> = ({ captchaValue, handleChange, onSubmit }) => (
  <div className="captcha-section">
    <img src="https://dummyimage.com/200x60/cccccc/000000&text=D6RUve" alt="Captcha" className="captcha-img" />
    
    <div className="captcha-input-wrapper">
      <label htmlFor="captcha-text">
        <Text variant="bodyBold">Ingresa el texto <span style={{ color: 'red' }}>*</span></Text>
      </label>

      <div className="input-catcha">
        <Input name="captcha" value={captchaValue} onChange={handleChange} size="medium" status="default" />
      </div>

      <Text variant="inputText" className="legal-text">
      Autorizo de manera voluntaria, previa, expresa e informada a Jaramillo Mora Constructora S.A. para registrar los datos que he suministrado, con fines comerciales, mercadeo de los productos y/o servicios, o gestionar cualquier petición, queja o reclamo. En consecuencia declaro: i.Que esta información será tratada de acuerdo a lo dispuesto en la Ley 1581 de 2012 relativa a la protección de datos personales, ii.Que puedo ejercer en cualquier momento los derechos que tengo de acceso, rectificación, supresión y prueba de autorización sobre el tratamiento que se ha dado a mis datos personales.
      Para conocer más sobre nuestra política de tratamiento de la información personal dar <a href="#">Clic Aquí</a>.
      </Text>
      <Button variant="dark" size="medium" weight="regular" className="submit-button" onClick={onSubmit} >
        Enviar
      </Button>
    </div>


     
   
  </div>
);

export default CaptchaSection;
