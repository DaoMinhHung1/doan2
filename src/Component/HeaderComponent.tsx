import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import "../Styles/trangchu.css";
import { PhoneOutlined } from "@ant-design/icons";

const HeaderComponent: React.FC = () => {
  return (
    <Header className="header">
      <img src="img/Little&LittleLogo.png" alt="" />

      <div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="custom-navbar"
        >
          <Menu.Item key="">Trang chủ</Menu.Item>
          <Menu.Item key="">Sự kiện</Menu.Item>
          <Menu.Item key="">Giới thiệu</Menu.Item>
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
