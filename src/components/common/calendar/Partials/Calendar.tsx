import moment from 'moment';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import '../App.css';
import { useState, useEffect } from 'react';

interface CalendarProps {
  setDate: any;
  setMonth: any;
  date: any;
  blackoutDates: any;
}
const CalendarComponent = (props: CalendarProps) => {
  const { setDate, setMonth, date, blackoutDates } = props;
  //console.log('blackoutDates', blackoutDates);

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
        onActiveStartDateChange={({ activeStartDate }) =>
          setMonth(moment(activeStartDate).format('YYYY-MM'))
        } // 조회할 월 선택
        tileDisabled={({ date }) =>
          blackoutDates.find(
            (x: any) => x === moment(date).format('YYYY-MM-DD'),
          )
        }
      />
    </motion.div>
  );
};

export default CalendarComponent;
