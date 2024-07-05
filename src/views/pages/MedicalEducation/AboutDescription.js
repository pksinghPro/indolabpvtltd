import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    "& h2": {
      fontSize: "24px",
    },
    "& h3": {
      fontWeight: "400",
      fontSize: "18px",
    },
    "& h4": {
      fontWeight: "600",
      fontSize: "24px",
    },
    "& .flexBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },
  },
  textBox: {
    "& h3": {
      fontWeight: "600",
      fontSize: "24px",
    },
    "& h2": {
      fontSize: "20px",
    },
    "& p": {
      fontSize: "16px",
      color: "#494949",
    },
    "& .medicalContant": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& h2": {
        fontSize: "24px",
      },
    },
  },
  alignText: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h2": {
      fontSize: "20px",
    },
  },
  imgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },
}));
export default function AboutDescription() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerBox} mt={3}>
      <Container>
        <Box className={classes.textBox}>
          <Box mt={7}>
            <Typography variant="h2">
              Description of Medical Education Cell
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
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
          <Box mt={2}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
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
          <Box mt={2}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
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
        </Box>
      </Container>
    </Box>
  );
}
