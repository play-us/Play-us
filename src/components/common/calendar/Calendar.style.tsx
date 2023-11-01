import { styled } from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  primaryColor,
  RedColor,
  OpacityPrimaryBGColor,
  OpacityPrimaryTextColor,
} from '../../../styles/CommonStyle';

export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  margin-bottom: 15px;
  padding: 20px;

  .react-calendar__navigation {
    display: flex;
    height: 24px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 24px;
    background-color: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #e8e8e8;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e8e8e8;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.15em;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.2em 0.5em;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: #797979;
    border-radius: 5px;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: #797979;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${primaryColor};
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${RedColor};
  }
  .react-calendar__tile:hover {
    color: ${primaryColor};
    background-color: ${OpacityPrimaryBGColor};
    border-radius: 7px;
  }

  .react-calendar__tile--active {
    color: #ffffff;
    background-color: ${primaryColor};
    border-radius: 7px;
  }

  .react-calendar__tile--active:hover {
    color: #ffffff;
  }

  .highlight {
    background: #f3a95f;
  }
`;
