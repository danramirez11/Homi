import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarWidget.css';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget: React.FC = () => {
  const [range, setRange] = useState<Date | [Date, Date]>(new Date());

  return (
    <div className="calendar-widget">
      
    </div>
  );
};

export default CalendarWidget;
