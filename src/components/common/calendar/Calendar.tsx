import './App.css';
import CalendarComponent from './Partials/Calendar';

interface ICalendarProps {
  setDate: any;
  date: any;
  blackoutDates: any;
}

const CustomCalendar = (props: ICalendarProps) => {
  const { setDate, date, blackoutDates } = props;
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <CalendarComponent
        setDate={setDate}
        date={date}
        blackoutDates={blackoutDates}
      />
    </div>
  );
};

export default CustomCalendar;
