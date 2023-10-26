import { styled } from 'styled-components';
import { useState } from 'react';
import AdminMenuBar from './../components/admin/AdminMenuBar';
import AdminFilter from './../components/admin/AdminFilter';
import AdminDetail from '../components/admin/AdminDetail';
  

const AdminPage = () =>{
    const [menu,setMenu] = useState('구장 목록');
    return(
        <Wrap>
            <MenuTitle>{menu}</MenuTitle>
            <SearchInput placeholder='빠른 검색...'/>
            <AdminMenuBar/>
            <FieldContentWrap>
                <AdminFilter/>
                <AdminDetail/>
            </FieldContentWrap>
        </Wrap>
    )
}



const Wrap = styled.div`
    
`
const MenuTitle = styled.p`
    text-align: left;
    font-size:  1.875rem;
    font-weight: bold;
    margin: 50px 0;
`

const SearchInput = styled.input`
    width: 100%;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    padding: 20px 20px;
    box-sizing: border-box;
    &::placeholder {
    color: #d8d8d8; 
  }
`

const FieldContentWrap = styled.div`
    /* background-color: rgba(248,248,248,90%);
    border-radius: 20px; */
`

export default AdminPage;

