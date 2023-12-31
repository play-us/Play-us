import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  InputWrap,
  InputBox,
  InputTit,
  CommonInput,
  SelectBox,
  Select,
  Dropdown,
  ErrorMsg,
  SubmitBtn,
} from '../../../styles/common/join/JoinInput';
import { IAddrType } from '../../../utils/Common';
import { getMainData } from '../../../service/Common';

interface IFormInput {
  password: string;
  passwordCheck: string;
  userNm: string;
  phone: string;
  sido: string | null;
  sigungu: string | null;
}

const JoinInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const [city, setCity] = useState<IAddrType[]>([]); // 공통 시도 리스트
  const [area, setArea] = useState<IAddrType[]>([]); // 공통 시군구 리스트
  const [nowArea, setNowArea] = useState<IAddrType[]>([]); // 선택한 시도에 해당하는 시군구 리스트
  const [sido, setSido] = useState<string>('');

  useEffect(() => {
    getDataArea();
  }, []);

  /* 지역 데이터 조회 */
  async function getDataArea() {
    const res: any = await getMainData(null, null, null, null, '0', 1, 20);
    setCity(res.data.result.cityList); // 시도 리스트
    setArea(res.data.result.areaList); // 시군구 리스트
  }

  /* 시도 선택 시 시군구 리스트 업데이트 */
  useEffect(() => {
    const newAreaList = area.filter((a) => a.rel01Data === sido);
    setNowArea(newAreaList);
  }, [sido]);

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrap>
        <InputTit>이메일</InputTit>
        <CommonInput
          disabled
          placeholder="potato990124@gmail.com"
        ></CommonInput>
      </InputWrap>
      <InputBox>
        <InputWrap $width={'49%'}>
          <InputTit>비밀번호</InputTit>
          <input
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
            type="password"
            placeholder="8자리 이상 20자리 이하"
          />
          {errors?.password?.type === 'required' && (
            <ErrorMsg>비밀번호를 입력해주세요.</ErrorMsg>
          )}
          {errors?.password?.type === 'minLength' && (
            <ErrorMsg>비밀번호는 최소 8자 이상 입력해야 합니다.</ErrorMsg>
          )}
          {errors?.password?.type === 'maxLength' && (
            <ErrorMsg>비밀번호는 최대 20자까지 입력할 수 있습니다.</ErrorMsg>
          )}
        </InputWrap>
        <InputWrap $width={'49%'}>
          <InputTit>비밀번호 확인</InputTit>
          <input
            {...register('passwordCheck', {
              required: true,
              minLength: 8,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="password"
            placeholder="8자리 이상 20자리 이하"
          />
          {errors?.passwordCheck?.type === 'required' && (
            <ErrorMsg>비밀번호 확인을 입력해주세요.</ErrorMsg>
          )}
          {errors?.passwordCheck?.type === 'minLength' && (
            <ErrorMsg>비밀번호는 최소 8자 이상 입력해야 합니다.</ErrorMsg>
          )}
          {errors?.passwordCheck?.type === 'maxLength' && (
            <ErrorMsg>비밀번호는 최대 20자까지 입력할 수 있습니다.</ErrorMsg>
          )}
          {watch().password !== watch().passwordCheck && (
            <ErrorMsg>
              비밀번호와 비밀번호 확인란에 입력하신 내용이 일치하지 않습니다.
            </ErrorMsg>
          )}
        </InputWrap>
      </InputBox>
      <InputBox>
        <InputWrap $width={'49%'}>
          <InputTit>이름</InputTit>
          <input
            {...register('userNm', {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="이름을 입력해주세요."
          />
          {errors?.userNm?.type === 'required' && (
            <ErrorMsg>이름을 입력해주세요.</ErrorMsg>
          )}
          {errors?.userNm?.type === 'maxLength' && (
            <ErrorMsg>이름은 최대 20자까지 입력할 수 있습니다.</ErrorMsg>
          )}
          {errors?.userNm?.type === 'pattern' && (
            <ErrorMsg>한글, 영어 등 글자만 입력해주세요.</ErrorMsg>
          )}
        </InputWrap>
        <InputWrap $width={'49%'}>
          <InputTit>휴대폰 번호</InputTit>
          <input
            {...register('phone', {
              required: true,
              pattern: /^[0-9]+$/,
            })}
            placeholder="'-'없이 숫자만 입력해주세요."
          />
          {errors?.phone?.type === 'required' && (
            <ErrorMsg>휴대폰번호를 입력해주세요.</ErrorMsg>
          )}
          {errors?.phone?.type === 'pattern' && (
            <ErrorMsg>숫자만 입력해주세요.</ErrorMsg>
          )}
        </InputWrap>
      </InputBox>
      <InputBox>
        <InputWrap $width={'49%'}>
          <InputTit>시도</InputTit>
          <SelectBox>
            <Select
              {...register('sido', { required: true })}
              onChange={(e) => setSido(e.target.value)}
            >
              <option selected>시도 전체</option>
              {city.map((c) => (
                <option value={c.syscdCd} key={c.syscdCd}>
                  {c.syscdNm}
                </option>
              ))}
            </Select>
            <Dropdown>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </Dropdown>
          </SelectBox>
        </InputWrap>
        <InputWrap $width={'49%'}>
          <InputTit>시군구</InputTit>
          <SelectBox>
            <Select {...register('sigungu', { required: true })}>
              <option selected>시군구 전체</option>
              {nowArea.map((a) => (
                <option value={a.syscdCd} key={a.syscdCd}>
                  {a.syscdNm}
                </option>
              ))}
            </Select>
            <Dropdown>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </Dropdown>
          </SelectBox>
        </InputWrap>
      </InputBox>
      <SubmitBtn type="submit" value="프로필 수정" />
    </form>
  );
};

export default JoinInput;
