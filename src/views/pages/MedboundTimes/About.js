import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: "30px 0px",
    "& .textmain": {
      "& h5": {
        fontWeight: "500",
      },
      "& p": {
        margin: "10px 0px 30px",
      },
      "& h6": {
        color: "#FF860D",
        textDecorationLine: "underline",
        cursor: "pointer",
      },
    },
    "& h4": {
      fontWeight: "600",
      color: "#1C1C1C",
      marginLeft: "10px",
    },
    "& .maintimes": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .MuiAvatar-root": {
      width: "32px",
      height: "32px",
    },
  },
}));
const aboutData = [
  {
    text1: "About Indolab Times",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
  {
    text1: "Features",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
  {
    text1: "DocScopy",
    link: "Link",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
  {
    text1: "MedTeachers",
    link: "Link",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
  {
    text1: "MedSights",
    link: "Link",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
  {
    text1: "Scholarly Articles",
    link: "Link",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
  {
    text1: "Institute University",
    link: "Link",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
  {
    text1: "Scholarly Activities",
    link: "Link",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.",
  },
];
export default function About() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Box className="maintimes" mb={1}>
          <Avatar src="images/logo.svg" />
          <Typography variant="h4">Indolab Times</Typography>
        </Box>
        <Typography
          variant="h6"
          style={{ color: "#FF860D", textAlign: "center" }}
        >
          Indolab | indolab@limited.com
        </Typography>
        <Box mt={5}>
          <Grid container>
            {aboutData &&
              aboutData.map((data, i) => {
                return (
                  <Grid item lg={12} md={12} xs={12}>
                    <Box className="textmain">
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5">{data.text1}</Typography>
                        <Typography variant="h6">{data.link}</Typography>
                      </Box>
                      <Typography variant="body1">{data.text2}</Typography>
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
