import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Maps from '../Map/Map';

const { Content, Sider } = Layout;

// 좌측 메뉴
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

export default function MainPage() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
    return (
        <>
            <Content
            style={{
                padding: '0 50px',
            }}
            >
            <Breadcrumb
                style={{
                margin: '16px 0',
                }}
            >
                {/* 네비게이션 Home > List > App */}
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout
                style={{
                padding: '24px 0',
                background: colorBgContainer,
                }}
            >
                <Sider
                style={{
                    background: colorBgContainer,
                }}
                width={200}
                >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                    height: '100%',
                    }}
                    items={items2}
                />
                </Sider>
                <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
                >
                워드 클라우드 영역
                </Content>
                <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
                >
                <Maps />
                </Content>
            </Layout>
            </Content>
        </>
    )
}
