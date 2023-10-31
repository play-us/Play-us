import { styled } from 'styled-components';

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
            </TableHeadRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell>풋살장</TableCell>
                <TableCell>서울특별시 금천로 가산로</TableCell>
                <TableCell>25000원/2시간</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell>풋살장</TableCell>
                <TableCell>서울특별시 금천로 가산로</TableCell>
                <TableCell>25000원/2시간</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#1245</TableCell>
                <TableCell>2023/10/24</TableCell>
                <TableCell>고양 스타필드 풋살장</TableCell>
                <TableCell>풋살장</TableCell>
                <TableCell>서울특별시 금천로 가산로</TableCell>
                <TableCell>25000원/2시간</TableCell>
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
    /* text-align: left; */
    font-size: 0.875rem;
    font-weight: bold;
    color: #d9d9d9;
    padding-bottom: 10px;
    box-sizing: border-box;
    
`;

const TableRow = styled.div`
    display: table-row;
    /* box-shadow: 0.5px 0.5px 0.5px 0.5px #d9d9d9;
    border-radius: 10px; */
`;


const TableCell = styled.div`
    display: table-cell;
    text-align: left;
    padding: 30px 10px;
    font-weight: bold;
    box-sizing: border-box;
    border-top: 3px solid rgba(209, 209, 209,50%);
    border-bottom: 3px solid rgba(209, 209, 209,50%);
    &:nth-of-type(1){
        border-left: 3px solid rgba(209, 209, 209,50%);
        border-radius: 10px 0 0 10px;
    }
    &:nth-last-of-type(1){
        border-right: 3px solid rgba(209, 209, 209,50%);
        border-radius: 0 10px 10px 0;
    }
`;

