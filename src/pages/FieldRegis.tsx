import { styled } from 'styled-components';
import { useState } from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { OpacityPrimaryTextColor, primaryColor } from '../styles/CommonStyle';
import dayjs from 'dayjs';
import { TimePicker, ConfigProvider } from 'antd';

const format = 'HH:mm';



const FieldRegis = () =>{

    return(
            <FieldRegisWrap>
                <RegisTitleWrap>
                    <RegisTitle>상품등록</RegisTitle>
                    <RegisSubTit>
                        <RegisSubTitAcc>*</RegisSubTitAcc>
                        필수입력
                    </RegisSubTit>
                </RegisTitleWrap>
                <RegisSubTit>
                        <RegisSubTitAcc>*</RegisSubTitAcc>
                        썸네일
                        <Addendum>(최대 5개)</Addendum>
                </RegisSubTit>
                <UploadWrap>
                    <UploadInput type='file' id='1'></UploadInput>
                    <UploadInput type='file' id='2'></UploadInput>
                    <UploadInput type='file' id='3'></UploadInput>
                    <UploadInput type='file' id='4'></UploadInput>
                    <UploadInput type='file' id='5'></UploadInput>
                    <UploadInputLabel htmlFor='1'><UploadImg/></UploadInputLabel>
                    <UploadInputLabel htmlFor='2'><UploadImg/></UploadInputLabel>
                    <UploadInputLabel htmlFor='3'><UploadImg/></UploadInputLabel>
                    <UploadInputLabel htmlFor='4'><UploadImg/></UploadInputLabel>
                    <UploadInputLabel htmlFor='5'><UploadImg/></UploadInputLabel>
                </UploadWrap>
                <RegisSubTit $marginTop={'30px'}>
                        <RegisSubTitAcc>*</RegisSubTitAcc>
                        구장 이름
                </RegisSubTit>
                <InputTxt $width={"100%"} $margin={'20px'} placeholder='구장명 입력'></InputTxt>
                <RegisSubTit $marginTop={'30px'}>
                        <RegisSubTitAcc>*</RegisSubTitAcc>
                        주소
                </RegisSubTit >
                <InputTxt $width={"100%"} $margin={'20px'} placeholder='주소 입력'></InputTxt>
                <RegisSubTit $marginTop={'30px'}>
                        <RegisSubTitAcc>*</RegisSubTitAcc>
                        휴뮤일(매주)
                        <Addendum>// 다중선택 가능</Addendum>
                </RegisSubTit>
                <InputCheckWrap $justify={'space-between'}>
                    <InputCheck type='checkbox' id='mon'/>
                    <InputCheckLabel htmlFor='mon'>월요일</InputCheckLabel>
                    <InputCheck type='checkbox' id='tue'/>
                    <InputCheckLabel htmlFor='tue'  >화요일</InputCheckLabel>
                    <InputCheck type='checkbox' id='wed'/>
                    <InputCheckLabel htmlFor='wed'  >수요일</InputCheckLabel>
                    <InputCheck type='checkbox' id='thu'/>
                    <InputCheckLabel htmlFor='thu'  >목요일</InputCheckLabel>
                    <InputCheck type='checkbox' id='fri'/>
                    <InputCheckLabel htmlFor='fri'  >금요일</InputCheckLabel>
                    <InputCheck type='checkbox' id='sat'/>
                    <InputCheckLabel htmlFor='sat'  >토요일</InputCheckLabel>
                    <InputCheck type='checkbox' id='sun'/>
                    <InputCheckLabel htmlFor='sun'  >일요일</InputCheckLabel>
                    <InputCheck type='checkbox' id='none'/>
                    <InputCheckLabel htmlFor='none' >무휴 </InputCheckLabel>
                </InputCheckWrap>
                <InputWrap>
                    <InputInnerWrap>
                        <RegisSubTit $marginRight={"10px"}>
                                <RegisSubTitAcc>*</RegisSubTitAcc>
                                영업시간
                        </RegisSubTit>
                        <ConfigProvider
                        theme={{
                            token: {
                            },
                        }}
                            >
                            <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
                        </ConfigProvider>
                    </InputInnerWrap>
                    <InputInnerWrap>
                        <RegisSubTit $marginRight={"10px"}>
                                <RegisSubTitAcc>*</RegisSubTitAcc>
                                시간 및 금액
                        </RegisSubTit>
                        <InputInnerWrap>
                            <InputTxt  placeholder='원' $placeHolder={'right'} $width={'120px'}></InputTxt>
                            <TimePriceTxt>/</TimePriceTxt>
                            <InputTxt placeholder='시간' $placeHolder={'right'} $width={'120px'}></InputTxt>
                        </InputInnerWrap>
                    </InputInnerWrap>
                </InputWrap>
                <Boundary></Boundary>
                <FieldSubTit>경기장 정보</FieldSubTit>
                <RegisSubTit $marginTop={'30px'}>
                        면적 
                </RegisSubTit>
                <InputTxt $width={"100%"} $margin={'20px'}></InputTxt>
                <RegisSubTit $marginTop={'30px'}>
                        특이사항 
                </RegisSubTit>
                <TextArea></TextArea>
                <RegisSubTit $marginTop={'30px'}>
                        부대시설 
                </RegisSubTit>
                <InputCheckWrap>
                    <InputCheck type='checkbox' id='parking'/>
                    <InputCheckLabel htmlFor='parking'>주차</InputCheckLabel>
                    <InputCheck type='checkbox' id='shower'/>
                    <InputCheckLabel htmlFor='shower'>샤워실</InputCheckLabel>
                    <InputCheck type='checkbox' id='light'/>
                    <InputCheckLabel htmlFor='light'>조명</InputCheckLabel>
                </InputCheckWrap>
                <FieldRegiBtnWrap>
                    <FieldRegiBtn $backgrounColor={primaryColor} $color={'#ffffff'}>등록하기</FieldRegiBtn>
                    <FieldRegiBtn $color={'#464646'}>취소하기</FieldRegiBtn>
                </FieldRegiBtnWrap>
            </FieldRegisWrap>
    );
};

export default FieldRegis;


const FieldRegisWrap = styled.div`
`;
const RegisTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    box-sizing: border-box;
`;
const RegisTitle = styled.p`
    font-size:  1.875rem;
    font-weight: bold;
`;
const RegisSubTit = styled.div<{$marginRight?:string,$marginTop?:string}>`
    font-weight: bold;
    text-align: left;
    margin-right: ${(props)=>props.$marginRight};
    margin-top: ${(props)=>props.$marginTop};
`;
const RegisSubTitAcc = styled.p`
    display: inline;
    vertical-align: middle;
    margin-right: 5px;
    color: red;
`;
const Addendum = styled.p`
    display: inline;
    color: #C2C2C2;
    font-weight: normal;
    margin-left: 5px;
`;

const UploadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UploadInput = styled.input`
    display: none;
`;
const UploadInputLabel = styled.label`
    position: relative;
    width: calc((100% - 80px)/5);
    padding-top: calc((100% - 80px)/5*0.9);
    border: 5px dashed rgba(0,0,0,10%);
    border-radius: 20px;
    box-sizing: border-box;
    background-color: #f1f1f1;
    cursor: pointer;
    &:hover{
        border: 5px dashed ${primaryColor};
        transition: ease-in-out 0.3s;
    }
`;
const UploadImg = styled(BsPlusCircleDotted)`
    font-size: 2.8125rem;
    color: #afafaf;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const InputTxt = styled.input<{$width:string,$margin?:string,$placeHolder?:string}>`
    margin-top: ${(props)=> props.$margin};
    width: ${(props)=> props.$width};
    height: 40px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background-color: #fdfdfd;
    padding: 4px 20px;
    box-sizing: border-box;
    &::placeholder{
        color:#c0c0c0;
        text-align: ${(props)=> props.$placeHolder};
    }
`;

const InputCheckWrap = styled.fieldset<{$justify?:string}>`
    display: flex;
`;
const InputCheck = styled.input`
    display: none;
`;
const InputCheckLabel = styled.label<{$marginRight?:string}>`
    margin-top: 20px;
    margin-right: 10px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background-color: #fdfdfd;
    padding: 4px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${(props)=>props.$marginRight};
    font-weight: bold;
    cursor: pointer;
    ${InputCheck}:checked + & {
        background-color: ${primaryColor}; /* 체크박스가 선택될 때 레이블의 텍스트 색상을 변경 */
        color: #ffffff;
  }
`;

const InputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`;
const InputInnerWrap = styled.div`
    display: flex;
    align-items: center;
`;

const TimePriceTxt = styled.p`
    margin: 0 10px;
    color: #C0C0C0;
`;

const Boundary = styled.div`
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
    margin: 30px 0;
`;
const FieldSubTit = styled.p`
    font-size: 0.875rem;
    color: #7B7B7B;
    text-align: left;
    margin-bottom: 30px;
`;

const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background-color: #fdfdfd;
    padding: 20px 20px;
    box-sizing: border-box;
    margin-top: 20px;
    padding-top: calc(100%*0.3);
`
const FieldRegiBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    text-align: center;
`;
const FieldRegiBtn = styled.button<{$backgrounColor?:string,$color?:string}>`
    width: 80%;
    height: 70px;
    cursor: pointer;
    &:nth-child(2){
        margin-top: 20px;
    }
    border-radius: 20px;
    background-color: ${(props)=>props.$backgrounColor};
    color: ${(props)=>props.$color};
    font-weight: bold;
    font-size: 1.2rem;
`;


