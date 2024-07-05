import {
  Box,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import TestimonialsCard from "./TestimonialsCard";
import { AnimationOnScroll } from "react-animation-on-scroll";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: "60px 0px",
    backgroundColor: "#f8f9fa",
    "& h2": {
      color: "#3C3B3D",
      fontWeight: "600",
      fontSize: "40px",
      marginBottom: "20px",
    },
  },
}));

const reviewsData = [
  {
    name: "Jass Norton",
    position: "Manager",
    review:
      "I love the quality of the clothes! They fit perfectly and the designs are just stunning.",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    position: "Fashion Blogger",
    review:
      "Great customer service and fast delivery. The fabric is really comfortable.",
    rating: 4,
  },
  {
    name: "John Doe",
    position: "Designer",
    review:
      "The variety of styles is amazing. I always find something that suits my taste.",
    rating: 5,
  },
  {
    name: "Jane Doe",
    position: "Model",
    review:
      "Good prices for the quality. I just wish they had more color options.",
    rating: 3,
  },
  {
    name: "Mark Johnson",
    position: "Stylist",
    review:
      "Fantastic range of products and excellent quality. Will definitely shop again.",
    rating: 5,
  },
  {
    name: "Emily Clarke",
    position: "Fashion Enthusiast",
    review:
      "Beautiful designs and fast delivery. The customer support was very helpful.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    position: "Shop Owner",
    review:
      "High-quality materials and excellent service. My go-to store for trendy clothes.",
    rating: 5,
  },
];

export default function CustomerReviews() {
  const classes = useStyles();
  const settings = {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Box style={{ textAlign: "center" }}>
          <AnimationOnScroll animateIn="bounceInRight">
            <Typography variant="h2">Customer Reviews</Typography>
          </AnimationOnScroll>
        </Box>
        <Box align="center">
          <Box style={{ maxWidth: "1000px" }}>
            <Slider {...settings} className="sliderscrol">
              {reviewsData.map((value, index) => (
                <TestimonialsCard key={index} value={value} />
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
