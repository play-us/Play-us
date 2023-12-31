import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Col, ConfigProvider, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import SocialKakao from '../../kakaoLogin/SocialKakao';
import { getMember } from '../../../service/UserApi';
import { useAppDispatch } from '../../../stores/Store';
import { authenticateUser } from '../../../stores/features/AuthenticationSlice';

export function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleIdPwdChangeOnClick = () => {
    return;
  };

  const [formState, setFormState] = useState<{
    email: string;
    password: string;
    remember: boolean;
  }>({
    email: '',
    password: '',
    remember: false,
  });

  const [form] = Form.useForm();

  const handleChange = (values: any) => {
    setFormState({
      email: Object.keys(values).includes('email')
        ? values.id
        : formState.email,
      password: Object.keys(values).includes('password')
        ? values.password
        : formState.password,
      remember: Object.keys(values).includes('remember')
        ? values.remember
        : formState.remember,
    });
    // setFormState((prev) => ({...formState, values}));
    // console.log(values);
    // console.log(formState);
    //    setFormState((prev) => ({...prev, [name]: value}));
  };

  // const useEffectOnMount = (effect : React.EffectCallback) => {
  //   // eslint-disable-next-line
  //   useEffect(effect, []);
  // }

  // useEffectOnMount(() => {
  //   // todo: get user id and pw from local storage
  // });

  const onFinish = async (formResult: { email: string; password: string }) => {
    dispatch(authenticateUser(formResult.email, formResult.password));
    console.log(formResult.email, formResult.password);

    // formResult.password = passwordEncrypt(formResult.password);

    // try {
    //   const loginResponse = await login({
    //     id: formResult.id,
    //     password: formResult.password,
    //   } as LoginRequest).unwrap();
    //   if (
    //     loginResponse.Result === LoginResponseErrorType.EXPIRED_PASSWORD ||
    //     loginResponse.Result ===
    //       LoginResponseErrorType.MULTIPLE_PASSWORD_FAILURE ||
    //     loginResponse.Result === LoginResponseErrorType.NO_USER_OR_NOT_VAILD_PW
    //   ) {
    //     // 서버 오류의 경우
    //     console.log('메세지 출력, 서버에서 온 에러');
    //   } else {
    //     // 로그인 성공 시, 내 정보 가져오기 수행
    //     console.log(loginResponse);

    //     const result = await getMyInfo(formResult.id).unwrap();

    //     if (result.length > 0) {
    //       navigate('/main');
    //     }
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Wrapper>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              controlHeight: 55,
              fontSize: 16,
            },
            Input: {
              controlHeight: 55,
              fontSize: 16,
            },
          },
        }}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          onValuesChange={handleChange}
          style={{ margin: '10%' }}
        >
          <Form.Item name="email" required={true}>
            <Input
              prefix={<UserOutlined />}
              placeholder="아이디 또는 이메일"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item name="password" required={true}>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="비밀번호"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            style={{
              maxHeight: '1px',
              display: 'flex',
              alignItems: 'center',
            }}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>아이디 저장</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              로그인
            </Button>
          </Form.Item>
          <Form.Item
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Button
              type="link"
              htmlType="button"
              onClick={handleIdPwdChangeOnClick}
            >
              아이디/비밀번호 찾기
            </Button>
            <Button
              type="link"
              htmlType="button"
              onClick={handleIdPwdChangeOnClick}
            >
              회원가입
            </Button>
          </Form.Item>
          <Form.Item>
            <SocialKakao />
          </Form.Item>
        </Form>
      </ConfigProvider>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  width: 100%;

  /* height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
`;
