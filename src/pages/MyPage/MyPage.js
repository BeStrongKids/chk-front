import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme
        , Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content, Sider } = Layout;

// 좌측 메뉴
const items2 = [
    {
        key: 'myPages',
        icon: React.createElement(UserOutlined),
        label: '마이 페이지',
        children: [
            {
                key: 'edit',
                label: '정보 수정'
            }, 
            {
                key: 'favorites',
                label: '즐겨찾기 관리',
            }, 
            {
                key: 'keyword',
                label: '내 키워드 관리',
            }
        ]
    }
]

export default function MyPage() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
    const turnToPage = useNavigate();
    
    const onClick = (e) => {
        // console.log(e);
        turnToPage(e.key);
    };
    
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
                    defaultOpenKeys={['myPages']}
                    style={{
                    height: '100%',
                    }}
                    items={items2}
                    onClick={onClick}
                />
                </Sider>
                <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
                >
                ㅇㅇㅇ 님, 환영합니다. <br />
                비밀번호 입력
                    <Form
                        name='basic'
                    >
                        <Form.Item
                            label='Password'
                            name='Password'
                            rules={[
                                {
                                    required: true,
                                    message: '비밀번호를 입력하세요',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                확인
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
            </Content>
        </>
    )
}
