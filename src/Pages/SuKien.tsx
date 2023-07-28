import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import { Button, Card, Col, Layout, Row } from "antd";
import "../Styles/sukien.css";

const Sukien: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <Layout style={{height: "650px"}} className="body">
        <Row>
          <Col span={6}>
            <img className="co1" src="img/cotrai.png" alt="" />
          </Col>
          <Col span={12}>
            <h1 className="titlesukien">Sự kiện nổi bật</h1>
          </Col>
          <Col span={6}>
            <img className="co2" src="img/cophai.png" alt="" />
          </Col>
        </Row>
        <Row className="card">
          <Col span={6}>
            <Card
              cover={<img alt="" src="img/damsen1.png" />}
              style={{ width: 300 }}
            >
              <h1>Sự kiện 1</h1>
              <p>Đàm Sen Park</p>
              <p>25.000VND</p>
              <Button className="btnxemchitiet">Xem chi tiết</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              cover={<img alt="" src="img/damsen1.png" />}
              style={{ width: 300 }}
            >
              <h1>Sự kiện 1</h1>
              <p>Đàm Sen Park</p>
              <p>25.000VND</p>
              <Button className="btnxemchitiet">Xem chi tiết</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              cover={<img alt="" src="img/damsen1.png" />}
              style={{ width: 300 }}
            >
              <h1>Sự kiện 1</h1>
              <p>Đàm Sen Park</p>
              <p>25.000VND</p>
              <Button className="btnxemchitiet">Xem chi tiết</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              cover={<img alt="" src="img/damsen1.png" />}
              style={{ width: 300 }}
            >
              <h1>Sự kiện 1</h1>
              <p>Đàm Sen Park</p>
              <p>25.000VND</p>
              <Button className="btnxemchitiet">Xem chi tiết</Button>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Sukien;
