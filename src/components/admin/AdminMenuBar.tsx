import { GiSoccerField } from 'react-icons/gi';
import { MdPostAdd } from 'react-icons/md';
import { styled } from 'styled-components';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <span>
            <GiSoccerField></GiSoccerField>
            구장 목록
        </span>
        ),
    },
    {
      key: '2',
      label: (
        <span>
            <MdPostAdd></MdPostAdd>
            글목록
        </span>
        ),
    },
  ];




const AdminMenuBar = ({setMenu}:{setMenu:React.Dispatch<React.SetStateAction<string>>}) =>{
    const changeMenu = (e:any) => {
        if(e === 1){
            setMenu('구장 목록');
        }else{
            setMenu('등록 글 목록');
        }
    };
    return(
        <MenuBarWrap>
            <Tabs
                defaultActiveKey="1"
                items= {items}
                onChange={changeMenu}
            />
        </MenuBarWrap>
    )
}

export default AdminMenuBar;

const MenuBarWrap = styled.ul`
    display: flex;
    margin-top: 30px;
`
const MenuBox = styled.li`
    display: flex;
    align-items: center;
    margin-right: 50px;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 3px solid #3ce48a;
`
const MenuTxt = styled.p`
    margin-left: 5px;
    font-weight: bold;
    color: #3ce48a;
`
