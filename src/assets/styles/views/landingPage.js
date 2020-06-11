import { container, title } from "assets/styles/material-kit-react.js";
import imagesStyle from "assets/styles/common/imagesStyles.js";
const landingPageStyle = {
  ...imagesStyle,
  name: {
    marginTop: "-80px"
  },
  container: {
    zIndex: "12",
    ...container,
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    textAlign: "center !important"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    // marginTop: "30px",
    // minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    // margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default landingPageStyle;
