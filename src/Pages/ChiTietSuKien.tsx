import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import { Card, Col, Layout, Row } from "antd";
import "../Styles/sukien.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";


const ChiTietSuKien: React.FC = () => {

  const { tenSK } = useParams<{ tenSK: string }>();
  const events = useSelector((state: RootState) => state.sukien.events);

  const selectedEvent = events.find(
    (event) => event.tenSK === tenSK
  );
  if (!selectedEvent) {
    return <div>Không tìm thấy sự kiện</div>;
  }

  return (
    <>
      <HeaderComponent />
        <Layout style={{ height: "730px" }} className="body">
          <Row>
            <Col span={6}>
              <img className="co1" src="/img/cotrai.png" alt="" />
            </Col>
            <Col span={12}>
              <h1 className="titlesukien">{selectedEvent.tenSK}</h1>
            </Col>
            <Col span={6}>
              <img className="co2" src="/img/cophai.png" alt="" />
            </Col>
          </Row>
          <Row className="cardchitietsukien">
            <Col span={6}>
              <div className="textchitietsukien">
                <img style={{height: "250px"}} src={selectedEvent.imgAnhHai} alt="" />
                <span>{selectedEvent.ngayBatDau}</span> <span>--</span> <span>{selectedEvent.ngayKetThuc}</span>
                <p>{selectedEvent.tenDiaDiem}</p>
                <p>{selectedEvent.giaVe}</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="textchitietsukien">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic sdsd typesetting, remaining cssa
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, of Lorem Ipsum.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className="textchitietsukien">
                <img style={{height: "180px"}} src={selectedEvent.imgAnhMot} alt="" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className="textchitietsukien">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <img style={{height: "180px"}} src={selectedEvent.imgAnhMot} alt="" />
              </div>
            </Col>
          </Row>
        </Layout>
    </>
  );
};

export default ChiTietSuKien;
