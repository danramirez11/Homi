import React from 'react';
import './Reminders.css';
import { Text } from '../../theme/styledcomponents';
import { BsCurrencyDollar, BsBell } from 'react-icons/bs';

const Reminders: React.FC = () => {
  return (
    <div className="reminders">
      <Text variant="subtitle" color="#2C2B2B">Recordatorios</Text>

      <div className="reminder-box yellow">
  <div className="reminder-icon">
    <BsCurrencyDollar size={22} />
  </div>
        <div className="text">
          <Text variant="bodyBold" color="#2C2B2B">Tu próximo pago es:</Text>
          <Text variant="captionRegular" color="#888">• En 24 días</Text>
        </div>
      </div>

      <Text variant="sectionTitle" color="#2C2C2C">Alertas</Text>

      <div className="reminder-box red">
  <div className="reminder-icon">
    <BsBell size={22} />
  </div>
        <div className="text">
          <Text variant="bodyBold" color="#2C2C2C">Tu pago esta atrasado</Text>
          <Text variant="captionRegular" color="#888">• Llevas 4 días en Mora</Text>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
