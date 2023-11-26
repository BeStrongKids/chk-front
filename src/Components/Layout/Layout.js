import React from 'react';
import { Layout, FloatButton } from 'antd';
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Layout/Header/Header';
import Footer from '../../Components/Layout/Footer/Footer';

const DefaultLayout = () => {
    return (
        <Layout>
        <FloatButton tooltip={<div>띄울 문구</div>} />
            <Header />
                <Outlet />
            <Footer />
        </Layout>
    )
}

export default DefaultLayout