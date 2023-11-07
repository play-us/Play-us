import { Row } from 'antd';
import KakaoLogin from 'react-kakao-login';

const SocialKakao = () => {
  const kakaoClientId = String(process.env.REACT_APP_KAKAO_ClientID);
  console.log(kakaoClientId);

  const kakaoOnSuccess = async (data: any) => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    console.log(idToken);
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
