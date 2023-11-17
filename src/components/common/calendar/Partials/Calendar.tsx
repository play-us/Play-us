import moment from 'moment';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import '../App.css';

interface CalendarProps {
  setDate: any;
  date: any;
  blackoutDates: any;
}
const CalendarComponent = (props: CalendarProps) => {
  const { setDate, date, blackoutDates } = props;
  return (
    <motion.div
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
      className="calendar-container"
    >
      <Calendar
        onChange={setDate}
        value={date}
        locale="ko-KO"
        minDate={new Date()}
        tileDisabled={({ date }) => blackoutDates.includes(date.getDate())}
      />
    </motion.div>
  );
};

export default CalendarComponent;
