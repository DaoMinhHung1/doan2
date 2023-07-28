import React from 'react'
import HeaderComponent from '../Component/HeaderComponent'
import { Col, Layout, Row } from 'antd'
import "../Styles/thanhtoanthanhcong.css";

const ThanhToanThanhCong:React.FC = () => {
  return (
    <>
    <HeaderComponent/>
    <Layout className='body'>
      <Row>
        <Col span={24}>
        <h1 className="titlethanhtoanthanhcong">Thanh toán thành công</h1>
        </Col>
      </Row>
    </Layout>
    </>
  )
}

export default ThanhToanThanhCong