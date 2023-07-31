import React, { useState } from "react";
import HeaderComponent from "../Component/HeaderComponent";
import { Card, Col, Input, Layout, Row } from "antd";
import "../Styles/lienhe.css";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { Contact, addContact } from "../redux/lienheSlice";

const LienHe: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<Contact>({
    hoTen: "",
    email: "",
    soDienThoai: "",
    diaChi: "",
    loiNhan: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSaveData = async () => {
    try {
      const { hoTen, soDienThoai, email, diaChi, loiNhan } = formData;

      // Data object to be saved in Firestore
      const data = {
        hoTen,
        soDienThoai,
        email,
        diaChi,
        loiNhan,
      };
      console.log("Data to be saved:", data);

      // Dispatch the `addTicket` async thunk
      await dispatch(addContact(data));
      console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <HeaderComponent />
      <Layout style={{ height: "730px" }} className="body">
        <Row>
          <Col span={24}>
            <h1 className="titlelienhe">Liên Hệ</h1>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Card style={{ marginLeft: "200px" }} className="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
                volutpat, ut posuere ex facilisis.
              </p>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <Input
                  name="hoTen"
                  onChange={handleInputChange}
                  style={{
                    height: "40px",
                    width: "250px",
                    borderRadius: "16px",
                  }}
                  placeholder="Tên"
                />
                <Input
                  onChange={handleInputChange}
                  name="email"
                  style={{
                    height: "40px",
                    width: "400px",
                    borderRadius: "16px",
                    marginLeft: "20px",
                  }}
                  placeholder="Email"
                />
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <Input
                  onChange={handleInputChange}
                  name="soDienThoai"
                  style={{
                    height: "40px",
                    width: "250px",
                    borderRadius: "16px",
                  }}
                  placeholder="Số điện thoại"
                />
                <Input
                  name="diaChi"
                  onChange={handleInputChange}
                  style={{
                    height: "40px",
                    width: "400px",
                    borderRadius: "16px",
                    marginLeft: "20px",
                  }}
                  placeholder="Địa chỉ"
                />
              </div>
              <TextArea
                name="loiNhan"
                onChange={handleTextAreaChange}
                style={{ borderRadius: "16px", marginTop: "10px" }}
                placeholder="lời nhắn"
                rows={5}
              />

              <img className="imgtocdo" src="img/bannamtocdo.png" alt="" />
              <button onClick={handleSaveData} className="btnlienhe">
                Gửi liên hệ
              </button>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="card">
              <div className="cardnho">
                <img src="img/diachi.png" alt="" />
                <div className="noidungtroncardnho">
                  <strong>Địa chỉ:</strong>
                  <p>86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                </div>
              </div>
            </Card>
            <Card className="card">
              <div className="cardnho">
                <img src="img/email.png" alt="" />
                <div className="noidungtroncardnho">
                  <strong>Email:</strong>
                  <p>daominhhung2203@gmail.com</p>
                </div>
              </div>
            </Card>
            <Card className="card">
              <div className="cardnho">
                <img src="img/dienthoai.png" alt="" />
                <div className="noidungtroncardnho">
                  <strong>Điện thoại:</strong>
                  <p>0776723790</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default LienHe;
