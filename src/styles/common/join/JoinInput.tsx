import styled from 'styled-components';


export const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`
export const InputWrap = styled.div<{$width?:string}>`
    width: ${(props)=> props.$width};
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`
export const InputTit = styled.div`
    font-weight: bold;
    color: rgb(51, 51, 51);
`
export const CommonInput = styled.input`
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
export const RetouchBtn = styled.button`
    width: 100%;
    height: 60px;
    background-color: #3ce48a;
    font-weight: bold;
    font-size: 1rem;
    color: #ffffff;
    border-radius: 30px;
`