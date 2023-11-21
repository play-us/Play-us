import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Modal } from 'antd';
import { MouseEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { primaryColor } from '../../styles/CommonStyle';
import * as S from '../common/calendar/Calendar.style';
import CustomCalendar from '../common/calendar/Calendar';
import {
  getReservationImpossibleDate,
  getReservationPossibleTime,
} from '../../service/FieldApi';
interface IModalData {
  fieldName: string;
  useTime: number;
  isModalOpen: boolean;
  confirmLoading: boolean;
  handleOk: MouseEventHandler;
  handleCancel: MouseEventHandler;
  date: string;
  setDate: any;
  resvStartTime: string | null;
  setResvStartTime: any;
  resvEndTime: string | null;
  setResvEndTime: any;
}

const FieldResvModal = ({
  fieldName,
  useTime,
  isModalOpen,
  handleOk,
  handleCancel,
  confirmLoading,
  date,
  setDate,
  resvStartTime,
  setResvStartTime,
  resvEndTime,
  setResvEndTime,
}: IModalData) => {
  const [month, setMonth] = useState<any>(moment(new Date()).format('YYYY-MM'));
  const [searchParams, setSearchParams] = useSearchParams();
  const [blackoutDates, setBlackoutDates] = useState<any>([]);
  const [resvPossTime, setResvPossTime] = useState<any>([]);

  const fieldId = searchParams.get('id');

  useEffect(() => {
    getImpossibleDate();
  }, [searchParams, month]);

  useEffect(() => {
    getPossibleTime();
  }, [date]);

  /* 예약 불가능 일자 조회 */
  async function getImpossibleDate() {
    const res: any = await getReservationImpossibleDate(fieldId, month);
    const blackoutDates = res.data.result.map((row: any) => row.resvDate);

    setBlackoutDates(blackoutDates);
  }

  /* 구장 예약 가능 시간 조회 */
  async function getPossibleTime() {
    const res: any = await getReservationPossibleTime(
      fieldId,
      moment(date).format('YYYY-MM-DD'),
    );
    setResvPossTime(res.data.result);
  }

  const onSelectTime = (resvTime: string) => {
    let selectHour = resvTime.slice(0, 2);
    setResvStartTime(`${selectHour}:00:00`);
    setResvEndTime(`${Number(selectHour) + useTime}:00:00`);
  };

  return (
    <Modal
      title={fieldName}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {confirmLoading ? (
        '결제를 진행중입니다. 잠시만 기다려주세요.'
      ) : (
        <>
          <CustomCalendar
            date={date}
            setDate={setDate}
            setMonth={setMonth}
            blackoutDates={blackoutDates}
          />
          <SelectDay>
            {moment(date).format('YYYY년 MM월 DD일')}&nbsp;
            {resvStartTime !== null && `${resvStartTime}~`}
            {resvEndTime !== null && `${resvEndTime}`}
          </SelectDay>
          <TimeWrap>
            <TimeRange>
              {resvPossTime.map((t: any) => (
                <Item
                  none={t.resvYn}
                  onClick={() => onSelectTime(t.resvTime)}
                  key={t.resvTime}
                >
                  <Timetxt>
                    <span>{t.resvTime.slice(0, 5)}</span>
                  </Timetxt>
                  <TimeBox none={t.resvYn}></TimeBox>
                </Item>
              ))}
            </TimeRange>
          </TimeWrap>
        </>
      )}
    </Modal>
  );
};

export default FieldResvModal;

const SelectDay = styled.div`
  overflow: hidden;
  position: relative;
  display: block;
  padding: 12px 0 9px 20px;
  background-color: #fff;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #ecf0f2;
  color: #000;
  font-weight: 600;
  font-size: 17px;
  box-sizing: border-box;
  text-align: center;
`;
const TimeWrap = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  max-height: 100px;
`;

const TimeRange = styled.ul`
  display: flex;
  position: relative;
  z-index: 10;
  padding-left: 20px;
  justify-content: start;
  align-items: center;
  white-space: nowrap;
  transition: transform 0.5s;
`;

const Item = styled.li<{ none?: string }>`
  position: relative;
  outline: 0;
  flex: none;
  scroll-snap-align: start;

  ${(props: any) =>
    props.none === '0' &&
    css`
      & > span {
        color: #b8b8b8;
      }

      & BoxInnBtm {
        background-color: #bbe0eb;
      }
    `}
`;

const Timetxt = styled.span`
  position: relative;
  display: block;
  margin-left: -17px;
  margin-bottom: 11px;
  padding-top: 25px;
  color: #000;
  font-size: 14px;
  line-height: 20px;
`;

const TimeBox = styled.a<{ none?: boolean }>`
  osition: relative;
  display: block;
  width: 45px;
  height: 30px;
  background-color: #e0fed3;
  border-left: 1px solid;
  border-left-color: #fff;
  cursor: pointer;

  ${(props: any) =>
    props.none === '0'
      ? css`
          background-color: #eaeaea;
        `
      : `&:hover {
    background-color: ${primaryColor};
  }
    `}
`;
