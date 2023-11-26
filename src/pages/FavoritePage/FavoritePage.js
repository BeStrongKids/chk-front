import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Transfer } from 'antd';

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

export default function FavoritePage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [mockData, setMockData] = useState([]);
    const [targetKeys, setTargetKeys] = useState([]);
    
    const getMock = () => {
        const tempTargetKeys = [];
        const tempMockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i.toString(),
            title: `content${i + 1}`,
            description: `description of content${i + 1}`,
            chosen: i % 2 === 0,
          };
          if (data.chosen) {
            tempTargetKeys.push(data.key);
          }
          tempMockData.push(data);
        }
        setMockData(tempMockData);
        setTargetKeys(tempTargetKeys);
    };
    useEffect(() => {
        getMock();
    }, []);
        
    const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
    const handleChange = (newTargetKeys) => {
        setTargetKeys(newTargetKeys);
    };

    const handleSearch = (dir, value) => {
        console.log('search:', dir, value);
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
                <Breadcrumb.Item>마이 페이지</Breadcrumb.Item>
                {/* <Breadcrumb.Item>List</Breadcrumb.Item> */}
                <Breadcrumb.Item>즐겨찾기 관리</Breadcrumb.Item>
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
                />
                </Sider>
                <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
                >
                    ● 기술
                    <Transfer
                        dataSource={mockData}
                        showSearch
                        filterOption={filterOption}
                        targetKeys={targetKeys}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        render={(item) => item.title}
                    />

                    ● 지역
                    <Transfer
                        dataSource={mockData}
                        showSearch
                        filterOption={filterOption}
                        targetKeys={targetKeys}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        render={(item) => item.title}
                    />
                </Content>
                <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
                >
                    ● 회사
                    <Transfer
                        dataSource={mockData}
                        showSearch
                        filterOption={filterOption}
                        targetKeys={targetKeys}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        render={(item) => item.title}
                    />

                    ● 직무
                    <Transfer
                        dataSource={mockData}
                        showSearch
                        filterOption={filterOption}
                        targetKeys={targetKeys}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        render={(item) => item.title}
                    />
                </Content>
            </Layout>
            </Content>
        </>
    )
}
