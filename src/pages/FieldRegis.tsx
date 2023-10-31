import { styled } from 'styled-components';
import { useState } from 'react';





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
            </UploadWrap>   
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
const RegisSubTit = styled.div`
    font-weight: bold;
    text-align: left;
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
`;