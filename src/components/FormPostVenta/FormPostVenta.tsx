import React from 'react';
import { Text, Input } from '../../theme/styledcomponents';
import "./FormPostVenta.css"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormGrid: React.FC<Props> = ({ formValues, handleChange }) => (
  <div className="form-grid">
    {[
      { name: 'proyecto', placeholder: 'Origen' },
      { name: 'inmueble', placeholder: 'Torre B, Apto 304' },
      { name: 'etapa', placeholder: 'Etapa III' },
      { name: 'area', placeholder: 'Estudio' }
    ].map(({ name, placeholder }) => (
      <div className="form-item" key={name}>
        <label htmlFor={name}>
          <Text variant="bodyBold">{name[0].toUpperCase() + name.slice(1)} <span style={{ color: 'red' }}>*</span></Text>
        </label>
        <Input name={name} value={formValues[name]} onChange={handleChange} placeholder={placeholder} size="large" status="default" />
      </div>
    ))}

    <div className="form-item full-width">
      <label htmlFor="descripcion">
        <Text variant="bodyBold">Descripción detallada del problema <span style={{ color: 'red' }}>*</span></Text>
      </label>
      <textarea
        name="descripcion"
        value={formValues.descripcion}
        onChange={handleChange}
        placeholder="Describa el problema relacionado"
        className="input-large"
      />
    </div>
    
  </div>
);

export default FormGrid;
