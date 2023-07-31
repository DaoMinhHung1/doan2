import React, { useState } from "react";
import HeaderComponent from "../Component/HeaderComponent";
import Layout from "antd/es/layout/layout";
import { Button, Card, Col, Input, Row } from "antd";
import "../Styles/thanhtoan.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Ticket, } from "../redux/datveSlice";
import { useLocation } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";

const Thanhtoan: React.FC = () => {
  const ticketData = useSelector<RootState, Ticket[]>(
    (state) => state.ticket.ticket
  );
  const ticket = ticketData[0];
  console.log(ticketData);

  const formatDate = (date: Dayjs | null) => {
    return date ? dayjs(date).format("DD/MM/YYYY") : "";
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const giaVe = searchParams.get("giaVe");
  const [giaVeState, setGiaVeState] = useState<string | null>(giaVe);

  const giaVeNumber = parseInt(giaVeState ?? "0", 10);
  const soLuongVeNumber = parseInt(ticket?.soLuongVe ?? "0", 10);
  const tongTien = giaVeNumber * soLuongVeNumber
  const tongTienString = tongTien.toFixed(3);
  return (
    <>
      <HeaderComponent />
      <Layout style={{ height: "730px" }} className="body">
        <Row>
          <Col span={24}>
            <h1 className="titlethanhtoan">Thanh toán</h1>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Card className="thanhtoancardleft">
              <div style={{ display: "flex" }}>
                <div className="input-with-label">
                  <label className="label">
                    <strong>Số tiền thanh toán</strong>{" "}
                  </label>
                  <Input
                    value={tongTienString}
                    style={{ width: "200px", marginRight: "10px" }}
                    className="input inputhanhtoan"
                    placeholder="Nhập nội dung ở đây"
                  />
                </div>

                <div className="input-with-label">
                  <label className="label">
                    <strong>Số lượng vé</strong>{" "}
                  </label>
                  <Input
                    value={ticket?.soLuongVe}
                    style={{ width: "100px", marginRight: "10px" }}
                    className="input inputhanhtoan"
                    placeholder="Nhập nội dung ở đây"
                  />
                </div>

                <div className="input-with-label">
                  <label className="label">
                    <strong>Ngày sử dụng</strong>{" "}
                  </label>
                  <Input
                    value={formatDate(ticket?.ngaySuDung)}
                    style={{ width: "200px" }}
                    className="input"
                    placeholder="Nhập nội dung ở đây"
                  />
                </div>
              </div>

              <div className="input-with-label">
                <label className="label">
                  <strong>Thông tin liên hệ</strong>{" "}
                </label>
                <Input
                  value={ticket?.hoTen}
                  className="input inputhanhtoan"
                  placeholder="Nhập nội dung ở đây"
                />
              </div>

              <div className="input-with-label">
                <label className="label">
                  <strong>Điện thoại</strong>{" "}
                </label>
                <Input
                  value={ticket?.soDienThoai}
                  className="input inputhanhtoan"
                  placeholder="Nhập nội dung ở đây"
                />
              </div>

              <div className="input-with-label">
                <label className="label">
                  <strong>Email</strong>{" "}
                </label>
                <Input
                  value={ticket?.email}
                  className="input inputhanhtoan"
                  placeholder="Nhập nội dung ở đây"
                />
              </div>

              <img
                className="logocontocvang"
                src="img/bannutocvang.png"
                alt=""
              />
            </Card>
          </Col>
          <Col span={1}>
            <img className="vectorthanhtoan" src="img/Vector.png" alt="" />
          </Col>
          <Col span={5}>
            <Card className="thanhtoancardright">
              <h1 className="thongtincuarban">Thông tin thanh toán</h1>
              <div>
                <div className="">
                  <label className="label">
                    <strong>Số thẻ</strong>{" "}
                  </label>
                  <Input
                    style={{ width: "300px" }}
                    className="input inputhanhtoan"
                    placeholder="Nhập số thẻ"
                  />
                </div>

                <div className="">
                  <label className="label">
                    <strong>Họ tên chủ thẻ</strong>{" "}
                  </label>
                  <Input
                    style={{ width: "300px" }}
                    className="input inputhanhtoan"
                    placeholder="Nhập số thẻ"
                  />
                </div>

                <div className="">
                  <label className="label">
                    <strong>Ngày hết hạn</strong>{" "}
                  </label>
                  <Input
                    style={{ width: "300px" }}
                    className="input inputhanhtoan"
                    placeholder="Nhập số thẻ"
                  />
                </div>

                <div className="">
                  <label className="label">
                    <strong>CVV/CVC</strong>{" "}
                  </label>
                  <Input
                    style={{ width: "300px" }}
                    className="input inputhanhtoan"
                    placeholder="Nhập số thẻ"
                  />
                </div>
              </div>
              <Button className="buttonthanhtoan">Thanh toán</Button>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Thanhtoan;
