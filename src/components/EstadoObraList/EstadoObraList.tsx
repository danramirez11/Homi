import React from 'react';
import { Text } from '../../theme/styledcomponents';
import './EstadoObraList.css';
import type { EstadoObraListProps } from '../types';
import type { EstadoObraItem } from '../types';




const EstadoObraList: React.FC<EstadoObraListProps> = ({ data }) => {
  const getEstadoClass = (estado: EstadoObraItem['estado']) => {
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
          {data.map((item, index) => (
            <tr key={index}>
            <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.625 4.375C16.625 3.89175 17.0168 3.5 17.5 3.5H21C22.933 3.5 24.5 5.067 24.5 7V10.5C24.5 10.9832 24.1082 11.375 23.625 11.375C23.1418 11.375 22.75 10.9832 22.75 10.5V7C22.75 6.0335 21.9665 5.25 21 5.25H17.5C17.0168 5.25 16.625 4.85825 16.625 4.375ZM11.375 23.625C11.375 24.1082 10.9832 24.5 10.5 24.5H7C5.067 24.5 3.5 22.933 3.5 21V17.5C3.5 17.0168 3.89175 16.625 4.375 16.625C4.85825 16.625 5.25 17.0168 5.25 17.5L5.25 21C5.25 21.9665 6.0335 22.75 7 22.75H10.5C10.9832 22.75 11.375 23.1418 11.375 23.625ZM3.5 10.5C3.5 10.9832 3.89175 11.375 4.375 11.375C4.85825 11.375 5.25 10.9832 5.25 10.5L5.25 7C5.25 6.0335 6.0335 5.25 7 5.25L10.5 5.25C10.9832 5.25 11.375 4.85825 11.375 4.375C11.375 3.89175 10.9832 3.5 10.5 3.5H7C5.067 3.5 3.5 5.067 3.5 7V10.5ZM23.625 16.625C24.1082 16.625 24.5 17.0168 24.5 17.5V21C24.5 22.933 22.933 24.5 21 24.5H17.5C17.0168 24.5 16.625 24.1082 16.625 23.625C16.625 23.1418 17.0168 22.75 17.5 22.75H21C21.9665 22.75 22.75 21.9665 22.75 21V17.5C22.75 17.0168 23.1418 16.625 23.625 16.625ZM14.3094 10.8094C14.1385 10.6385 13.8615 10.6385 13.6906 10.8094L10.7472 13.7528C10.5763 13.9237 10.5763 14.2007 10.7472 14.3715L13.6906 17.315C13.8615 17.4859 14.1385 17.4859 14.3094 17.315L17.2528 14.3715C17.4237 14.2007 17.4237 13.9237 17.2528 13.7528L14.3094 10.8094Z" fill="black" fill-opacity="0.04"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5469 9.57234L18.4904 12.5158C19.3446 13.3701 19.3446 14.7551 18.4904 15.6094L15.5469 18.5529C14.6926 19.4071 13.3076 19.4071 12.4533 18.5529L9.50984 15.6094C8.65557 14.7551 8.65557 13.3701 9.50984 12.5158L12.4533 9.57234C13.3076 8.71807 14.6926 8.71807 15.5469 9.57234ZM14.3095 10.8098C14.1386 10.6389 13.8616 10.6389 13.6907 10.8098L10.7473 13.7532C10.5764 13.9241 10.5764 14.2011 10.7473 14.372L13.6907 17.3154C13.8616 17.4863 14.1386 17.4863 14.3095 17.3154L17.2529 14.372C17.4238 14.2011 17.4238 13.9241 17.2529 13.7532L14.3095 10.8098Z" fill="black"/>
            </svg>
            <td><Text as="span" variant="captionRegular">{item.proyecto}</Text></td>
            </div>
            </td>
            <td><Text as="span" variant="captionRegular">{item.fecha}</Text></td>
            <td><Text as="span" variant="captionRegular">{item.espacio}</Text></td>
            <td>
            <Text as="span" variant="captionRegular" className={`estado-text ${getEstadoClass(item.estado)}`}>
            {item.estado}
            </Text>

            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstadoObraList;
