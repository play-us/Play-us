import { Button, Col, Form, Input, Row, Select } from 'antd';
import { LoginForm } from '../components/common/login/LoginForm';
import { LoginLogo } from '../components/common/login/LoginLogo';
import { useState } from 'react';
import axios from 'axios';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\d{11}$/;
const { Option } = Select;
const urlGetCommuDetail = 'http://localhost:8080/login/insertMember';
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [areaType, setAreaType] = useState<string>('전체');

  const handleSelectAreaChange = (type: any) => {
    setAreaType(type);
  };

  const onFinish = (values: any) => {
    const data = {
      email: values.email,
      name: values.name,
      password: values.password,
      phone: values.phoneNumber,
      area: values.selectArea,
    };
    //회원가입
    axios.post(urlGetCommuDetail, data).then((response) => {
      if (response.status === 200) {
        alert('회원가입 축하드려욧!🥳');
      }
    });
  };

  return (
    <Row>
      <Col span={24}>
        <Form
          style={{ maxWidth: 820 }}
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                hasFeedback
                label="이메일"
                name="email"
                rules={[
                  {
                    pattern: emailRegex,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                hasFeedback
                label="비밀번호"
                name="password"
                rules={[
                  { required: true, message: '비밀번호를 입력해주세요!' },
                ]}
              >
                <Input.Password
                  placeholder="비밀번호"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="비밀번호 확인"
                name="passwordCheck"
                dependencies={['password']}
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('비밀번호가 일치하지 않습니다.'),
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="비밀번호 확인" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                hasFeedback
                label="이름"
                name="name"
                rules={[{ required: true, message: '이름을 입력해주세요!' }]}
              >
                <Input placeholder="이름" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="지역" name="selectArea">
                <Select
                  value={areaType}
                  onChange={handleSelectAreaChange}
                  style={{ width: '100%' }}
                >
                  <Option value={0}>선택</Option>
                  <Option value={1}>서울</Option>
                  <Option value={2}>제주</Option>
                  <Option value={3}>대구</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Col span={24}>
            <Form.Item
              hasFeedback
              label="휴대폰 번호"
              name="phoneNumber"
              rules={[
                {
                  pattern: phoneRegex,
                  message: '유효하지 않은 휴대폰 번호입니다.',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            회원가입
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
