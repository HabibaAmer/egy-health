import React, { useMemo } from "react";

import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

import { ReactComponent as Logo } from "../../styles/images/Logo.svg";

import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const items = useMemo(
    () => ({
      home: { label: "Home", link: "/", key: "home", visible: true },
      buyACard: {
        label: "Buy a card",
        link: "/buy-a-card",
        key: "buyACard",
        visible: true,
      },
      login: {
        label: "Login",
        link: "/login",
        key: "login",
        visible: !location.state?.username,
      },
      signup: {
        label: "Signup",
        link: "/signup",
        key: "signup",
        visible: !location.state?.username,
      },
      signout: {
        label: "Signout",
        link: "/signout",
        key: "signout",
        visible: location.state?.username,
      },
    }),
    [location.state?.username]
  );

  const navItems = Object.values(items).filter((item) => item.visible);

  const selectedKey = navItems.find(
    (item) => item.link === location.pathname
  )?.key;

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
