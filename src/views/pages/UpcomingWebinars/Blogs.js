import React from "react";
import { Box, Container, Typography, makeStyles, Grid } from "@material-ui/core";
import BlogsCard from "src/component/BlogsCard";

const useStyles = makeStyles((theme) => ({
  sectionBox: {
    padding: "30px 0px 50px",
    "& h2": {
      color: "#3C3B3D",
      "& span": {
        fontWeight: "400",
      },
    },
  },
}));

const fashionTipsData = [
  { 
    img: "images/blog1.jpg",
    title: "Choosing the Right Fit",
    description: "Discover how to pick clothes that fit your body type and enhance your look.",
  },
  { 
    img: "images/blog2.jpg",
    title: "Seasonal Trends",
    description: "Stay updated with the latest fashion trends for this season and how to incorporate them into your wardrobe.",
  },
  { 
    img: "images/blog3.jpg",
    title: "Accessorizing Smartly",
    description: "Learn about the art of accessorizing to elevate your outfit effortlessly.",
  },
  { 
    img: "images/blog4.jpg",
    title: "Mixing Patterns",
    description: "Master the skill of mixing different patterns and prints for a stylish ensemble.",
  },
  { 
    img: "images/blog5.jpg",
    title: "Color Coordination",
    description: "Understand how to match colors effectively to create cohesive and eye-catching outfits.",
  },
  { 
    img: "images/blog2.jpg",
    title: "Care Tips",
    description: "Discover essential tips on how to care for your clothes to make them last longer and look great.",
  },
];

export default function FashionTips() {
  const classes = useStyles();

  return (
    <Box className={classes.sectionBox}>
      <Container>
        <Box mt={2} mb={1}>
          <Typography variant="h3">Fashion Tips</Typography>
        </Box>
        <Grid container spacing={3}>
          {fashionTipsData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <BlogsCard data={data} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
