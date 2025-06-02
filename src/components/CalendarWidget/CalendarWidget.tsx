import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarWidget.css';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());

  return (
    <div className="calendar-widget">
      <Calendar
        onChange={setValue}
        value={value}
        calendarType="ISO 8601"
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
