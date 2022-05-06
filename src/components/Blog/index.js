import { Col, Row } from "antd";
import React from "react";
import styles from "./styles.module.scss";

const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className="container">
                <Row justify="space-between">
                    <Col xs={24} md={7} >
                        <div className={styles.blogItem}>
                            <img src="images/blog/01.jpg" alt="" />
                            <h2>Digital technology internships a win for students and businesses</h2>
                        </div>
                    </Col>
                    <Col xs={24} md={7}>
                        <div className={styles.blogItem}>
                            <img src="images/blog/02.jpg" alt="" />
                            <h2>Digital technology internships a win for students and businesses</h2>
                        </div>
                    </Col>
                    <Col xs={24} md={7}>
                        <div className={styles.blogItem}>
                            <img src="images/blog/03.jpg" alt="" />
                            <h2>Digital technology internships a win for students and businesses</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;
