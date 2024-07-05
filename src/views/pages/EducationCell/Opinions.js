import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Divider,
  Container,
} from "@material-ui/core";
import OpinionSlider from "./OpinionSlider";
const useStyles = makeStyles((theme) => ({
  descriptionbox: {
    padding: "10px 0px",
    "& .textbox": {
      "& h4": {
        fontSize: "24px",
        fontWeight: "500",
        color: "#1C1C1C",
      },
      "& p": {
        marginTop: "20px",
      },
    },
  },
  sliderdown: {
    marginTop: "50px",
  },
}));

function Opinions() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.descriptionbox}>
        <Box className="textbox">
          <Typography variant="h4">Opinions of Team Members</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie
            rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna
            euismod. Sit viverra id condimentum convallis dictum sed
            mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
            molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
            urna euismod.
          </Typography>
        </Box>
        <Box className={classes.sliderdown}>
          <Container maxWidth="md">
            <OpinionSlider />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Opinions;
