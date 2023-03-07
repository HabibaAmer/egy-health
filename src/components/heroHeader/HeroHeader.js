import React from "react";
import { Card, Col, Row } from "antd";
import {
  FieldTimeOutlined,
  GlobalOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";

import "./HeroHeader.css";

const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

const content = [
  {
    id: 1,
    title: "Secure your data",
    text: dummyText,
    icon: <SecurityScanOutlined />,
  },
  {
    id: 2,
    title: "Save your time",
    text: dummyText,
    icon: <FieldTimeOutlined />,
  },
  {
    id: 3,
    title: "Support your environment",
    text: dummyText,
    icon: <GlobalOutlined />,
  },
];

const HeroHeader = () => {
  return (
    <section
      className="hero-header"
      style={{ backgroundImage: "url('images/hero-header.jpg')" }}
    >
      <Row gutter={16}>
        {content.map(({ id, icon, title, text }) => (
          <Col span={8} key={id}>
            <Card
              title={
                <>
                  {icon} {title}
                </>
              }
              bordered={false}
            >
              {text}
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HeroHeader;
