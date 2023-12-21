/* eslint-disable @typescript-eslint/no-unused-vars */

/* 요일 구하는 hook */
const getDayofWeek = (dayNum: number) => {
  let day: string = '';
  switch (dayNum) {
    case 0:
      day = '일요일';
      break;
    case 1:
      day = '월요일';
      break;
    case 2:
      day = '화요일';
      break;
    case 3:
      day = '수요일';
      break;
    case 4:
      day = '목요일';
      break;
    case 5:
      day = '금요일';
      break;
    case 6:
      day = '토요일';
      break;
    default:
      day = '';
      break;
  }
  return day;
};

export default getDayofWeek;
