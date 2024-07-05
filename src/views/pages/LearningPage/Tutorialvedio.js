import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  internshipBox: {
    padding: "20px 0px 50px",
    "& h2": {
      color: "#3C3B3D",

      "& span": {
        fontWeight: "400",
      },
    },
    "& h5": {
      color: "#1C1C1C",
      fontWeight: "600",
    },
  },
}));

export default function Tutorialvedio() {
  const classes = useStyles();

  return (
    <Box className={classes.internshipBox}>
      <Container>
        <Box mt={2} mb={1}>
          <Typography variant="h3">Learning Tutorials</Typography>
        </Box>
        <Typography variant="h6">
          The Medical Education Cell |{" "}
          <span style={{ color: "#712BC1" }}>Med</span>
          <span style={{ color: "#FF860D" }}> Bound</span>
        </Typography>
        <Box my={2}>
          <img src="images/learnvid.png" width="100%" />
        </Box>
        <Typography variant="h5">Placenta Abruption</Typography>
        <Box my={1}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consect eturtinc idunt molestie rhoncus a
            ac.
          </Typography>
        </Box>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie
          rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod.
          Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum
          dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.
          Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra
          id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet
          consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est
          aliquet eu duis ultricies ut est urna euismod. Sit viverra id
          condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet
          consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est
          aliquet eu duis ultricies ut est urna euismod. Sit viverra id
          condimentum convallis dictum sed mauris.
        </Typography>
      </Container>
    </Box>
  );
}
