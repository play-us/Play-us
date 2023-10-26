import { GiSoccerField } from 'react-icons/gi';
import { MdPostAdd } from 'react-icons/md';
import { styled } from 'styled-components';

const AdminMenuBar = () =>{
    return(
        <MenuBarWrap>
            <MenuBox>
                <GiSoccerField size={"20px"} color='#3ce48a'/>
                <MenuTxt>구장</MenuTxt>
            </MenuBox>
            <MenuBox>
                <MdPostAdd size={"20px"} color='#DADADA'></MdPostAdd>
                <MenuTxt>게시글</MenuTxt>
            </MenuBox>
        </MenuBarWrap>
    )
}

export default AdminMenuBar;

const MenuBarWrap = styled.ul`
    display: flex;
    margin-top: 30px;
    border-bottom: 3px solid  rgba(0,0,0,5%);
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
