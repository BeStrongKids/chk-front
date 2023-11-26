import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

// 파일명도 바꿔야 되나 ?
export default function DefaultFooter() {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        />
    )
}