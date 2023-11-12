import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Space, Select, Input, Button } from 'antd';

interface IFieldTypeData {
  area: string;
  fieldType: string;
  std: string;
  end: string;
  keyword: string;
}

const FieldSearchbar = () => {
  const navigate = useNavigate();
  const [schCondition, setSchCondition] = useState<IFieldTypeData>({
    area: '',
    fieldType: '',
    std: '',
    end: '',
    keyword: '',
  });

  /* 지역 리스트 */
  const areas = [
    { value: '', label: '지역 전체' },
    { value: '서울', label: '서울시' },
    { value: '부산', label: '부산시' },
  ];

  /* 구장유형 리스트 */
  const fieldTypeList = [
    { value: '', label: '구장유형 전체' },
    { value: 'f', label: '풋살장' },
    { value: 's', label: '축구장' },
  ];

  /* 구장유형 선택 */
  const handleChangeArea = (value: string) => {
    setSchCondition({ ...schCondition, area: value });
  };

  /* 구장유형 선택 */
  const handleChangeFieldType = (value: string) => {
    setSchCondition({ ...schCondition, fieldType: value });
  };

  /* 검색어 입력 */
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchCondition({ ...schCondition, keyword: e.target.value });
  };

  /* 검색 submit */
  const handleSearch = () => {
    navigate('/fieldList', {
      state: schCondition,
    });
  };

  return (
    <SpaceWrap>
      <Select
        defaultValue={areas[0].label}
        style={{ width: 120 }}
        onChange={(e) => handleChangeArea(e)}
        options={areas}
      />
      <Select
        defaultValue={fieldTypeList[0].label}
        style={{ width: 120 }}
        onChange={(e) => handleChangeFieldType(e)}
        options={fieldTypeList}
      />
      <Space.Compact block>
        <Input
          placeholder="구장이름으로 찾기"
          onChange={(e) => handleChangeKeyword(e)}
        />
        <Button type="primary" onClick={handleSearch}>
          검색
        </Button>
      </Space.Compact>
    </SpaceWrap>
  );
};

export default FieldSearchbar;

const SpaceWrap = styled(Space)`
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;
