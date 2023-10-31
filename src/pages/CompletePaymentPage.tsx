import React from 'react';
import styled from 'styled-components';
import { Button, Typography, Radio, Checkbox, Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { OpacityPrimaryTextColor } from '../styles/CommonStyle';

const { Title, Text } = Typography;
const CompletePaymentPage = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '이것만은 꼭!',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: '부상과 보험',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: '환불 안내',
      children: <p>{text}</p>,
    },
  ];

  const onChangeCollapse = (key: string | string[]) => {
    console.log(key);
  };

  const onChangeCheckBox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  /* 결제완료 */
  const payment = () => {
    alert('결제가 완료되었습니다!');
  };

  return (
    <Wrap>
      <SectionWrap>
        <ResvInfo>
          <div>9월 9일 수요일</div>
          <div>06:00~08:00</div>
          <div>노원 R 실내 풋살장 1구장</div>
        </ResvInfo>
        <SectionHeader>결제</SectionHeader>
        <FlexWrap type="secondary">
          이용 금액<UsageAmount>35,000원</UsageAmount>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SectionHeader>결제수단</SectionHeader>
        <Radio>카카오페이</Radio>
      </SectionWrap>
      <SectionWrap>
        <Collapse
          items={items}
          defaultActiveKey={['1']}
          onChange={onChangeCollapse}
        />
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
        35,000원 결제하기
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
