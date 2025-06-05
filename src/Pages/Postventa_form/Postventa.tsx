import React from 'react';
import { Text } from '../../theme/styledcomponents';
import BotonAtras from '../../components/BotonAtras/BotonAtras';
import { useNavigate } from 'react-router-dom';
import FormGrid from '../../components/FormPostVenta/FormPostVenta';
import CaptchaSection from '../../components/FormPostVenta/Catcha';
import { usePostVentaForm } from '../../hooks/usepostventa';
import './PostVentaform.css';

const PostVentaform: React.FC = () => {
  const navigate = useNavigate();
  const {
    loading,
    mensaje,
    formValues,
    handleChange,
    handleSubmit
  } = usePostVentaForm();

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="postventa-container">
      <div className="header-with-button">
        <BotonAtras color="#000000" onClick={() => navigate(-1)} />
        <Text variant="headlineMedium" className="formpo-title">Ingresa la siguiente información</Text>
      </div>

      <Text variant="sectionTitle" className="sub-title-postf">Generar reporte</Text>
      <Text variant="captionRegular" className="formpo-description">
        Diligencie el siguiente formulario para radicar sus solicitudes de Postventa. Una vez enviado usted recibirá a vuelta de correo el número de radicado para su posterior seguimiento.
      </Text>

      <FormGrid formValues={formValues} handleChange={handleChange} />
      <CaptchaSection
        captchaValue={formValues.captcha}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default PostVentaform;
