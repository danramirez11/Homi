import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getEstadoObra, insertarDatos } from '../Services/getPostVenta';
import type { EstadoObraItem } from '../components/types';

export const usePostVentaForm = () => {
  const navigate = useNavigate(); 
  const [data, setData] = useState<EstadoObraItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');
  const [formValues, setFormValues] = useState({
    proyecto: '',
    inmueble: '',
    etapa: '',
    area: '',
    descripcion: '',
    captcha: ''
  });

  useEffect(() => {
    async function fetchData() {
      const fetched = await getEstadoObra();
      setData(fetched);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setMensaje('');
    try {
      const payload = {
        proyecto: formValues.proyecto,
        inmueble: formValues.inmueble,
        etapa: formValues.etapa,
        area_afectada: formValues.area,
        descripcion: formValues.descripcion,
        captcha: formValues.captcha
      };

      await insertarDatos(payload);
      setMensaje('Formulario enviado con éxito.');

      setFormValues({
        proyecto: '',
        inmueble: '',
        etapa: '',
        area: '',
        descripcion: '',
        captcha: ''
      });

      navigate(-1);
    } catch (error) {
      setMensaje('Error al enviar el formulario. Intenta más tarde.');
      console.error('Error al enviar el formulario:', error);
    }
  };

  
  const visibleData = data.slice(Math.max(0, data.length - 5));

  return {
    data: visibleData, 
    loading,
    mensaje,
    formValues,
    handleChange,
    handleSubmit
  };
};
