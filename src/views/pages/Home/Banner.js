import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    "& .sliderBox": {
      position: "relative",
      "& .postImg": {
        width: "100%",
        margin: "0",
        overflow: "hidden",
        height: "100%",
        "& img": {
          width: "100%",
          minHeight: "100%",
          objectFit: "contain",
        },
      },
    },
    "& .imgmain": {
      maxWidth: "100%",
    },
  },
}));
export default function Banner() {
  const classes = useStyles();
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    fade: true,
  };
  return (
    <Box className={classes.bannerBox}>
      <Box className="sliderBox">
        <Slider {...settings} className="sliderdotdesign1">
          <img src="images/banner/bannerslide1.webp" className="imgmain" />
          <img src="images/banner/bannerslide2.webp" className="imgmain" />
        </Slider>
      </Box>
    </Box>
  );
}
