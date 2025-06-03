import React, { useEffect, useState } from 'react';
import { Text } from '../../theme/styledcomponents';
import Campana from '../../assets/Campana.svg';
import { getEstadoObra } from '../../Services/getPostVenta';
import type { EstadoObraItem } from '../types';
import './Actualizaciones.css';

const Actualizaciones: React.FC = () => {
  const [proyectos, setProyectos] = useState<EstadoObraItem[]>([]);

  useEffect(() => {
    async function fetchProyectos() {
      const data = await getEstadoObra();
      setProyectos(data);
    }
    fetchProyectos();
  }, []);

  return (
    <div className="actualizaciones">
      <Text variant="subtitle">Actualizaciones</Text>

      {proyectos.map((item) => (
        <div
          key={item.id}
          className={`notificacion ${item.estado === 'Rechazado' ? 'alerta' : ''}`}
        >
          <img src={Campana} alt="Notificación" className="iconoCampana" />
          <div className="textoNoti">
            <Text
              variant="captionBold"
              color={item.estado === 'Rechazado' ? 'error' : undefined}
            >
              {item.proyecto}
            </Text>
            <Text variant="captionRegular">
              {new Date(item.created_at).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Actualizaciones;
