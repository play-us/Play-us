import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, ConfigProvider ,Select,theme} from 'antd';
import { useState, useRef } from 'react';
import penImg from '../assets/images/profilepen.png';
import proImg from '../assets/images/mypageprofile.png';

const provinceData = ['서울', '부산'];

const cityData = {
  서울: ['정릉', '당산', '종로'],
  부산: ['동구', '남구', '해운대'],
};

type CityName = keyof typeof cityData;

const ProfileRetouch = () => {
    const [Image, setImage] = useState<string>(proImg);

    const fileInput = useRef<HTMLInputElement|null>(null);

    const onClickImg = () => {
        console.log(fileInput.current);
        if(fileInput.current){
            fileInput.current.click();
        }
    };

    const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);

    const [secondCity, setSecondCity] = useState(cityData[provinceData[0] as CityName][0]);
    
    const handleProvinceChange = (value: CityName) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
      };
    
    const onSecondCityChange = (value: CityName) => {
        setSecondCity(value);
      };
    return(
        <PrWrap>
            <ProTopinfoWrap>
                <ProImgWrap>
                    <ProImg size={150} src={proImg} onClick={onClickImg}/>
                    <ProPenImg></ProPenImg>
                    <ImgInput type='file' name='profileImg' ref={fileInput}></ImgInput>
                </ProImgWrap>
                <ProIdTxt>potato님 환영해요.</ProIdTxt>
            </ProTopinfoWrap>
            <form>
                <InputWrap>
                    <InputTit>이메일</InputTit>
                    <CommonInput disabled placeholder='potato990124@gmail.com'></CommonInput>
                </InputWrap>
                <InputBox>
                    <InputWrap $width={"49%"}>
                        <InputTit>비밀번호</InputTit>
                        <CommonInput></CommonInput>
                    </InputWrap>
                    <InputWrap $width={"49%"}>
                        <InputTit>비밀번호 확인</InputTit>
                        <CommonInput></CommonInput>
                    </InputWrap>
                </InputBox>
                <InputBox>
                    <InputWrap $width={"49%"}>
                        <InputTit>이름</InputTit>
                        <CommonInput></CommonInput>
                    </InputWrap>
                    <InputWrap $width={"49%"}>
                        <InputTit>휴대폰 번호</InputTit>
                        <CommonInput></CommonInput>
                    </InputWrap>
                </InputBox>
                <InputBox>
                    <ConfigProvider
                        theme={{
                        components: {
                            Select: {
                                controlHeight:60,
                                controlItemBgActive:'#5a5a5a5a',
                                colorPrimaryHover:'#3ce48a',
                            },
                        },
                        }}
                    >
                        <InputWrap $width={"49%"}>
                            <InputTit>지역</InputTit>
                                <Select
                                    defaultValue={"서울"}
                                    onChange={handleProvinceChange}
                                    options={provinceData.map((province) => ({ label: province, value: province }))}
                                />
                        </InputWrap>
                        <InputWrap $width={"49%"}>
                            <Select
                                value={secondCity as CityName}
                                onChange={onSecondCityChange}
                                options={cities.map((city) => ({ label: city, value: city }))}
                            />
                        </InputWrap>
                    </ConfigProvider>
                </InputBox>
                <RetouchBtn>수정하기</RetouchBtn>
            </form>
        </PrWrap>
    )
}

export default ProfileRetouch;

const PrWrap = styled.div`
    padding-top: 100px;
    box-sizing: border-box;
`;

const ProTopinfoWrap = styled.div`
`
const ProImgWrap = styled.div`
    position: relative;
    width: max-content;
    margin: 0 auto;
    border: 1px solid rgba(0,0,0,10%);
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
`
const ProImg = styled(Avatar)`
    
`
const ProPenImg = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    background-image: url(${penImg});
    background-repeat: no-repeat;
    background-size: cover;

`
const ImgInput = styled.input`
    display: none;
`

const ProIdTxt = styled.p`
    font-size:  1.625rem;
    font-weight: bold;
    margin: 30px 0px 40px;
`
const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`
const InputWrap = styled.div<{$width?:string}>`
    width: ${(props)=> props.$width};
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`
const InputTit = styled.div`
    font-weight: bold;
    color: rgb(51, 51, 51);
`
const CommonInput = styled.input`
    width: 100%;
    font-size: 16px;
    min-height: 60px;
    padding: 15px 13px;
    align-items: flex-start;
    border-radius: 5px;
    border: 1px solid rgb(225, 226, 227);
    box-sizing: border-box;
    &:focus{
        outline: 0.5px solid #3ce48a;
    }
`
const RetouchBtn = styled.button`
    width: 100%;
    height: 60px;
    background-color: #3ce48a;
    font-weight: bold;
    font-size: 1rem;
    color: #ffffff;
    border-radius: 30px;
`
