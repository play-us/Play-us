import styled from 'styled-components';
import { Avatar, ConfigProvider ,Select,theme} from 'antd';
import { useState, useRef } from 'react';
import penImg from '../assets/images/profilepen.png';
import proImg from '../assets/images/mypageprofile.png';
import JoinInput from './../components/common/join/JoinInput';

const ProfileRetouch = () => {
    const [Image, setImage] = useState<string>(proImg);

    const fileInput = useRef<HTMLInputElement|null>(null);

    const onClickImg = () => {
        console.log(fileInput.current);
        if(fileInput.current){
            fileInput.current.click();
        }
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
                <JoinInput></JoinInput>
            </ProTopinfoWrap>
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
