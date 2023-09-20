import { User } from 'lucide-react';
import React, { ReactEventHandler, useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';

interface Props {
  placeholder?: string;
  options: any;
  onchange: any;
}

const LabelAndSelectBox = (props: {
  placeholder?: string;
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
        <LabelStyle>{props.placeholder}</LabelStyle>
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

const LabelWrap = styled.div`
  padding: 0px 2px;
  margin-bottom: 4px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  word-break: break-word;
`;

const LabelStyle = styled(Label)`
  font-size: 1.3rem;
  line-height: 1.8rem;
  margin: 0px;
  font-style: normal;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  transition: color 150ms cubic-bezier(0.3, 0, 0, 1) 0ms;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const SelectTriggerBtn = styled.button<{ isOpened: boolean }>`
    all: unset;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 36px;
    cursor: pointer;
    user-select: none;
    background-color: rgb(252, 252, 252);
    color: rgba(0, 0, 0, 0.85);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px,
      rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    transition-delay: 0ms;
    transition-timing-function: cubic-bezier(0.3, 0, 0, 1);
    transition-duration: 150ms;
    transition-property: background-color, box-shadow;
    padding: 8px 12px;
    overflow: hidden;
    border-radius: 8px;
    margin: 0px;
    font: inherit;
  
    &:not(:disabled):focus {
      box-shadow: rgb(94 86 240 / 30%) 0px 0px 0px 3px, rgb(94 86 240) 0px 0px 0px 1px inset;
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
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin: 0px;
  font-style: normal;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.85);
  transition: color 150ms cubic-bezier(0.3, 0, 0, 1) 0ms;
`;

const SvgArrow = styled.svg<{ isOpened: boolean }>`
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
  min-width: 200px;
  min-height: 42px;
  max-height: 640px;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(255 255 255 / 12%) 0px 0px 2px 0px inset,
    rgb(0 0 0 / 5%) 0px 0px 2px 1px, rgb(0 0 0 / 15%) 0px 4px 12px;
  width: 100%;
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
          color: rgb(94, 86, 240);
          background-color: rgba(94, 86, 240, 0.1);
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
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin: 0px;
  font-style: normal;
  font-weight: normal;
  color: inherit;
  transition: color 150ms cubic-bezier(0.3, 0, 0, 1) 0ms;
`;
