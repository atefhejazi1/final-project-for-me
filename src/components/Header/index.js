import React from "react";
import classes from "./styles.module.scss";

import { Carousel } from "antd";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderWebsite = () => {
  return (
    <div>
      <Header className={classes.flex}>
        <div className={classes.logo}>PMS</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["4"]}>
          <Menu.Item className={classes.item}>Home</Menu.Item>
          <Menu.Item className={classes.item}>About</Menu.Item>
          <Menu.Item className={classes.item}>Services</Menu.Item>
          <Menu.Item className={classes.item}>Electronic Orders</Menu.Item>
        </Menu>
      </Header>
      <Carousel autoplay>
        <div>
          <img
            className={classes.imageHeaderStyle}
            src="images/header/01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={classes.imageHeaderStyle}
            src="images/header/02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={classes.imageHeaderStyle}
            src="images/header/03.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeaderWebsite;
