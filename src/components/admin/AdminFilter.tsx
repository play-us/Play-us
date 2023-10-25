import { styled } from 'styled-components';
import { Select} from 'antd';
import React, { useState} from 'react';
import { type } from 'os';

const provinceData = ['서울', '부산'];

const cityData = {
  서울: ['정릉', '당산', '종로'],
  부산: ['동구', '남구', '해운대'],
};

type CityName = keyof typeof cityData;

const AdminFilter = () => {
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
        <FilterWrap>
            <ListCount>1,824개의 구장이 있습니다</ListCount>
            <FilterInnerWrap>
                <FilterLeftWrap>
                    <FilterTit>지역</FilterTit>
                    <SelectBox
                        defaultValue={"서울"}
                        bordered = {false}
                        style={{ width: 100  }}
                        onChange={handleProvinceChange}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                    />
                    <SelectBox
                        style={{ width: 100 }}
                        bordered = {false}
                        value={secondCity as CityName}
                        onChange={onSecondCityChange}
                        options={cities.map((city) => ({ label: city, value: city }))}
                    />
                    <FilterTit>구장유형</FilterTit>
                    <SelectBox
                        defaultValue="축구장"
                        style={{ width: 100 }}
                        bordered={false}
                        options={[
                            { value: '축구장', label: '축구장' },
                            { value: '농구장', label: '농구장' },
                            { value: '풋살장', label: '풋살장' },
                        ]}
                    />
                </FilterLeftWrap>
                <FieldAddBtn>구장 등록</FieldAddBtn>
            </FilterInnerWrap>
        </FilterWrap>
    );
}

interface SelectProps  {
    onChange?:
    | string
    | ((e:CityName) => void) 
    | null
}

const FilterWrap = styled.div`
    text-align: left;
    padding: 50px 0;
`

const ListCount = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    color: #918989;
    margin-bottom: 25px;
    box-sizing: border-box;
`
const FilterInnerWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

const FilterLeftWrap = styled.div`
    display: flex;
    align-items: center;
`

const FilterTit = styled.p`
    font-size: 0.875rem;
    font-weight: bold;
    color: #d9d9d9;
`
const SelectBox =styled(Select)<SelectProps>`
    text-align: center;
`

const FieldAddBtn = styled.button`
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #3CE4A8;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
`


export default AdminFilter;