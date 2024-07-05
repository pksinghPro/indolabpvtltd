import {
  Box,
  Container,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  referFriendBox: {
    padding: "100px 0",
    position: "relative",
    background: "url('images/banner/referbg.avif')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
    },
  },
  mainBox: {
    background: "rgba(0, 0, 0, 0.7)",
    padding: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "20px",
      flexDirection: "column",
    },
  },
  contentBox: {
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      marginBottom: "20px",
    },
  },
  header: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  paragraph: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#ccc",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  rewardText: {
    fontSize: "24px",
    fontWeight: "500",
    marginBottom: "30px",
    color: "#FF860D",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  referButton: {
    background: "#FF860D",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "uppercase",
    borderRadius: "5px",
    transition: "background 0.3s",
    "&:hover": {
      background: "#e07500",
    },
  },
  imageBox: {
    textAlign: "center",
    maxWidth: "45%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    "& img": {
      maxWidth: "100%",
      borderRadius: "10px",
    },
  },
}));

export default function ReferFriend() {
  const classes = useStyles();

  return (
    <Box className={classes.referFriendBox}>
      <Container>
        <Box className={classes.mainBox}>
          <Box className={classes.contentBox}>
            <Typography variant="h2" className={classes.header}>
              Refer a Friend, Get Rewards!
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Share the love for fashion! Refer your friends and earn exclusive
              discounts on your next purchase.
            </Typography>
            <Typography variant="body1" className={classes.rewardText}>
              Invite friends and get $150 for each new friend that shops with us. Plus, they get $150 off too!
            </Typography>
            <Button className={classes.referButton}>Refer Now</Button>
          </Box>
          <Box className={classes.imageBox}>
            <img src="images/banner/referchain.jpg" alt="Refer a Friend" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
