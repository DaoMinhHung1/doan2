import React, { useEffect } from "react";
import HeaderComponent from "../Component/HeaderComponent";
import { Button, Card, Col, Layout, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchEvents } from "../redux/sukienSlice";
import { Link } from "react-router-dom";
import "../Styles/sukien.css";

const Sukien: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const events = useSelector((state: RootState) => state.sukien.events);
  //

  // Load dữ liệu xuống từ Firestore
  useEffect(() => {
    // Use dispatch to call the fetchEvents async thunk
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <>
      <HeaderComponent />
      <Layout style={{ height: "730px" }} className="body">
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
        <Row className="">
          <Col span={4}>{/* <img src="img/quatrai.png" alt="" /> */}</Col>
          {events.map((event) => (
            <Col span={4}>
              <Card
                className="cardsukien"
                cover={<img alt="" src="img/ds1.png" />}
              >
                <h1>{event.tenSK}</h1>
                <p>{event.tenDiaDiem}</p>
                <span>{event.ngayBatDau}</span> <span>--</span>{" "}
                <span>{event.ngayKetThuc}</span>
                <p>{event.giaVe} VND</p>
                <Link to={`/chitietsukien/${encodeURIComponent(event.tenSK)}`}>
                  <Button className="btnxemchitiet">Xem chi tiết</Button>
                </Link>
              </Card>
            </Col>
          ))}

          <Col span={4}>{/* <img src="img/quaphai.png" alt="" /> */}</Col>
        </Row>
      </Layout>
    </>
  );
};

export default Sukien;
