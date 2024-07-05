import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import React from "react";
import FashionCard from "src/component/FashionCard";
import { AnimationOnScroll } from "react-animation-on-scroll";

const useStyles = makeStyles((theme) => ({
  productShowcaseBox: {
    padding: "60px 0px",
    position: "relative",
    "& .mainbox": {
      paddingBottom: "70px",
      "& h2": {
        fontSize: "50px",
        fontWeight: "600",
        color: "#1F1F1F",
        "& span": {
          color: "#712BC1",
          fontWeight: "400",
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
    img: "images/banner/sari.jpg",
    title: "Elegant Saree",
    description: "Beautifully crafted saree for special occasions.",
    price: "$120",
  },
  {
    img: "images/banner/salwar.jpg",
    title: "Designer Salwar Kameez",
    description: "Comfortable and stylish Salwar Kameez.",
    price: "$90",
  },
  {
    img: "images/banner/lehanga.jpg",
    title: "Traditional Lehenga",
    description: "Perfect for weddings and festive celebrations.",
    price: "$150",
  },
];

export default function ProductShowcase() {
  const classes = useStyles();

  return (
    <Box className={classes.productShowcaseBox}>
      <Container>
        <Box align="center" className="mainbox">
          <AnimationOnScroll animateIn="bounceInLeft">
            <Typography variant="h2">
              Our <span style={{ color: "#FF860D" }}>Collection</span>
            </Typography>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp">
            <Typography variant="body1">
              Discover our exclusive collection of traditional and modern outfits crafted with love and precision.
            </Typography>
          </AnimationOnScroll>
        </Box>
        <Grid container spacing={3}>
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimationOnScroll animateIn="fadeInUp" delay={index * 300}>
                <FashionCard product={product} />
              </AnimationOnScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
