import { Row } from 'antd';
import { useNavigate } from 'react-router';
import KakaoLogin from 'react-kakao-login';
import { useAppDispatch } from '../../stores/Store';
import { getKakaoMemberInfo } from '../../service/UserApi';
import { loginUser } from '../../stores/features/AuthenticationSlice';

const SocialKakao = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const kakaoClientId = String(process.env.REACT_APP_KAKAO_ClientID);

  const kakaoOnSuccess = async (data: any) => {
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    if (idToken) {
      const res: any = await getKakaoMemberInfo(idToken);
      const userData = {
        name: res.data.result[0].name,
        email: res.data.result[0].email,
      };
      dispatch(loginUser(userData));
      navigate('/');
    }
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };

  return (
    <Row style={{}}>
      <KakaoLogin
        style={{
          // maxWidth: 450,
          width: '100%',
          height: '56px',
          backgroundColor: '#FEE500',
          border: 'none',
          borderRadius: '8px',
        }}
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </Row>
  );
};

export default SocialKakao;
