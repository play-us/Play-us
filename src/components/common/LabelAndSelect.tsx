import React, { useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';
import {
  OpacityPrimaryTextColor,
  OpacityPrimaryBGColor,
} from '../../styles/CommonStyle';

const LabelAndSelectBox = (props: {
  required?: boolean;
  labelName?: string;
  options: any;
  onchange: any;
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // 셀렉트 옵션 여닫기
  const [isActive, setIsActive] = useState<string>(props.options[0].value); // 옵션값 선택
  const selectRef = useRef<any>(null); // 클릭 영역 구분용 부모 컴포넌트 범위 지정

  /* 셀렉트 옵션 여닫기 */
  const handleVisible = () => setIsOpened((prev) => !prev);

  /* 옵션값 선택 */
  function handleSelectOption(value: string) {
    setIsActive(value);
    setIsOpened(!isOpened);
  }

  /* Ref외부 영역 클릭시 닫기  */
  const handleClickOutSide = (e: MouseEvent) => {
    if (isOpened && !selectRef.current.contains(e.target)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    if (isOpened) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <SelectContainer>
      <LabelWrap>
        <LabelStyle required={props.required ? true : false}>
          {props.labelName}
        </LabelStyle>
      </LabelWrap>
      <SelectBox ref={selectRef}>
        <SelectTriggerBtn onClick={() => handleVisible()} isOpened={isOpened}>
          <SelectText>
            <SelectOptSpan>{isActive}</SelectOptSpan>
          </SelectText>
          <SvgArrow
            isOpened={isOpened}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.707 8.793a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L12 15.086l6.293-6.293a1 1 0 0 1 1.414 0Z"
            ></path>
          </SvgArrow>
        </SelectTriggerBtn>
        {isOpened === true && (
          <SelectWrapper>
            {props.options.map(
              (opt: { value: string; id: React.Key | null | undefined }) => (
                <SelectOption
                  onClick={() => handleSelectOption(opt.value)}
                  isActive={isActive}
                  key={opt.id}
                  value={opt.value}
                >
                  <div>
                    <div>
                      <OptionValueContainer>
                        <OptionValue>{opt.value}</OptionValue>
                      </OptionValueContainer>
                    </div>
                  </div>
                </SelectOption>
              ),
            )}
          </SelectWrapper>
        )}
      </SelectBox>
    </SelectContainer>
  );
};

export default LabelAndSelectBox;

const SelectContainer = styled.div`
  position: relative;
  &::after {
    display: block;
    clear: both;
    content: '';
  }
`;

const LabelWrap = styled.div``;

const Label = styled.label`
  display: block;
  text-align: left;
  word-break: break-word;
`;

const LabelStyle = styled(Label)<{ required: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 32px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;

  ${(props: any) =>
    props.required &&
    css`
      &::before {
        display: inline-block;
        margin-inline-end: 4px;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun, sans-serif;
        line-height: 1;
        content: '*';
      }
    `}
`;

const SelectBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 32px;
`;

const SelectTriggerBtn = styled.button<{ isOpened: boolean }>`
position:relative;
box-sizing: border-box;
margin-bottom: 24px;
color: rgba(0, 0, 0, 0.88);
font-size: 14px;
line-height: 1.5714285714285714;
list-style: none;
font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
position: relative;
display: inline-block;
width: 100%;
min-width: 0;
padding: 0.5rem;
background-color: #f3f5f7;
background-image: none;
border-width: 1px;
border-style: solid;
border-color: #d9d9d9;
border-radius: 6px;
transition: all 0.2s;
  
    &:not(:disabled):focus {
      box-shadow: ${OpacityPrimaryBGColor} 0px 0px 0px 2px, ${OpacityPrimaryTextColor} 0px 0px 0px 1px inset;
      background-color: rgb(247, 247, 248);
  `;

const SelectText = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
`;

const OptionSpanWrap = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SelectOptSpan = styled(OptionSpanWrap)`
  margin: 0px;
  font-style: normal;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.85);
  transition: color 150ms cubic-bezier(0.3, 0, 0, 1) 0ms;
`;

const SvgArrow = styled.svg<{ isOpened: boolean }>`
  position: absolute;
  top: 0.7rem;
  right: 0.5rem;
  flex: 0 0 auto;
  margin: 0px 0px 0px 6px;
  color: rgba(0, 0, 0, 0.6);
  transition: color 150ms cubic-bezier(0.3, 0, 0, 1) 0ms;

  ${(props: any) =>
    props.isOpened &&
    css`
      transform: rotate(180deg);
    `}
`;

const SelectWrapper = styled.div`
  padding: 6px;
  position: absolute;
  z-index: 10;
  top: 0px;
  left: 0px;
  transform: translateX(0px) translateY(42px);
  transition-delay: 0ms;
  transition-timing-function: cubic-bezier(0.3, 0, 0, 1);
  transition-duration: 150ms;
  transition-property: top, opacity;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(255 255 255 / 12%) 0px 0px 2px 0px inset,
    rgb(0 0 0 / 5%) 0px 0px 2px 1px, rgb(0 0 0 / 15%) 0px 4px 12px;
  width: 100%;
  box-sizing: border-box;
`;

const SelectOption = styled.div<{ isActive: string; value: string }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 6px;
  overflow: hidden;
  border-radius: 6px;

  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  transition: background-color 150ms cubic-bezier(0.3, 0, 0, 1) 0ms;

  ${(props: any) =>
    props.isActive === props.value
      ? css`
          color: ${OpacityPrimaryTextColor};
          background-color: ${OpacityPrimaryBGColor};
        `
      : css`
          color: rgba(0, 0, 0, 0.85);

          &:hover {
            background-color: #0000000d;
          }
        `}

  & > div {
    display: grid;
    grid-template-columns: fit-content(100%) minmax(0px, 1fr);
    width: 100%;

    & > div {
      display: flex;
      grid-area: 1 / 2 / auto / auto;
      -webkit-box-align: center;
      align-items: center;
    }
  }
`;

const OptionValueContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionValue = styled.span`
  font-size: 14px;
  line-height: 1.5714285714285714;
  margin: 0px;
  font-style: normal;
  font-weight: normal;
  color: inherit;
  transition: color 150ms cubic-bezier(0.3, 0, 0, 1) 0ms;
`;
