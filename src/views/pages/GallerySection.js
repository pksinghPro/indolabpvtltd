import Gallerycards from "src/component/Gallerycards";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  galleryBox: {
    padding: "30px 0px 100px",
    "& .sliderBox": {
      paddingTop: "50px",
    },
    "& h5": {
      fontWeight: "600",
    },
  },
}));
const data = [
  {
    img: "images/banner/trend1.webp",
  },
  {
    img: "images/banner/trend1.webp",
  },
  {
    img: "images/banner/trend1.webp",
  },
  {
    img: "images/banner/trend1.webp",
  },
  {
    img: "images/banner/trend1.webp",
  },
  {
    img: "images/banner/trend1.webp",
  },
];
export default function GallerySection() {
  const classes = useStyles();
  const settings = {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    centerPadding:'80px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding:'80px',
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding:'80px',
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
    <Box className={classes.galleryBox}>
      <Container>
        <Box className="displayCenter">
          <img src="images/gallerylogo.png" />
          <Box ml={1}>
            <Typography variant="h5">Gallery & Memories</Typography>
          </Box>
        </Box>
        <Box align="center" mt={1}>
          <Typography variant="body1" style={{ color: "#FF860D" }}>
            Indolab | mbl@indolab.com
          </Typography>
        </Box>
        <Box className="sliderBox">
          <Box mb={1}>
            <Typography variant="h5" style={{ fontWeight: "600" }}>
              Our Offline Events
            </Typography>
          </Box>
          <Slider {...settings} className="sliderscrol">
            {data.map((data, index) => (
              <Gallerycards data={data} index={index} />
            ))}
          </Slider>
        </Box>
        <Box className="sliderBox">
          <Box mb={1}>
            <Typography variant="h5" style={{ fontWeight: "600" }}>
              Competitions-Post by Our Members
            </Typography>
          </Box>
          <Slider {...settings} className="sliderscrol">
            {data.map((data, index) => (
              <Gallerycards data={data} index={index} />
            ))}
          </Slider>
        </Box>
        <Box className="sliderBox">
          <Box mb={1}>
            <Typography variant="h5">
              Webinars and Orientation shops{" "}
            </Typography>
          </Box>
          <Slider {...settings} className="sliderscrol">
            {data.map((data, index) => (
              <Gallerycards data={data} index={index} />
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
