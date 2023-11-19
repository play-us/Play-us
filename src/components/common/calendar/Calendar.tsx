import './App.css';
import { useEffect, useState } from 'react';
import CalendarComponent from './Partials/Calendar';

interface ICalendarProps {
  setDate: any;
  setMonth: any;
  date: any;
  blackoutDates: any;
}

const CustomCalendar = (props: ICalendarProps) => {
  const { setDate, setMonth, date, blackoutDates } = props;
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CalendarComponent
        setDate={setDate}
        setMonth={setMonth}
        date={date}
        blackoutDates={blackoutDates}
      />
    </div>
  );
};

export default CustomCalendar;
