import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const useStyles = makeStyles((theme) => ({
  appdownloadBox: {
    background:
      "linear-gradient(270.04deg, #FF860D 35.89%, rgba(255, 255, 255, 0.567708) 58.91%, #FF860D 89.14%)",
    padding: "50px 0px",
    marginTop: "-5px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
    "& h3": {
      color: "#000",
      fontWeight: "600 !important",

      "& span": {
        fontWeight: "400",
      },
    },
    "& .appBox": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    "& .displayStart": {
      [theme.breakpoints.down("xs")]: {
        paddingTop: "20px",
        justifyContent: "center",
      },
    },
    "& .btnimg": {
      maxWidth: "200px",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100px",
      },
      cursor: "pointer",
    },
  },
}));

export default function Appdownload() {
  const classes = useStyles();

  return (
    <Box className={classes.appdownloadBox}>
      <Box className="appBox">
        <AnimationOnScroll animateIn="bounceInLeft">
          <Typography variant="h3">
            Download<span style={{ color: "#712BC1" }}>{" "}INDOLAB</span>{" "}
            <span style={{ color: "#FF860D" }} >FASHION</span> App
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="fadeInUp">
          <Box ml={3} className="displayStart">
            <img src="images/google.png" className="btnimg" />
            <Box ml={2}>
              <img src="images/apple.png" className="btnimg" />
            </Box>
          </Box>
        </AnimationOnScroll>
      </Box>
    </Box>
  );
}
