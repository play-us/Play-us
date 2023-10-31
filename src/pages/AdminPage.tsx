import { styled } from 'styled-components';
import { useState } from 'react';
import AdminMenuBar from './../components/admin/AdminMenuBar';
import AdminFilter from './../components/admin/AdminFilter';
import AdminFieldLists from '../components/admin/AdminFieldLists';

interface componentsType {
    filterComponent:null | React.ReactElement
    fieldListComponent:null | React.ReactElement
}

const AdminPage = () =>{
    const [menu,setMenu] = useState<string>('구장 목록');
    const [components,setComponents] = useState<componentsType>({filterComponent:null,fieldListComponent:null});
    if(menu === '구장 목록'){
        setComponents((prevComponents)=>({
            ...prevComponents,
            filterComponent:<AdminFilter/>

        }));    
        // components.filterComponent = <AdminFilter/>;
        // components.fieldListComponent = <AdminFieldLists/>;
    }else{
        // components.filterComponent = null;
        // components.fieldListComponent = null;
    }
    return(
        <Wrap>
            <MenuTitle>{menu}</MenuTitle>
            <SearchInput placeholder='빠른 검색...'/>
            <AdminMenuBar setMenu ={setMenu}/>
            <FieldContentWrap>
                {components.filterComponent}
                {components.fieldListComponent}
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

