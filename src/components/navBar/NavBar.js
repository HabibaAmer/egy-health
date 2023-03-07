import React from "react";

import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

import { ReactComponent as Logo } from "../../styles/images/Logo.svg";

import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const items = {
  home: { label: "Home", link: "/", key: "home" },
  buyACard: { label: "Buy a card", link: "/buy-a-card", key: "buyACard" },
  login: { label: "Login", link: "/login", key: "login" },
  signup: { label: "Signup", link: "/signup", key: "signup" },
};

const navItems = Object.values(items);

const NavBar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const selectedKey = navItems.find(
    (item) => item.link === location.pathname
  ).key;

  const onChange = ({ key }) => {
    navigate(items[key].link);
  };

  return (
    <Header className="header">
      <Link className="logo" to={"/"}>
        <Logo />
        <span className="logo__text">EgyHealth</span>
      </Link>
      <Menu
        className="menu"
        theme="light"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={navItems}
        onClick={onChange}
      />
    </Header>
  );
};

export default NavBar;
