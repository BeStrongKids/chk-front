import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

// 메뉴
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

const menuItems = [
    {
        key: '',
        label: '홈',
    },
    {
        key: 'myPage',
        label: '마이페이지',
    },
    {
        key: 'recruit',
        label: '공고 리스트',
    },
    {
        key: 'login',
        label: '로그인',
    }
]

// 파일명도 바꿔야 되나 ?
export default function DefaultHeader() {
    const turnToPage = useNavigate();
    
    // const goLogin = () => {
    //     turnToPage('/login');
    // }

    const onClick = (e) => {
        // console.log(e);
        turnToPage(e.key);
    };

    
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={menuItems}
                onClick={onClick}
            />
        </Header>
        //     <div className="demo-logo" />
        //     {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} /> */}
        //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} items={menuItems} onClick={onClick} />
        //     {/* <div style={{color: 'white', float: 'right', marginRight: '10px'}} onClick={goLogin}>로그인</div> */}
        // </Header>
    )
}