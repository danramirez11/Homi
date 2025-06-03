import React, { useState } from 'react';
import Calendar, { Value } from 'react-calendar';
import './CalendarWidget.css';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget: React.FC = () => {
  const [range, setRange] = useState<Value>(new Date());

  const handleChange = (value: Value, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setRange(value);
  };

  return (
    <div className="calendar-widget">
      <Calendar
        onChange={handleChange}
        value={range}
        selectRange={true}
        calendarType="iso8601"
        next2Label={null}
        prev2Label={null}
        locale="es-ES"
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: 'short' }).substring(0, 2)
        }
      />
    </div>
  );
};

export default CalendarWidget;
