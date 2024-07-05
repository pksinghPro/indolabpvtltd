import ProductHighlightCard from "src/component/ProductHighlightCard";
import {
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const useStyles = makeStyles((theme) => ({
  summerBox: {
    padding: "80px 0px",
    position: "relative",
    backgroundColor: "#f9f9f9",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0px",
    },
    "& .zoneBox": {
      "& h2": {
        fontSize: "48px",
        fontWeight: "700",
        color: "#333",
        "& span": {
          color: "#FF860D",
        },
      },
      "& p": {
        width: "100%",
        maxWidth: "800px",
        margin: "20px auto 0",
        fontSize: "18px",
        color: "#666",
      },
    },
    "& .cardBox": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: theme.spacing(3),
      marginTop: "40px",
    },
  },
}));

const productHighlights = [
  {
    text: "2000+",
    description: "Happy Customers",
    image: "images/banner/happycustomer.jpg",
  },
  {
    text: "500+",
    description: "Unique Designs",
    image: "images/banner/uniqedesign.jpg",
  },
  {
    text: "100+",
    description: "Exclusive Collections",
    image: "images/banner/exclusivedesign.jpg",
  },
  {
    text: "50+",
    description: "Top Brands",
    image: "images/banner/topbrand.jpg",
  },
];

export default function SummerCollection() {
  const classes = useStyles();

  return (
    <Box className={classes.summerBox}>
      <Container>
        <Box align="center" mb={3} className="zoneBox">
          <AnimationOnScroll animateIn="bounceInRight">
            <Typography variant="h2">
              Discover Our <span>Summer Collection</span>
            </Typography>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInUp">
            <Typography variant="body1">
              Explore the latest trends and find your perfect summer style with our exclusive collections.
            </Typography>
          </AnimationOnScroll>
        </Box>

        <Box className="cardBox">
          {productHighlights.map((highlight, index) => (
            <AnimationOnScroll animateIn="fadeInUp" delay={index * 200} key={index}>
              <ProductHighlightCard highlight={highlight} />
            </AnimationOnScroll>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
