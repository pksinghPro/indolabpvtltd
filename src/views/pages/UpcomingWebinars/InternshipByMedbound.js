import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const useStyles = makeStyles((theme) => ({
  internshipBox: {
    padding: "20px 0px 30px",
    "& h3": {
      color: "#494949",
      "& span": {
        fontWeight: "500",
        color: "#FF860D",
      },
    },
    "& h6": {
      color: "#494949",
      fontSize: "20px",
      fontWeight: "500",
    },
  },
}));

export default function InternshipByMedbound() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.internshipBox}>
      <Container>
        <Box mt={3} mb={1}>
          <AnimationOnScroll animateIn="fadeInLeft">
            <Typography variant="h3">
              Internships by <span style={{ color: "#712BC1" }}>Med</span>
              <span>Bound</span>
            </Typography>
          </AnimationOnScroll>
        </Box>
        <Typography variant="h6">The medical Education Cell</Typography>
        <Box my={2}>
          <img src="images/internbanner.png" width="100%" />
        </Box>
        <Typography variant="h6" style={{ color: "#1C1C1C" }}>
          1 - Discussion HUB Internship :
        </Typography>
        <Box my={2}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie
            rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna
            euismod. Sit viverra id condimentum convallis dictum sed
            mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
            molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
            urna euismod. Sit viverra id condimentum convallis dictum sed
            mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
            molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
            urna euismod. Sit viverra id condimentum convallis dictum sed
            mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
            molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
            urna euismod. Sit viverra id condimentum convallis dictum sed
            mauris.
          </Typography>
        </Box>
        <Box my={3}>
          <Button variant="contained" color="secondary">
            Click here to register
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
