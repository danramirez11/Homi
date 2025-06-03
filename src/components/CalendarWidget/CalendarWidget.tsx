import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarWidget.css';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget: React.FC = () => {
  const [range, setRange] = useState<[Date, Date]>([new Date(), new Date()]);

  useEffect(() => {
    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + 4); 

    setRange([today, end]);
  }, []);

  return (
    <div className="calendar-widget">
      <Calendar
        value={range}
        selectRange={false} 
        calendarType="iso8601"
        next2Label={null}
        prev2Label={null}
        locale="es-ES"
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: 'short' }).substring(0, 2)
        }
        tileClassName={({ date }) => {
          if (!range || !Array.isArray(range)) return;

          const [start, end] = range;

          const isSameDay = (d1: Date, d2: Date) =>
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();

          if (isSameDay(date, start)) return 'range-start';
          if (isSameDay(date, end)) return 'range-end';

          if (date > start && date < end) return 'range-between';

          return null;
        }}
      />
    </div>
  );
};

export default CalendarWidget;

