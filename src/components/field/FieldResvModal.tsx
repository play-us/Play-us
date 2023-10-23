import React, { useState } from 'react';
import moment from 'moment';
import { Modal } from 'antd';
import { MouseEventHandler } from 'react';
import { css, styled } from 'styled-components';
import { primaryColor } from '../../styles/CommonStyle';
import * as S from '../common/calendar/Calendar.style';
import CustomCalendar from '../common/calendar/Calendar';

interface IModalData {
  fieldName: string;
  isModalOpen: boolean;
  confirmLoading: boolean;
  handleOk: MouseEventHandler;
  handleCancel: MouseEventHandler;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const FieldResvModal = ({
  fieldName,
  isModalOpen,
  handleOk,
  handleCancel,
  confirmLoading,
}: IModalData) => {
  const [date, setDate] = useState<any>(new Date());
  const [selectRange, setSelectRange] = useState<boolean>(false);

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  /* const onChange = () => {
    setToday(today);
  }; */

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
            selectRange={selectRange}
            setSelectRange={setSelectRange}
          />
          {/*  <S.CalendarBox>
            <S.StyleCalendar
              date={date}
              setDate={setDate}
              selectRange={selectRange}
              setSelectRange={setSelectRange}
            />
          </S.CalendarBox> */}
          {/* <TimePicker minuteStep={15} secondStep={10} hourStep={1} /> */}
          <SelectDay>10. 17(화)</SelectDay>
          <TimeRange>
            <Item>
              <Timetxt>
                <span>17:00</span>
              </Timetxt>
              <TimeBox></TimeBox>
            </Item>
            <Item>
              <Timetxt>
                <span>18:00</span>
              </Timetxt>
              <TimeBox></TimeBox>
            </Item>
            <Item>
              <Timetxt>
                <span>19:00</span>
              </Timetxt>
              <TimeBox></TimeBox>
            </Item>
            <Item none>
              <Timetxt>
                <span>20:00</span>
              </Timetxt>
              <TimeBox none></TimeBox>
            </Item>
            <Item>
              <Timetxt>
                <span>21:00</span>
              </Timetxt>
              <TimeBox></TimeBox>
            </Item>
            <Item>
              <Timetxt>
                <span>22:00</span>
              </Timetxt>
              <TimeBox></TimeBox>
            </Item>
            <Item>
              <Timetxt>
                <span>23:00</span>
              </Timetxt>
              <TimeBox></TimeBox>
            </Item>
          </TimeRange>
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
`;

const TimeRange = styled.ul`
  transform: translateX(-0px);
  transition: transform 0.2s ease-out, opacity 0.3s ease-out;
  margin: 0 auto;
  width: fit-content;
`;

const Item = styled.li<{ none?: boolean }>`
  position: relative;
  display: inline-block;
  outline: 0;

  ${(props: any) =>
    props.none &&
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
    props.none
      ? css`
          background-color: #eaeaea;
        `
      : `&:hover {
    background-color: ${primaryColor};
  }
    `}
`;
