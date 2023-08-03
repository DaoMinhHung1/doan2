import React, { useEffect, useState } from "react";
import HeaderComponent from "../Component/HeaderComponent";
import { Button, Card, Col, Layout, QRCode, Row } from "antd";
import "../Styles/thanhtoanthanhcong.css";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTicket } from "../redux/datveSlice";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";

const ThanhToanThanhCong: React.FC = () => {

  const navigate = useNavigate();

  const handleguimail = () => {
    navigate('/lienhe');
  }

  const qrContent = "Nội dung mã QR của bạn";
  const dispatch: AppDispatch = useDispatch();
  const thanhtoanthanhcong = useSelector(
    (state: RootState) => state.ticket.ticket
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(thanhtoanthanhcong.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    thanhtoanthanhcong.length
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchTicket());
  }, [dispatch]);

  const formatDate = (date: Dayjs | null) => {
    return date ? dayjs(date).format("DD/MM/YYYY") : "";
  };

  const tongve = thanhtoanthanhcong.length;
 
  console.log(endIndex)

  return (
    <>
      <HeaderComponent />
      <Layout style={{ height: "730px" }} className="body">
        <Row>
          <Col span={24}>
            <h1 className="titlethanhtoanthanhcong">Thanh toán thành công</h1>
          </Col>
        </Row>
        <Row className="card layoutcard">
          <Col span={4}>
            <img
            style={{marginLeft: "140px"}}
              className="btnimgtrai"
              src="img/quatrai.png"
              alt=""
              onClick={handlePrevPage}
            />
          </Col>
          {thanhtoanthanhcong.slice(startIndex, endIndex).map((tt) => (
            <Col className="QR" span={4}>
              <Card className="cardQR">
                <div className="boxQR">
                  <QRCode value={qrContent} />
                  <h2 className="title">ALT2002323</h2>
                  <p style={{fontSize: "20px", color: "#FFC226",  fontFamily: "iCiel Koni"}}>Vé cổng</p>
                  <p>---</p>
                  <p> <span>Ngày sử dụng:</span>{formatDate(tt.ngaySuDung)}</p>
                  <p style={{marginTop: "10px"}}><img style={{height: "30px"}} src="img/tick1.png" alt="" /></p>
                </div>
              </Card>
            </Col>
          ))}
          <Col span={4}>
            <img
            style={{marginLeft: "20px"}}
              className="btnimgphai"
              src="img/quaphai.png"
              alt=""
              onClick={handleNextPage}
            />
          </Col>
          <img className="bannamtocnau" src="img/bannamtocnau.png" alt="" />
          
        </Row>
        <Row>
        <p style={{marginLeft: "200px", marginTop: "-30px"}}>Số lượng vé:<span> {tongve} vé</span></p>
        <p style={{marginLeft: "1000px", marginTop: "-30px"}}>Trang {currentPage} /<span> {itemsPerPage}</span></p>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-10px",
            }}
            span={24}
          >
            <Button className="buttonthanhtoanthanhcong">Tải vé</Button>
            <Button onClick={handleguimail} className="buttonthanhtoanthanhcong">Gửi mail</Button>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default ThanhToanThanhCong;
