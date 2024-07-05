import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";
import React from "react";
import TestonomialCard from "./TestonomialCard";
const useStyles = makeStyles((theme) => ({
  testomonialmain: {
    padding: "30px 0px",
    "& .textbox": {
      textAlign: "center",
      "& h4": {
        fontWeight: "600",
        color: "#1C1C1C",
      },
      "& h5": {
        fontWeight: "500",
        color: "#797979",
      },
    },
    "& .contentbox": {
      background: " #EFEFEF",
      borderRadius: "8px",
      padding: "30px 60px 120px 60px",
      marginTop: "40px",
      [theme.breakpoints.down("sm")]: {
        padding: "30px 30px 90px 30px",
      },
    },
  },
}));
const testoCard = [
  {
    leadimg: "images/lead.png",
    text1:
      "   Lorem ipsum dolor sit amet consectetur. Auctor felis nibh non nulla sed elit quis. Etiam curabitur gravida venenatis facilisis urna integer. Faucibus porttitor dui viverra et pellentesque. Velit placerat justo duis diam.Lorem ipsum dolor sit amet consectetur. Auctor felis nibh non nulla sed elit quis. Etiam curabitur gravida venenatis facilisis urna integer.",
    avatarimg: "images/TestimonialAboutImage.png",
    text2: "JS Harsh",
    text3: " CEO, Mobiloitte",
  },
  {
    leadimg: "images/lead.png",
    text1:
      "   Lorem ipsum dolor sit amet consectetur. Auctor felis nibh non nulla sed elit quis. Etiam curabitur gravida venenatis facilisis urna integer. Faucibus porttitor dui viverra et pellentesque. Velit placerat justo duis diam.Lorem ipsum dolor sit amet consectetur. Auctor felis nibh non nulla sed elit quis. Etiam curabitur gravida venenatis facilisis urna integer.",
    avatarimg: "images/TestimonialAboutImage.png",
    text2: "JS Harsh",
    text3: " CEO, Mobiloitte",
  },
  {
    leadimg: "images/lead.png",
    text1:
      "   Lorem ipsum dolor sit amet consectetur. Auctor felis nibh non nulla sed elit quis. Etiam curabitur gravida venenatis facilisis urna integer. Faucibus porttitor dui viverra et pellentesque. Velit placerat justo duis diam.Lorem ipsum dolor sit amet consectetur. Auctor felis nibh non nulla sed elit quis. Etiam curabitur gravida venenatis facilisis urna integer.",
    avatarimg: "images/TestimonialAboutImage.png",
    text2: "JS Harsh",
    text3: " CEO, Mobiloitte",
  },
];
export default function TestimonialsAbout() {
  const classes = useStyles();

  return (
    <Box className={classes.testomonialmain}>
      <Container>
        <Box className="textbox">
          <Typography variant="h4">Testimonials</Typography>
          <Typography variant="h5">LOOK WHAT PEOPLE SAY ABOUT US</Typography>
        </Box>
        <Box className="contentbox">
          <Grid container spacing={2}>
            {testoCard &&
              testoCard.map((data, i) => {
                return (
                  <>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <TestonomialCard data={data} index={i} />
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </Box>
        <Box className="contentbox">
          <Grid container spacing={2}>
            {testoCard &&
              testoCard.map((data, i) => {
                return (
                  <>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <TestonomialCard data={data} index={i} />
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
