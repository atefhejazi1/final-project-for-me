import { Button, Col, Input, Row } from "antd";
import React from "react";
import styles from "./styles.module.scss";

const LatestUpdate = () => {
  return (
    <div className="container">
      <div className={styles.latestUpdate}>
        <Row>
          <Col span={12}>
            <h2>Sign Up to Get Latest Updates</h2>
          </Col>
          <Col span={12}>
            <from>
              <Input placeholder="Enter E-Mail Address" />
              <Button type="primary" htmlType="submit">
                <i class="fa-solid fa-paper-plane"></i>
              </Button>
            </from>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LatestUpdate;
