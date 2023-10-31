import {InputWrap,InputBox,InputTit,CommonInput,RetouchBtn} from '../../../styles/common/join/JoinInput';
import { ConfigProvider ,Select} from 'antd';
import { useState} from 'react';
import { primaryColor } from './../../../styles/CommonStyle';

const provinceData = ['서울', '부산'];

const cityData = {
  서울: ['정릉', '당산', '종로'],
  부산: ['동구', '남구', '해운대'],
};

type CityName = keyof typeof cityData;


const JoinInput = () => {
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
                        controlItemBgActive: primaryColor,
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
    );
}


export default JoinInput;