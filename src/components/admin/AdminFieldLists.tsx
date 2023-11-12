import { styled } from 'styled-components';
import { OpacityPrimaryTextColor, primaryColor } from './../../styles/CommonStyle';

const comDatas = [1,2,3,4,5,6,7,8,9]; //임시 데이터 배열

const AdminDetail = () => {
    return(
        <FieldListWrap>
            <TableHeadRow>
                <TableHeadCell>구장 ID</TableHeadCell>
                <TableHeadCell>등록일</TableHeadCell>
                <TableHeadCell>구장명</TableHeadCell>
                <TableHeadCell>구장 종류</TableHeadCell>
                <TableHeadCell>위치</TableHeadCell>
                <TableHeadCell>가격</TableHeadCell>
                <TableHeadCell></TableHeadCell>
            </TableHeadRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell><TableCellBox>풋살장</TableCellBox></TableCell>
                <TableCell><TableCellBox>서울특별시 금천로 가산로</TableCellBox></TableCell>
                <TableCell>25000원/2시간</TableCell>
                <TableCell><CheckBox type='radio' name='fieldList'/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell><TableCellBox>풋살장</TableCellBox></TableCell>
                <TableCell><TableCellBox>서울특별시 금천로 가산로</TableCellBox></TableCell>
                <TableCell>25000원/2시간</TableCell>
                <TableCell><CheckBox type='radio' name='fieldList'/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell><TableCellBox>풋살장</TableCellBox></TableCell>
                <TableCell><TableCellBox>서울특별시 금천로 가산로</TableCellBox></TableCell>
                <TableCell>25000원/2시간</TableCell>
                <TableCell><CheckBox type='radio' name='fieldList'/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell><TableCellBox>풋살장</TableCellBox></TableCell>
                <TableCell><TableCellBox>서울특별시 금천로 가산로</TableCellBox></TableCell>
                <TableCell>25000원/2시간</TableCell>
                <TableCell><CheckBox type='radio' name='fieldList'/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell><TableCellBox>풋살장</TableCellBox></TableCell>
                <TableCell><TableCellBox>서울특별시 금천로 가산로</TableCellBox></TableCell>
                <TableCell>25000원/2시간</TableCell>
                <TableCell><CheckBox type='radio' name='fieldList'/></TableCell>
            </TableRow>
        </FieldListWrap>
    )
}


export default AdminDetail;

const FieldListWrap = styled.div`
    display: table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;  
`;

const TableHeadRow = styled.div`
    display: table-row;
`;


const TableHeadCell = styled.div`
    display: table-cell;
    font-size: 0.875rem;
    font-weight: bold;
    color: #d9d9d9;
    padding-bottom: 10px;
    box-sizing: border-box;
    
`;

const TableRow = styled.div`
    display: table-row;
    color: #464646;
    /* box-shadow: 0.5px 0.5px 0.5px 0.5px #d9d9d9;
    border-radius: 10px; */
`;


const TableCell = styled.div`
    display: table-cell;
    padding: 30px 10px;
    font-weight: bold;
    box-sizing: border-box;
    border-top: 3px solid rgba(209, 209, 209,50%);
    border-bottom: 3px solid rgba(209, 209, 209,50%);
    &:nth-of-type(1){
        border-left: 3px solid rgba(209, 209, 209,50%);
        border-radius: 10px 0 0 10px;
        color: ${primaryColor};
    }
    &:nth-last-of-type(1){
        border-right: 3px solid rgba(209, 209, 209,50%);
        border-radius: 0 10px 10px 0;
    }
`;

const TableCellBox = styled.p`
    padding: 3px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: antiquewhite;
`


const CheckBox = styled.input`
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;
    vertical-align:middle;
    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${primaryColor};
  }
`