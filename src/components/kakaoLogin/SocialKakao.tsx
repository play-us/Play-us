import KakaoLogin from 'react-kakao-login';

const SocialKakao = () => {
  const kakaoClientId = '282635c779bca55f463be6f6ca7553aa';
  const kakaoOnSuccess = async (data: any) => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    console.log(idToken);
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

export default SocialKakao;
