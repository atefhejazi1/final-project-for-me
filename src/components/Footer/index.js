import React from "react";
import { Col, Row } from "antd";
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Row>
          <Col xs={24} md={6}>
            <h2 className={styles.footerHeading}>Contact</h2>
            <ul className={styles.contactList}>
              <li><i class="fa-solid fa-location-dot"></i> <h4>660 Broklyn Street, 88 New York, USA</h4></li>
              <li><i class="fa-solid fa-envelope"></i><h4>needhelp@indutri.com</h4></li>
              <li><i class="fa-solid fa-phone-volume"></i><h4>666 888 0000</h4></li>
              <li>
                <ul className={styles.socialNetwork}>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col xs={24} md={6}>
            <h2 className={styles.footerHeading}>Company</h2>
            <ul className={styles.companyList}>
              <li><a href="#">About us</a></li>
              <li><a href="#">Latest events</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">News & articles</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </Col>
          <Col xs={24} md={6}>
            <h2 className={styles.footerHeading}>Services</h2>
            <ul className={styles.servicesList}>
              <li><a href="#">Petroleum and Gas</a></li>
              <li><a href="#">Industrial Construction</a></li>
              <li><a href="#">Chemical Research</a></li>
              <li><a href="#">Mechanical Engineering</a></li>
              <li><a href="#">Power Energies</a></li>
            </ul>
          </Col>
          <Col xs={24} md={6}>
            <h2 className={styles.footerHeading}>Latest News</h2>
            <Row>
              <Col span={24}>A</Col>
              <Col span={24}>B</Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
