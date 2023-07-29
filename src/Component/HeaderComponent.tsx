import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import "../Styles/trangchu.css";
import { PhoneOutlined } from "@ant-design/icons";

const HeaderComponent: React.FC = () => {
  return (
    <Header className="header">
      <img src="/img/Little&LittleLogo.png" alt="" />
      <div>
      <Menu defaultSelectedKeys={["1"]}  className="custom-navbar">
        <a href="/trangchu"><Menu.Item key="1">Trang chủ</Menu.Item></a>
        <a href="/sukien"><Menu.Item key="2">Sự kiện</Menu.Item></a>
        <a href="/lienhe"><Menu.Item key="3">Liên hệ</Menu.Item></a>
      </Menu>
      </div>

      <div className="hotline">
        <PhoneOutlined />
        <span style={{ marginLeft: "10px" }}>0776723790</span>
      </div>
    </Header>
  );
};

export default HeaderComponent;
