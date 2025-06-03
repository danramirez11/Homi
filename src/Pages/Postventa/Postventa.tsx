import React, { useEffect, useState } from 'react';
import EstadoObraList from '../../components/EstadoObraList/EstadoObraList';
import { getEstadoObra } from '../../Services/getPostVenta';
import type { EstadoObraItem } from '../../components/types';
import HeaderPostVenta from '../../components/ButtonPostVenta/ButtonPostVenta';
import { Text } from '../../theme/styledcomponents';
import AlertaPostVenta from '../../components/AlertaPostVenta/AlertaPostVenta';
import Actualizaciones from '../../components/Actualizaciones/Actualizaciones';
import "./Postventa.css";

const PostVenta: React.FC = () => {
  const [data, setData] = useState<EstadoObraItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetched = await getEstadoObra();
      console.log('Datos obtenidos:', fetched); 
      setData(fetched);
      setLoading(false);
    }
    fetchData();
  }, []);
  

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="postventa-container">
      <Text variant='sectionTitle' className='titlePostVenta'>Postventa</Text>
      <HeaderPostVenta />
      
      <div className="contenidoPostventa">
        {/* 📦 Contenido central: bloques grises oscuros */}
        <div className="bloque-central">
          <EstadoObraList data={data} />
          <AlertaPostVenta />
        </div>

        {/* 📦 Lateral derecho: Actualizaciones */}
        <div className="bloque-lateral">
          <Actualizaciones />
        </div>
      </div>
    </div>
  );
};

export default PostVenta;
