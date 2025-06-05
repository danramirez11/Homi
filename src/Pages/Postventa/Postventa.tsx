import React, { useEffect, useState } from 'react';
import EstadoObraList from '../../components/EstadoObraList/EstadoObraList';
import { getEstadoObra } from '../../Services/getPostVenta';
import type { EstadoObraItem } from '../../components/types';
import HeaderPostVenta from '../../components/ButtonPostVenta/ButtonPostVenta';
import { Text } from '../../theme/styledcomponents';
import AlertaPostVenta from '../../components/AlertaPostVenta/AlertaPostVenta';
import Actualizaciones from '../../components/Actualizaciones/Actualizaciones';
import "./Postventa.css";
import SideBar from '../../components/SideBar/SideBar';
import Spinner from '../../components/Spinner/Spiner';

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
  

  const dataReciente = [...data]
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  .slice(0, 5);
  

  return (
    <div className='perfilContainer'> 
    <div className="side-bar">
      <SideBar />
      </div>

      

    <div className="postventa-container" style={{ marginLeft: '250px' }}>
      {
        loading ? 
        <div className='loadingSpinner-postventa'>
        <Spinner/>
        </div> : 
        <>
      <Text variant='sectionTitle' className='titlePostVenta'>Postventa</Text>
      <HeaderPostVenta />
      
      <div className="contenidoPostventa">
        <div className="bloque-central">
        <EstadoObraList data={dataReciente} />


          <AlertaPostVenta />
        </div>

        <div className="bloque-lateral">
          <Actualizaciones />
        </div>
      </div>
      </>
      }

    </div>
    
    </div>
  );
};

export default PostVenta;
