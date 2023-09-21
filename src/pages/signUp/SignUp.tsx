import React, { useState } from 'react';
import Axios from 'axios';
import { styled } from 'styled-components';
import { Space, Form, Input, Modal } from 'antd';
import LabelAndSelect from '../../components/common/LabelAndSelect';
import { primaryColor } from '../../styles/CommonStyle';
import AxiosMockAdapter from 'axios-mock-adapter';
import { useNavigate } from 'react-router-dom';

type RequiredMark = boolean | 'optional' | 'customize';

interface IUserInfo {
  email: string;
  password: string;
  passwordChk: string;
  name: string;
  phone: number;
  area: string;
}

const SignUp = () => {
  const [form] = Form.useForm();
  const mock = new AxiosMockAdapter(Axios);
  const navigate = useNavigate();

  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>('optional');

  const [inputs, setInputs] = useState<IUserInfo>({
    email: '',
    password: '',
    passwordChk: '',
    name: '',
    phone: 0,
    area: '서울시',
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

  /* 회원가입 */
  const addUser = () => {
    if (!inputs.email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!inputs.password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (!inputs.passwordChk) {
      alert('비밀번호 확인란을 입력해주세요.');
      return;
    }
    if (inputs.password !== inputs.passwordChk) {
      alert('비밀번호와 비밀번호 확인란이 일치하지 않습니다.');
      return;
    }
    if (!inputs.name) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!inputs.phone) {
      alert('휴대폰번호를 입력해주세요.');
      return;
    }
    mock.onPost('/json/user.json', inputs).reply(204);
    Modal.info({
      title: '회원가입이 완료되었습니다.',
      content: (
        <div>
          <p>Play Us에 가입하신 것을 환영합니다.</p>
          <p>로그인하여 Plqy Us를 즐겨보세요.</p>
        </div>
      ),
      onOk() {
        navigate('/signIn');
      },
    });
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
              <Input type="password" name="password" onChange={onChangeInput} />
            </Form.Item>
            <Form.Item label="비밀번호 확인" required>
              <Input
                type="password"
                name="passwordChk"
                onChange={onChangeInput}
              />
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
