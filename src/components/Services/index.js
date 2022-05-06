import { Col, Row } from "antd";
import React from "react";
import styles from "./index.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className="container">
        <h2 className={styles.servicesHeading}>Services</h2>
        <Row justify="space-between">
          <Col xs={24} md={7}>
            <div className={styles.servicesItem}>
              <i class="fa-solid fa-paper-plane"></i>
              <h2>Power energies</h2>
              <p>
                There are many variations of passages of available but the have
                alteration in not avein that some
              </p>
              <a href="#">-- Read More</a>
            </div>
          </Col>
          <Col xs={24} md={7}>
            <div className={styles.servicesItem}>
              <i class="fa-solid fa-paper-plane"></i>
              <h2>Power energies</h2>
              <p>
                There are many variations of passages of available but the have
                alteration in not avein that some
              </p>
              <a href="#">-- Read More</a>
            </div>
          </Col>
          <Col xs={24} md={7}>
            <div className={styles.servicesItem}>
              <i class="fa-solid fa-paper-plane"></i>
              <h2>Power energies</h2>
              <p>
                There are many variations of passages of available but the have
                alteration in not avein that some
              </p>
              <a href="#">-- Read More</a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Services;
