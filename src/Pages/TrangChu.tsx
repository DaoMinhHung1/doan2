import { Layout, Row, Col, Card, Input, Button } from "antd";
import React from "react";
import "../Styles/trangchu.css";
import HeaderComponent from "../Component/HeaderComponent";
const { Content } = Layout;

const TrangChu: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <Layout style={{height: "650px"}} className="body">
        <Content>
          <Row style={{ marginTop: "-10px" }}>
            <Col span={9}>
              <div className="alllogo" style={{ marginLeft: "150px" }}>
                <img className="imglogoDS" src="img/LogoDS.png" alt="" />
                <p className="namelogo">ĐẦM SEN PARK</p>
              </div>
            </Col>
            <Col span={5}>
              <img className="khicau1namtren" src="img/khicau1.png" alt="" />
            </Col>
            <Col span={5}>
              <img className="khicau2namtren" src="img/khicau2.png" alt="" />
            </Col>
            <Col span={5}>
              <img className="nhom4bannho" src="img/Nhomban4nguoi.png" alt="" />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <div className="phanbentraicard">
                <div style={{ marginTop: "-150px" }}>
                  <img
                    className="khicau1namtren"
                    src="img/khicau3.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={9}>
              <Card className="cardbentrai">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
                  volutpat, ut posuere ex facilisis.
                </p>
                <p>
                  Suspendisse iaculis libero lobortis condimentum gravida.
                  Aenean auctor iaculis risus, lobortis molestie lectus
                  consequat a.
                </p>
                <div className="titlecard">
                  <p className="fontcard">
                    <img className="ngoisao  " src="img/ngoisao.png" alt="" />
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </strong>
                  </p>
                  <p className="fontcard">
                    <img className="ngoisao " src="img/ngoisao.png" alt="" />
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </strong>
                  </p>
                  <p className="fontcard">
                    <img className="ngoisao" src="img/ngoisao.png" alt="" />
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </strong>
                  </p>
                  <p className="fontcard">
                    <img className="ngoisao " src="img/ngoisao.png" alt="" />
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </strong>
                  </p>
                </div>
                <img className="nhomban1" src="img/bannutoctim.png" alt="" />
              </Card>
            </Col>
            <Col span={1}>
              <img className="vector" src="img/Vector.png" alt="" />
            </Col>
            <Col span={5}>
              <Card className="cardbenphai">
                <h1 className="vecuaban">Vé của bạn</h1>
                <div>
                  <Input className="input" placeholder="Gói gia đình" />

                  <div style={{ display: "flex", marginTop: "10px" }}>
                    <Input
                      style={{
                        height: "40px",
                        width: "150px",
                        borderRadius: "16px",
                      }}
                      placeholder="Số lượng vé"
                    />

                    <Input
                      style={{ borderRadius: "16px", marginLeft: "10px" }}
                      placeholder="Ngày sử dụng"
                    />
                  </div>
                  <Input className="input" placeholder="Họ tên" />
                  <Input className="input" placeholder="Số điện thoại" />
                  <Input className="input" placeholder="Địa chỉ Email" />
                </div>
                <Button className="button">Đặt Vé</Button>
              </Card>
            </Col>
            <Col span={2}>
              <div>
                <p>
                  <img className="khicaubenphai" src="img/khicau4.png" alt="" />
                </p>
                <p>
                  <img
                    className="khicau1namtren"
                    src="img/khicau1.png"
                    alt=""
                  />
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <img className="khicau5" src="img/khicau5.png" alt="" />
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default TrangChu;
