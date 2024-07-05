import React from "react";
import Slider from "react-slick";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainslide: {
    "& p": {
      color: "#494949",
      paddingLeft: "50px",
      paddingTop: "12px",
    },
  },
}));
const OpinionSlider = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainslide}>
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <img
            src="images/domain.png"
            alt=""
            width="100%"
            style={{ width: "100%", maxWidth: "190px" }}
          />
        </Grid>
        <Grid item lg={9} md={9} sm={8} xs={12}>
          <Box display="flex" alignItems="center">
            <img
              src="images/comment.png"
              alt=""
              width="100%"
              style={{ width: "100%", maxWidth: "21px" }}
            />
            <img
              src="images/comment.png"
              alt=""
              width="100%"
              style={{ width: "100%", maxWidth: "21px" }}
            />
          </Box>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie
            rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna
            euismod. Sit viverra id condimentum convallis dictum sed
            mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
            molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
            urna euismod.
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Box display="flex" alignItems="center">
              <img
                src="images/rightcomm.png"
                alt=""
                width="100%"
                style={{ width: "100%", maxWidth: "21px" }}
              />
              <img
                src="images/rightcomm.png"
                alt=""
                width="100%"
                style={{ width: "100%", maxWidth: "21px" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function SimpleSlider() {
  var settings = {
    dots: true,
    fade: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    className: "slides",
  };
  return (
    <Slider {...settings} className="slideropinion">
      <div>
        <OpinionSlider />
      </div>
      <div>
        <OpinionSlider />
      </div>
      <div>
        <OpinionSlider />
      </div>
    </Slider>
  );
}
