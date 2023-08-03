import React, { useEffect, useRef, useState } from "react";
import HeaderComponent from "../Component/HeaderComponent";
import Layout from "antd/es/layout/layout";
import { Button, Card, Col, Input, Modal, Row } from "antd";
import "../Styles/thanhtoan.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Ticket } from "../redux/datveSlice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { fetchNganhang } from "../redux/nganhangSlice";

const Thanhtoan: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
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
  const tongTien = giaVeNumber * soLuongVeNumber;
  const tongTienString = tongTien.toFixed(3);

  const showModal = () => {
    setModalVisible(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setModalVisible(false);
  };

  // dữ liệu ngân hàng
  useEffect(() => {
    dispatch(fetchNganhang());
  }, [dispatch]);
  const nganhang = useSelector((state: RootState) => state.nganhang.nganhang);
  const nganhangInfo = nganhang[0];

  // lấy dữ liệu từ input ra
  const [hoTen, setHoTen] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (
      hoTen !== nganhangInfo.hoTen ||
      cvv !== nganhangInfo.CVV
    ) {
      // Hiển thị thông báo lỗi nếu thông tin thẻ không hợp lệ
      setModalVisible(true);
      return;
    }

    navigate('/thanhtoanthanhcong');
    // Ở đây, bạn có thể thêm các hành động khi thông tin thẻ hợp lệ, ví dụ: chuyển đến trang xác nhận thanh toán.

  };
  console.log(nganhangInfo)
  console.log(hoTen)

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
              <h2 className="vecongvegiadinh">Vé cổng - Vé gia đình</h2>
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
            {nganhang.map((nganhang) => (

              <Card className="thanhtoancardright">
                <h1 className="thongtincuarban">Thông tin thanh toán</h1>
                <div>
                  <div className="">
                    <label className="label">
                      <strong>Số thẻ</strong>{" "}
                    </label>
                    <Input
                      value={nganhang.soThe}
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
                      onChange={(e) => setHoTen(e.target.value)}
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
                      value={nganhang.ngayHetHan}
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
                      onChange={(e) => setCvv(e.target.value)}
                      style={{ width: "300px" }}
                      className="input inputhanhtoan"
                      placeholder="Nhập số thẻ"
                    />
                  </div>
                </div>
                <Button onClick={handlePayment} className="buttonthanhtoan">Thanh toán</Button>
              </Card>
            ))};
          </Col>
        </Row>
        <Modal
          visible={modalVisible}
          onCancel={hideModal}
          title={<span style={{ display: "flex",justifyContent: "center", color: "orange"}}>Lỗi thanh toán</span>}
          footer={[
            <Button key="ok" type="primary" onClick={hideModal}>
              OK
            </Button>,
          ]}
        >
          <p>Hình như đã có lỗi xảy ra khi thanh toán...
            Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.</p>
        </Modal>
      </Layout>


    </>
  );
};

export default Thanhtoan;
