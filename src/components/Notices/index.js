import { Col, Row } from "antd";
import React from "react";
import classes from "./styles.module.scss";

const Notices = () => {
  return (
    <div className="container">
      <Row>
        <Col span={8}>
          <div className={classes.noticeItem}>
            <span>RULES OF BUSINESS</span>
            <h2>
              Construction Business <br /> Responsibility
            </h2>
          </div>
        </Col>
        <Col span={8}>
          <div className={classes.noticeItemActive}>
            <span>NEW IMPROVEMENTS</span>
            <h2>
              Innovative industry <br /> solutions
            </h2>
          </div>
        </Col>
        <Col span={8}>
          <div className={classes.noticeItem}>
            <span>QUALITY SERVICES</span>
            <h2>
              Skilled & professional <br /> contractors
            </h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Notices;
