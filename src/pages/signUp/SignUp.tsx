import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Space, Form, Input, Select } from 'antd';
import LabelAndSelect from '../../components/common/LabelAndSelect';

const primaryColor = '#3CE4A8';

type RequiredMark = boolean | 'optional' | 'customize';

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>('optional');
  type Inputs = {
    email: string;
    pw: string;
    pwchk: string;
    name: string;
    phone: number;
    area: string;
  };
  const [inputs, setInputs] = useState<Inputs>({
    email: '',
    pw: '',
    pwchk: '',
    name: '',
    phone: 0,
    area: '',
  });

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    //객체를 새로운 상태로 쓰겠다.
    setInputs(nextInputs);
  };

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onChange = (value: string) => {
    setInputs({ ...inputs, area: value });
  };

  const onSearch = (value: string) => {
    setInputs({ ...inputs, area: value });
  };

  const addUser = () => {
    console.log('회원가입', inputs);
  };

  const AreaOptions = [
    { id: 1, value: '서울시' },
    { id: 2, value: '경기도' },
    { id: 3, value: '부산시' },
    { id: 4, value: '강원도' },
  ];

  return (
    <Wrap>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
      >
        <Form.Item label="이메일" required>
          <Input name="email" onChange={onChangeInput} />
        </Form.Item>
        <div>
          <ItemWrap>
            <Form.Item label="비밀번호" required>
              <Input type="password" name="pw" onChange={onChangeInput} />
            </Form.Item>
            <Form.Item label="비밀번호 확인" required>
              <Input type="password" name="pwchk" onChange={onChangeInput} />
            </Form.Item>
          </ItemWrap>
        </div>
        <div>
          <ItemWrap>
            <Form.Item label="이름" required>
              <Input name="name" onChange={onChangeInput} />
            </Form.Item>
            <LabelAndSelect
              required
              labelName="활동 지역"
              onchange={onChange}
              options={AreaOptions}
            />
          </ItemWrap>
        </div>
        <Form.Item label="휴대폰번호" required>
          <Input name="phone" onChange={onChangeInput} />
        </Form.Item>
        <Button onClick={addUser}>회원가입</Button>
      </Form>
    </Wrap>
  );
};

export default SignUp;

const Wrap = styled.div`
  padding: 8rem;
  & label {
    font-size: 14px;
  }
  & input {
    padding: 0.5rem;
    background-color: #f3f5f7;
  }
`;

const ItemWrap = styled(Space)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  & .ant-space-item {
    width: calc(50% - 0.5rem);
  }
`;

const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: ${primaryColor};
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 4px;
  padding: 0.8rem;
`;
