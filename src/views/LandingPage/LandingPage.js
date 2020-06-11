import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Typography, Paper } from "@material-ui/core";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/kevin.jpg";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import styles from "assets/styles/views/landingPage.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Kevin's Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Hello World. </h1>
              <h4 className={classes.subtitle}>
                I'm Kevin. <br />
                <span style={{ color: "#7A7D7A" }}>Automation Specialist</span> <br />
                <span style={{ color: "#7A7D7A" }}>Web Application Developer</span>
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/channel/UCKn6ygkfQKWaQ3xQxqAvviw"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fas fa-play" />
                Youtube
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Paper>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img
                    src={profile}
                    alt="..."
                    className={classNames(
                      classes.imgRaised,
                      classes.imgRoundedCircle,
                      classes.imgFluid
                    )}
                  />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Kevin Lau Xian Lun</h3>
                  <h4>About Me</h4>
                  <Button justIcon link className={classes.margin5}>
                    <TwitterIcon style={{ color: "#778899" }} />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <FacebookIcon style={{ color: "#778899" }} />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <InstagramIcon style={{ color: "#778899" }} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
              Kevin (Lau) Xian Lun loves programming, self proclaims tech enthusiast, traveling and
              lifting heavy things. Currently His an Automation Sepcialist with a few years of Web
              Development experience specialised in frontend and backend for a dyanamic web apps.
            </p>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Studio",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}></GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Work",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}></GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Favorite",
                    tabIcon: Favorite,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}></GridItem>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </Paper>
        {/* <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img
                    src={profile}
                    alt="..."
                    className={classNames(
                      classes.imgRaised,
                      classes.imgRoundedCircle,
                      classes.imgFluid
                    )}
                  />
                </div>
                <div className={classes.name}>
                  Test
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
