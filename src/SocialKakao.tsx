
import axios from "axios";
import KakaoLogin from "react-kakao-login";

const SocialKakao =()=>{
    const kakaoClientId = '378f02b821a4e39f2f42b78d5dfdc2f8'
    const kakaoOnSuccess = async (data: any)=>{
        const token = data.response.access_token  // 엑세스 토큰 백엔드로 전달
        const userData = await getKaKaoUserData(token);
        console.log(userData);
        
    }
    const kakaoOnFailure = (error:any) => {
        console.log(error);
    }; 

    const getKaKaoUserData = async (token:string) => {
        const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })
        
        return await kakaoUser.data
    }
    return(
        <>
          <KakaoLogin
              token={kakaoClientId}
              onSuccess={kakaoOnSuccess}
              onFail={kakaoOnFailure}
          />
        </>
    )
}

export default SocialKakao