import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme
        , Button, Form, Input, Checkbox } from 'antd';

const { Content, Sider } = Layout;

// 좌측 메뉴
const items2 = [
    {
        key: 'joinPages',
        icon: React.createElement(UserOutlined),
        label: '로그인/회원가입',
        children: [
            {
                key: 'login',
                label: '로그인'
            }, 
            {
                key: 'join',
                label: '회원가입',
            }
        ]
    }
]

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function LoginPage() {
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
                    defaultOpenKeys={['joinPages']}
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
                    로그인 페이지입니다. <br />
                    아이디/비밀번호를 입력해 주세요.
                    <Form
                        name='basic'
                        labelCol={{
                          span: 8,
                        }}
                        wrapperCol={{
                          span: 16,
                        }}
                        style={{
                          maxWidth: 600,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete='off'
                    >
                        <Form.Item
                            label='Username'
                            name='username'
                            rules={[
                                {
                                required: true,
                                message: '아이디를 입력하세요.',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='Password'
                            name='Password'
                            rules={[
                                {
                                    required: true,
                                    message: '비밀번호를 입력하세요.',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                            >
                            <Checkbox>Remember me</Checkbox>
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
