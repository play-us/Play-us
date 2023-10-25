import { styled } from 'styled-components';
import { useState } from 'react';
import AdminMenuBar from './../components/admin/AdminMenuBar';
import AdminFilter from './../components/admin/AdminFilter';
  

const AdminPage = () =>{
    const [menu,setMenu] = useState('구장 목록');
    return(
        <Wrap>
            <MenuTitle>{menu}</MenuTitle>
            <SearchInput placeholder='빠른 검색...'/>
            <AdminMenuBar/>
            <FieldListWrap>
                <AdminFilter/>
            </FieldListWrap>
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
    padding: 25px 20px;
    box-sizing: border-box;
    &::placeholder {
    color: #d8d8d8; 
  }
`

const FieldListWrap = styled.div`
    background-color: #F8F8F8;
    height: 200px;
`

export default AdminPage;

