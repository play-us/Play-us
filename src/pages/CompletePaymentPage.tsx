import { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Button, Typography, Radio, Checkbox, Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useLocation, useNavigate } from 'react-router';
import { insertReservation } from '../service/FieldApi';

const { Text } = Typography;
const CompletePaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [refund, setRefund] = useState<boolean>(false);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '환불 안내',
      children: (
        <p>
          다음의 경우는 환불이 불가합니다. 구장, 날짜, 시간 등을 실수로 잘못
          선택한 경우 부상, 취업 등 개인 사정으로 신청된 매치에 참여하지 못하는
          경우 단체 혹은 지인과의 참가로 매치 취소 혹은 변경을 원하는 경우
          황사/미세먼지로 인해 취소 혹은 변경을 요청하는 경우 단순 변심으로 취소
          혹은 변경을 요청하는 경우 유의사항 무단 불참하거나 매치 시작 90분
          이내에 취소하면 패널티를 받을 수 있습니다. (참여가 어려울 경우, 환불이
          불가능하더라도 원활한 매치 진행을 위해 나의 플랩에서 미리
          취소해주세요.) 변경 정책 변경은 취소와 동일한 환불 규정으로
          적용됩니다. 변경은 상단 환불 정책 기준 100% 환불일 경우에만 가능하며,
          규정 외 요청은 적용이 불가합니다.
        </p>
      ),
    },
  ];

  const onChangeCheckBox = (e: CheckboxChangeEvent) => {
    setRefund(e.target.checked);
  };

  /* 결제완료 */
  const payment = async () => {
    if (!refund) {
      alert('환불 약관을 확인 후 체크박스를 선택해주세요.');
      return;
    }
    const d: any = await insertReservation(
      state.fieldId,
      state.email,
      state.date,
      state.resvStartTime,
      state.resvEndTime,
      state.price,
    );

    if (d.status === 200) {
      alert('결제가 완료되었습니다!');
      navigate('/fieldList');
    }
  };

  return (
    <Wrap>
      <SectionWrap>
        <ResvInfo>
          <div>{moment(state.date).format('YYYY-MM-DD')}</div>
          <div>
            {state.resvStartTime.slice(0, 5)} ~ {state.resvEndTime.slice(0, 5)}
          </div>
          <div>{state.fieldNm}</div>
        </ResvInfo>
        <SectionHeader>결제</SectionHeader>
        <FlexWrap type="secondary">
          이용 금액<UsageAmount>{state.price}원</UsageAmount>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SectionHeader>결제수단</SectionHeader>
        <Radio defaultChecked>카카오페이</Radio>
      </SectionWrap>
      <SectionWrap>
        <Collapse items={items} defaultActiveKey={['1']} />
        <Checkbox onChange={onChangeCheckBox} style={{ marginTop: '10px' }}>
          네, 위 내용을 보고 동의해요.
        </Checkbox>
      </SectionWrap>
      <Button
        type="primary"
        onClick={payment}
        block
        style={{ height: '3rem', fontSize: '1.2rem' }}
      >
        {state.price}원 결제하기
      </Button>
    </Wrap>
  );
};

export default CompletePaymentPage;

const Wrap = styled.div`
  text-align: left;
  background-color: #f2f5f7;
`;

const SectionWrap = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ResvInfo = styled.div`
  padding: 5rem 1rem 1rem 1rem;
  background: url(/image/resvBanner.jpg) no-repeat center center;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  & > div {
    color: #fff;
    font-size: 1.3rem;
    line-height: 1.5rem;

    &:last-child {
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
`;

const SectionHeader = styled.div`
  padding-bottom: 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #979799;
`;

const FlexWrap = styled(Text)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #000 !important;
`;

const UsageAmount = styled(Text)`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Contour = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 1px;
  background-color: rgba(23, 23, 23, 0.08);
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #222;
  padding-right: 4px;
`;

const Hours = styled.span`
  font-size: 16px;
  color: #797979;
`;

const FieldInfo = styled.ul`
  padding-top: 0.4rem;
  & li {
    width: 50%;
    display: inline-flex;
    align-items: center;
    color: #979799;
    text-decoration: line-through;

    & svg {
      padding-right: 8px;
    }
  }
`;

const Contents = styled.pre`
  white-space: pre-line;
  word-break: keep-all;
  font-size: 14px;
  line-height: 22px;
  overflow: auto;
  margin: 10px 0;
`;
