import React, { useState } from 'react';
import { Text } from '../../theme/styledcomponents';
import './EstadoObraList.css';
import type { EstadoObraListProps } from '../types';
import type { EstadoObraItem } from '../types';

export function getEstadoClass(estado: EstadoObraItem['estado']): string {
  switch (estado) {
    case 'Recibido':
      return 'estado recibido';
    case 'Resuelto':
      return 'estado resuelto';
    case 'Rechazado':
      return 'estado rechazado';
    default:
      return 'estado';
  }
}

const EstadoObraList: React.FC<EstadoObraListProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return ''; // no hay fecha
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ''; // fecha inválida
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="estado-obra-container">
      <table className="tabla-estado">
        <thead>
          <tr>
            <th><Text variant="captionRegular">Proyecto</Text></th>
            <th><Text variant="captionRegular">Fecha</Text></th>
            <th><Text variant="captionRegular">Espacio</Text></th>
            <th><Text variant="captionRegular">Estado</Text></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const updatedAtFormatted = formatDate(item.updated_at);
            const createdAtFormatted = formatDate(item.created_at);

            return (
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(index)} style={{ cursor: 'pointer' }}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.625 4.375C16.625 3.89175 17.0168 3.5 17.5 3.5H21C22.933 3.5 24.5 5.067 24.5 7V10.5C24.5 10.9832 24.1082 11.375 23.625 11.375C23.1418 11.375 22.75 10.9832 22.75 10.5V7C22.75 6.0335 21.9665 5.25 21 5.25H17.5C17.0168 5.25 16.625 4.85825 16.625 4.375ZM11.375 23.625C11.375 24.1082 10.9832 24.5 10.5 24.5H7C5.067 24.5 3.5 22.933 3.5 21V17.5C3.5 17.0168 3.89175 16.625 4.375 16.625C4.85825 16.625 5.25 17.0168 5.25 17.5L5.25 21C5.25 21.9665 6.0335 22.75 7 22.75H10.5C10.9832 22.75 11.375 23.1418 11.375 23.625ZM3.5 10.5C3.5 10.9832 3.89175 11.375 4.375 11.375C4.85825 11.375 5.25 10.9832 5.25 10.5L5.25 7C5.25 6.0335 6.0335 5.25 7 5.25L10.5 5.25C10.9832 5.25 11.375 4.85825 11.375 4.375C11.375 3.89175 10.9832 3.5 10.5 3.5H7C5.067 3.5 3.5 5.067 3.5 7V10.5ZM23.625 16.625C24.1082 16.625 24.5 17.0168 24.5 17.5V21C24.5 22.933 22.933 24.5 21 24.5H17.5C17.0168 24.5 16.625 24.1082 16.625 23.625C16.625 23.1418 17.0168 22.75 17.5 22.75H21C21.9665 22.75 22.75 21.9665 22.75 21V17.5C22.75 17.0168 23.1418 16.625 23.625 16.625ZM14.3094 10.8094C14.1385 10.6385 13.8615 10.6385 13.6906 10.8094L10.7472 13.7528C10.5763 13.9237 10.5763 14.2007 10.7472 14.3715L13.6906 17.315C13.8615 17.4859 14.1385 17.4859 14.3094 17.315L17.2528 14.3715C17.4237 14.2007 17.4237 13.9237 17.2528 13.7528L14.3094 10.8094Z" fill="black" fill-opacity="0.04"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5469 9.57234L18.4904 12.5158C19.3446 13.3701 19.3446 14.7551 18.4904 15.6094L15.5469 18.5529C14.6926 19.4071 13.3076 19.4071 12.4533 18.5529L9.50984 15.6094C8.65557 14.7551 8.65557 13.3701 9.50984 12.5158L12.4533 9.57234C13.3076 8.71807 14.6926 8.71807 15.5469 9.57234ZM14.3095 10.8098C14.1386 10.6389 13.8616 10.6389 13.6907 10.8098L10.7473 13.7532C10.5764 13.9241 10.5764 14.2011 10.7473 14.372L13.6907 17.3154C13.8616 17.4863 14.1386 17.4863 14.3095 17.3154L17.2529 14.372C17.4238 14.2011 17.4238 13.9241 17.2529 13.7532L14.3095 10.8098Z" fill="black"/>
                  </svg>
                      <Text as="span" variant="captionRegular">{item.proyecto}</Text>
                    </div>
                  </td>
                  <td><Text as="span" variant="captionRegular">{createdAtFormatted}</Text></td>
                  <td><Text as="span" variant="captionRegular">{item.espacio}</Text></td>
                  <td style={{ position: 'relative' }}>
                    
                    <Text
                      as="span"
                      variant="captionRegular"
                      className={`estado-text ${getEstadoClass(item.estado)}`}
                    >
                      {item.estado}
                    </Text>
                      <span
          
                        className={`estado-arrow ${expandedIndex === index ? 'rotated' : ''}`}
                        style={{
                           position: 'absolute',
                          right: '1.4rem',
                          top: '50%',
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
                          <path d="M26.7071 12.7081L16.7071 22.7081C16.6142 22.801 16.5039 22.8748 16.3825 22.9251C16.2611 22.9754 16.131 23.0013 15.9996 23.0013C15.8682 23.0013 15.738 22.9754 15.6166 22.9251C15.4952 22.8748 15.385 22.801 15.2921 22.7081L5.29208 12.7081C5.10444 12.5204 4.99902 12.2659 4.99902 12.0006C4.99902 11.7352 5.10444 11.4807 5.29208 11.2931C5.47972 11.1054 5.73422 11 5.99958 11C6.26494 11 6.51944 11.1054 6.70708 11.2931L15.9996 20.5868L25.2921 11.2931C25.385 11.2001 25.4953 11.1264 25.6167 11.0762C25.7381 11.0259 25.8682 11 25.9996 11C26.131 11 26.2611 11.0259 26.3825 11.0762C26.5039 11.1264 26.6142 11.2001 26.7071 11.2931C26.8 11.386 26.8737 11.4963 26.924 11.6177C26.9743 11.7391 27.0001 11.8692 27.0001 12.0006C27.0001 12.132 26.9743 12.2621 26.924 12.3835C26.8737 12.5048 26.8 12.6151 26.7071 12.7081Z" fill="#343330"/>
                        </svg>
                      </span>
                  </td>
                </tr>

                {expandedIndex === index && (
                  <tr className="detalle-expandido">
                    <td colSpan={4}>
                      <div style={{ padding: '10px', width: '30rem' }}>
                        <Text variant="captionBold">{item.inmueble}</Text><br />
                        <Text variant="captionRegular">Creado: {createdAtFormatted}</Text><br />
                        <Text variant="captionRegular" className="descripcion-exanpost">
                          Descripción: {item.descripcion || 'Sin descripción'}
                        </Text><br />
                        {item.updated_at && (
                          <Text variant="captionRegular">Actualizado: {updatedAtFormatted}</Text>
                        )}

                      </div>
                    </td>
                  </tr>
                )}

              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EstadoObraList;
