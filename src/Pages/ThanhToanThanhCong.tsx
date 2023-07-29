import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import { Button, Card, Col, Layout, QRCode, Row } from "antd";
import "../Styles/thanhtoanthanhcong.css";

const ThanhToanThanhCong: React.FC = () => {
  const qrContent = "Nội dung mã QR của bạn";
  return (
    <>
      <HeaderComponent />
      <Layout style={{height: "730px"}} className="body">
        <Row>
          <Col span={24}>
            <h1 className="titlethanhtoanthanhcong">Thanh toán thành công</h1>
          </Col>
        </Row>
        <Row className="card layoutcard">
          <Col span={4}>
            <img className="btnimgtrai" src="img/quatrai.png" alt="" />
          </Col>
          <Col className="QR" span={4}>
            <Card className="cardQR">
              <div className="boxQR">
                <QRCode value={qrContent} />
                <h2 className="title">ALT2002323</h2>
                <p>Vé cổng</p>
                <p>---</p>
                <p>Ngày sử dụng: </p>
                <p>Check</p>
                <p>okee</p>
              </div>
            </Card>
          </Col>
          <Col className="QR" span={4}>
            <Card className="cardQR">
              <div className="boxQR">
                <QRCode value={qrContent} />
                <h2 className="title">ALT2002323</h2>
                <p>Vé cổng</p>
                <p>Ngày sử dụng: </p>
              </div>
            </Card>
          </Col>
          <Col className="QR" span={4}>
            <Card className="cardQR">
              <div className="boxQR">
                <QRCode value={qrContent} />
                <h2 className="title">ALT2002323</h2>
                <p>Vé cổng</p>
                <p>Ngày sử dụng: </p>
              </div>
            </Card>
          </Col>
          <Col className="QR" span={4}>
            <Card className="cardQR">
              <div className="boxQR">
                <QRCode value={qrContent} />
                <h2 className="title">ALT2002323</h2>
                <p>Vé cổng</p>
                <p>Ngày sử dụng: </p>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <img className="btnimgphai" src="img/quaphai.png" alt="" />
          </Col>
          <img className="bannamtocnau" src="img/bannamtocnau.png" alt="" />
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-10px",
            }}
            span={24}
          >
            <Button className="button">Trải vé</Button>
            <Button className="button">Gửi mail</Button>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default ThanhToanThanhCong;
