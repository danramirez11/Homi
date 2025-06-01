
import React, { useEffect, useState } from 'react';
import EstadoObraList from '../../components/EstadoObraList/EstadoObraList';
import { getEstadoObra } from '../../Services/getPostVenta';
import type { EstadoObraItem } from '../../components/types';
import HeaderPostVenta from '../../components/ButtonPostVenta/ButtonPostVenta';
import { Text } from '../../theme/styledcomponents';
import "./Postventa.css"

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
    <div>
    <Text variant='sectionTitle' className='titlePostVenta'>Postventa</Text>
    <HeaderPostVenta></HeaderPostVenta>
    <EstadoObraList data={data} />
      
    </div>
  );
};

export default PostVenta;
