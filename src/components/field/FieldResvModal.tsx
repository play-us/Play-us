import React, { useState } from 'react';
import { Modal, TimePicker } from 'antd';
import { MouseEventHandler } from 'react';
import * as S from '../common/calendar/Calendar.style';

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
  const [today, setToday] = useState<Value>(new Date());

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  const onChangeToday = () => {
    setToday(today);
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
          <S.CalendarBox>
            <S.StyleCalendar
              locale="en"
              onChange={onChangeToday}
              value={today}
            />
          </S.CalendarBox>
          <TimePicker minuteStep={15} secondStep={10} hourStep={1} />
        </>
      )}
    </Modal>
  );
};

export default FieldResvModal;
