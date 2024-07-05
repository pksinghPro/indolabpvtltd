import MentorCards from "src/component/MentorCards";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";

import React from "react";
const useStyles = makeStyles((theme) => ({
  internshipBox: {
    padding: "30px 0px 50px",
    "& h2": {
      color: "#3C3B3D",

      "& span": {
        fontWeight: "400",
      },
    },
  },
}));
const data = [
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
  { img: "images/mentor.png" },
];

export default function Mentorsection() {
  const classes = useStyles();

  return (
    <Box className={classes.internshipBox}>
      <Container>
        <Box mt={2} mb={1}>
          <Typography variant="h3">Our Mentors And Teachers</Typography>
        </Box>
        <Typography variant="h6">
          The Medical Education Cell |{" "}
          <span style={{ color: "#712BC1" }}>Med</span>
          <span style={{ color: "#FF860D" }}> Bound</span>
        </Typography>
<Box mt={4}>

        <Grid container spacing={3}>
          {data.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MentorCards data={data} index={index} />
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>
    </Box>
  );
}
