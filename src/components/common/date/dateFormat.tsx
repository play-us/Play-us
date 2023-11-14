import dayjs from 'dayjs';

const ConvertDate8 = (date: string): string => {
  if (dayjs(date).isValid() == false) return '';
  const s = dayjs(date).format('YYYY-MM-DD hh:mm:ss');

  return s;
};
export default ConvertDate8;
