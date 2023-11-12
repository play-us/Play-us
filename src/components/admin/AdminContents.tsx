import { GiSoccerField } from 'react-icons/gi';
import { MdPostAdd } from 'react-icons/md';
import { styled } from 'styled-components';
import { Tabs, ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import AdminFilter from './AdminFilter';
import AdminFieldLists from './AdminFieldLists';
import { OpacityPrimaryTextColor, primaryColor } from './../../styles/CommonStyle';




interface propsType {
    setMenu:React.Dispatch<React.SetStateAction<string>>;
}

const AdminMenuBar = (props:propsType) =>{

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: (
            <MenuBoxWrap>
                <GiSoccerField></GiSoccerField>
                <MenuTxt>구장 목록</MenuTxt>
            </MenuBoxWrap>
            ),
           children:
           <FieldContentWrap> 
            <AdminFilter/> 
            <AdminFieldLists/>
           </FieldContentWrap>, 
        },
        {
          key: '2',
          label: (
            <MenuBoxWrap>
                <MdPostAdd></MdPostAdd>
                <MenuTxt>게시글 목록</MenuTxt>
            </MenuBoxWrap>
            ),
          children: null,  
        },
      ];
    
    const changeMenu = (e:string) => {
        if(e === "1"){
            props.setMenu('구장 목록');
        }else{
            props.setMenu('게시글 목록');
        }
    };
    return(
        <MenuBarWrap>
            <ConfigProvider
                theme={{
                    components: {
                      Tabs: {
                        itemSelectedColor: primaryColor,
                        itemHoverColor: primaryColor,
                        inkBarColor: primaryColor,
                      },
                    },
                  }}
            >
                <MenuWrap
                    defaultActiveKey="1"
                    items= {items}
                    onTabClick={changeMenu}
                />
            </ConfigProvider>
        </MenuBarWrap>
    )
}

export default AdminMenuBar;

const MenuBarWrap = styled.ul`
    display: flex;
    margin-top: 30px;
`
const MenuWrap = styled(Tabs)`
    width: 100%;
    vertical-align: center;
`

const MenuBoxWrap = styled.div`
    display: flex;
    align-items: center;
`
const MenuTxt = styled.p`
    margin-left: 3px;
    font-weight: bold;
`


const FieldContentWrap = styled.div`
    /* background-color: rgba(248,248,248,90%);
    border-radius: 20px; */
`

