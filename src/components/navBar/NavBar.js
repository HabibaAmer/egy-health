import React from "react";

import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

import { ReactComponent as Logo } from "../../styles/images/Logo.svg";

import "./NavBar.css";

const items1 = ["Home", "Buy a card", "Login", "Signup"].map((key) => ({
  key,
  label: `${key}`,
}));

const navBar = () => {
  return (
    <Header className="header">
      <div className="logo">
        <Logo />
        <span className="logo__text">EgyHealth</span>
      </div>
      <Menu
        className="menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["Home"]}
        items={items1}
      />
    </Header>
  );
};

export default navBar;
