import { Button, Col, Row } from "antd";
import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <Row>
          <Col xs={24} md={12}>
            <img className={styles.aboutImage} src="images/About/03.jpg" />
          </Col>
          <Col xs={24} md={11} offset={1}>
            <h2>
              <span>AB</span>out Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              officiis impedit commodi mollitia ad a eius dolorem molestiae
              velit? Odio tempora atque dolores rerum ducimus sit voluptate ut
              odit neque repellat vitae aspernatur consequatur, harum est?
              Aperiam, vel excepturi? Ipsum, culpa voluptates. Animi distinctio,
              iure aut possimus dolorum autem ipsa perferendis tenetur pariatur
              temporibus repellendus consectetur minima iusto ducimus eos et!
              Id, debitis. Molestiae quidem praesentium hic vitae eius aliquid
              cumque libero maxime necessitatibus sunt voluptatibus adipisci aut
              exercitationem, eligendi sequi commodi sapiente, architecto
              aliquam, ducimus at quis odit id est. Recusandae quibusdam
              voluptas deleniti quasi molestiae porro ipsa accusamus!
            </p>
            <div className={styles.btnInfo}>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
