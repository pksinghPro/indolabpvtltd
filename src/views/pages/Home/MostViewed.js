import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "react-slick";
import MostViewedCard from "src/component/MostViewedCard";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    backgroundColor: "#fff8ed",
    padding: "60px 0px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
    "& .topText": {
      "& h2": {
        color: "#3C3B3D",
        fontWeight: "600",
        fontSize: "48px",
        marginBottom: theme.spacing(2),
        "& span": {
          fontWeight: "400",
          color: "#FF860D",
        },
      },
      "& p": {
        maxWidth: "800px",
        margin: "0 auto",
        color: "#666",
      },
    },
  },
}));

const viewedData = [
  {
    img: "/images/banner/trend1.webp",
    name: "Digital Printed Georgette Crop Top Set in Orange",
    price: "₹3,700.00",
  },
  {
    img: "/images/banner/trend2.webp",
    name: "Floral Print A-Line Dress",
    price: "₹2,999.00",
  },
  {
    img: "/images/banner/trend3.webp",
    name: "Men's Casual Denim Shirt",
    price: "₹1,899.00",
  },
  {
    img: "/images/banner/trend4.webp",
    name: "Women's Yoga Leggings",
    price: "₹999.00",
  },
  {
    img: "/images/banner/trend5.webp",
    name: "Sports Running Shoes",
    price: "₹2,499.00",
  },
  {
    img: "/images/banner/trend6.webp",
    name: "Vintage Leather Backpack",
    price: "₹4,599.00",
  },
  {
    img: "/images/banner/trend7.webp",
    name: "Wireless Bluetooth Earbuds",
    price: "₹1,299.00",
  },
  {
    img: "/images/banner/trend8.webp",
    name: "Classic Aviator Sunglasses",
    price: "₹899.00",
  },
  {
    img: "/images/banner/trend9.webp",
    name: "Smart Fitness Tracker",
    price: "₹3,199.00",
  },
];

export default function MostViewed() {
  const classes = useStyles();

  const settings = {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    centerPadding: "50px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "50px",
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "50px",
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
        <Box className="topText">
          <AnimationOnScroll animateIn="bounceInRight">
            <Typography variant="h2">
              Our Most <span>Viewed</span> <span style={{ color: "#FF860D" }}>Styles</span>
            </Typography>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp">
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie
              rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod.
              Sit viverra id condimentum convallis dictum sed mauris.
            </Typography>
          </AnimationOnScroll>
        </Box>
        <Box mt={7}>
        <Slider {...settings} className="sliderscrol">
            {viewedData?.map((product, index) => (
              <MostViewedCard key={index} data={product} />
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
