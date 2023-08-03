import { Layout, Row, Col, Card, Input, Button, Select, message } from "antd";
import React, { useState, useEffect } from "react";
import "../Styles/trangchu.css";
import HeaderComponent from "../Component/HeaderComponent";
import DatePickerComponent from "../Component/DatePickerComponent ";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { Ticket, addTicket } from "../redux/datveSlice";
import { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../redux/sukienSlice";
const { Content } = Layout;
const { Option } = Select;

const TrangChu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [formData, setFormData] = useState<Ticket>({
    hoTen: "",
    soDienThoai: "",
    email: "",
    goiVe: "",
    soLuongVe: "",
    ngaySuDung: null,
  });

  const formatDate = (date: Dayjs | null) => {
    return date ? dayjs(date).format("DD/MM/YYYY") : "";
  };

  const events = useSelector((state: RootState) => state.sukien.events);
  //

  // Load dữ liệu xuống từ Firestore
  useEffect(() => {
    // Use dispatch to call the fetchEvents async thunk
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleDatePickerChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    setFormData((prevFormData) => ({ ...prevFormData, ngaySuDung: date }));
  };

  const handleSaveData = async () => {
    try {
      const { hoTen, soDienThoai, email, goiVe, soLuongVe } = formData;

      // Convert ngaySuDung to a string before saving
      const ngaySuDungString = selectedDate ? selectedDate.format() : null;

      // Data object to be saved in Firestore
      const data = {
        hoTen,
        soDienThoai,
        email,
        goiVe,
        soLuongVe,
        ngaySuDung: ngaySuDungString as Dayjs | null,
      };
      console.log("Data to be saved:", data);

      // Dispatch the `addTicket` async thunk
      await dispatch(addTicket(data));
      const selectedEvent = events.find(
        (event) => event.tenSK === formData.goiVe
      );
      if (selectedEvent) {
        const giaVe = selectedEvent.giaVe;
        navigate(`/thanhtoan?giaVe=${giaVe}`);
      } else {
        navigate("/thanhtoan");
      }
      console.log("Data saved successfully!");
      message.success("Đặt vé thành công!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  console.log(handleSaveData);

  return (
    <>
      <HeaderComponent />
      <Layout style={{ height: "730px" }} className="body">
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
                  <Select
                    value={formData.goiVe}
                    onChange={(value: string) =>
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        goiVe: value,
                      }))
                    }
                    className="input"
                    style={{ borderRadius: "100%" }}
                    placeholder="Chọn gói muốn sử dụng"
                  >
                    {events.map((event) => (
                      <Option key={event.id} value={event.tenSK}>
                        {event.tenSK}
                      </Option>
                    ))}
                  </Select>

                  <div style={{ display: "flex", marginTop: "10px" }}>
                    <Input
                      name="soLuongVe"
                      value={formData.soLuongVe}
                      onChange={handleInputChange}
                      style={{
                        height: "40px",
                        width: "150px",
                        borderRadius: "16px",
                      }}
                      placeholder="Số lượng vé"
                    />

                    <Input
                      name="ngaySuDung"
                      value={formatDate(formData.ngaySuDung)}
                      addonAfter={
                        <DatePickerComponent
                          onChange={handleDatePickerChange}
                          selectedDate={formData.ngaySuDung}
                        />
                      }
                      onChange={() => {}} // Add a dummy onChange for DatePicker, as it requires an onChange prop
                      style={{ borderRadius: "16px", marginLeft: "10px" }}
                      placeholder="Ngày sử dụng"
                    />
                  </div>
                  <Input
                    name="hoTen"
                    value={formData.hoTen}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Họ tên"
                  />
                  <Input
                    name="soDienThoai"
                    value={formData.soDienThoai}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Số điện thoại"
                  />
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Địa chỉ Email"
                  />
                </div>
                <Button className="buttonbtn" onClick={handleSaveData}>
                  Đặt Vé
                </Button>
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
