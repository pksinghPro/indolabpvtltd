import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";
import React from "react";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: "30px 0px 50px 0px",
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
    "& h4": {
      textAlign: "center",
      fontWeight: "600",
    },
    "& .mainStories": {
      marginTop: "90px",
      "& p": {
        textAlign: "center",
        width: "100%",
        maxWidth: "509px",
        margin: "0 auto",
        [theme.breakpoints.down("xs")]: {
          maxWidth: "100%",
        },
      },
      "& h6": {
        color: "#1C1C1C",
        fontWeight: "600",
        margin: "8px 0px 5px",
        textAlign: "center",
      },
    },
    "& .MuiAvatar-root": {
      maxWidth: "74px",
      height: "74px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: "0 auto",
    },
  },
}));
const storiesData = [
  {
    img: "images/OurStories1.png",
    name: "Stories-1",
    contant:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    img: "images/OurStories1.png",
    name: "Stories-2",
    contant:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    img: "images/OurStories1.png",
    name: "Stories-3",
    contant:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    img: "images/OurStories1.png",
    name: "Stories-4",
    contant:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
];

export default function OurStories() {
  const classes = useStyles();
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  };
  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Box mb={2}>
          <Typography variant="h4">Indolab Stories</Typography>
        </Box>
        <Box className="sliderBox">
          <Slider {...settings} className="sliderstories">
            <figure className="postImg">
              <img src="images/OurStories.png" alt="" />
            </figure>

            <figure className="postImg">
              <img src="images/OurStories.png" alt="" />
            </figure>

            <figure className="postImg">
              <img src="images/OurStories.png" alt="" />
            </figure>
            <figure className="postImg">
              <img src="images/OurStories.png" alt="" />
            </figure>
          </Slider>
        </Box>
        <Box mt={4} className="mainStories">
          <Grid container spacing={3}>
            {storiesData &&
              storiesData.map((data, i) => {
                return (
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <Avatar src={data.img} alt="" />
                      <Typography variant="h6">{data.name}</Typography>
                      <Typography variant="body2">{data.contant}</Typography>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
