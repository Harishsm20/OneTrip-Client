import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const Home = () => {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Total Places"
            value={53}
            precision={0}
            valueStyle={{
              color: "#3f8600",
            }}
            suffix=" Places"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{
              color: "#cf1322",
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{
              color: "#cf1322",
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{
              color: "#cf1322",
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
};
export default Home;
