import React from "react";
import { Box, makeStyles, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  photoBox: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: "50px 0px",
    },
    "&:hover": {
      transform: " scale(1.1)",
      transition: "1.00s",
      marginTop: "-50px",
    },
  },
  mainBox: {
    background: "#949494",
    padding: "20px 20px 40px 20px",
    borderRadius: "8px",

    "& .flexBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& p": {
      fontSize: "10px",
      color: "#FFFFFF",
    },
  },
  cardBox: {
    position: "absolute",
    marginTop: "-8%",
    right: "36%",
    "& .flexBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& h6": {
      textAlign: "center",
    },
    "& p": {
      fontSize: "14px",
      color: "#494949",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10%",
      right: "31%",
    },
  },
}));

export default function AboutUsTestimonialsCard() {
  const classes = useStyles();

  return (
    <Box className={classes.photoBox}>
      <Box className={classes.mainBox}>
        <Box className="flexBox">
          <img src="./images/CommaImg.png" alt="" />
        </Box>
        <Box mt={1}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Auctor felis nibh non nulla
            sed elit quis. Etiam curabitur gravida venenatis facilisis urna
            integer. Faucibus porttitor dui viverra et pellentesque. Velit
            placerat justo duis diam.Lorem ipsum dolor sit amet consectetur.
            Auctor felis nibh non nulla sed elit quis. Etiam curabitur gravida
            venenatis facilisis urna integer.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.cardBox}>
        <Box>
          <img
            src="./images/TestimonialAboutImage.png"
            alt=""
            maxWidth="69px"
          />
        </Box>
        <Box mt={1}>
          <Typography variant="body2">Umair Siddiqui</Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="body2">
            <span style={{ color: "#712BC1" }}>CEO, Infosys</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
