import { styled } from 'styled-components';
import { Avatar, ConfigProvider ,Select,theme} from 'antd';

const AdminFilter = () => {
    return(
        <FilterWrap>
            <ListCount>1824개의 구장이 있습니다</ListCount>
            <></>
        </FilterWrap>
    );
}


const FilterWrap = styled.div`
    
`

const ListCount = styled.p`
    
`


export default AdminFilter;