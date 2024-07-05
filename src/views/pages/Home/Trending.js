import {
  Box,
  Container,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "react-slick";
import Gallerycards from "src/component/Gallerycards";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    backgroundColor: "#fff8ed",
    padding: "30px 0px ",
    "& .topText": {
      "& h2": {
        color: "#3C3B3D",
        fontWeight: "600",
        fontSize: "50px",
        "& span": {
          fontWeight: "400",
          color: "#712BC1",
        },
      },
      "& p": {
        width: "100%",
        maxWidth: "761px",
        margin: "0 auto",
        paddingTop: "10px",
      },
    },
  },
}));
const productData = [
  {
    img: "images/banner/trend1.webp",
  },
  {
    img: "images/banner/trend2.webp",
  },
  {
    img: "images/banner/trend3.webp",
  },
  {
    img: "images/banner/trend4.webp",
  },
  {
    img: "images/banner/trend5.webp",
  },
  {
    img: "images/banner/trend6.webp",
  },
  {
    img: "images/banner/trend7.webp",
  },
  {
    img: "images/banner/trend8.webp",
  },
  {
    img: "images/banner/trend9.webp",
  },
];
export default function Trending() {
  const classes = useStyles();
  const settings = {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    centerPadding: "80px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "80px",
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "80px",
          autoplay: true,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          centerMode: false,

          autoplay: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,

          autoplay: true,
        },
      },
    ],
  };
  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Box align="center" className="topText">
          <AnimationOnScroll animateIn="bounceInRight">
            <Typography variant="h2">
              Trending
              <span>This</span>
              <span style={{ color: "#FF860D" }}>Week</span>
            </Typography>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp">
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.
            </Typography>
          </AnimationOnScroll>
        </Box>
        <Box mt={7}>
          <Slider {...settings} className="sliderscrol">
            {productData &&
              productData.map((data, index) => {
                return (
                  <Box>
                    <Gallerycards data={data} index={index} />
                  </Box>
                );
              })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
