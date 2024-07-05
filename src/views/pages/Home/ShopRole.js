import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Container,
  Hidden,
} from "@material-ui/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    padding: "60px 0px 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px 50px",
    },
    "& .mainBox": {
      paddingBottom: "60px",
      position: "relative",
      zIndex: "999",
      textAlign: "center",
      "& h2": {
        color: "#3C3B3D",
        fontWeight: "600",
        fontSize: "50px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "36px",
        },
        "& span": {
          fontWeight: "400",
          color: "#712BC1",
        },
      },
      "& p": {
        width: "100%",
        maxWidth: "761px",
        margin: "0 auto",
        paddingTop: "10px",
      },
    },
    "& .backimg1": {
      position: "absolute",
      zIndex: "0",
      left: "106px",
      top: "21%",
    },
    "& .backimg2": {
      position: "absolute",
      zIndex: "0",
      right: "188px",
      bottom: "50px",
    },
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.1)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  },
}));

const internshipData = [
  {
    imagelead: "images/banner/fashion9.webp",
  },
  {
    imagelead: "images/banner/fashion2.webp",
  },
  {
    imagelead: "images/banner/fashion6.webp",
  },
  {
    imagelead: "images/banner/fashion9.webp",
  },
];

export default function ShopRole() {
  const classes = useStyles();
const history = useHistory()
  return (
    <Box className={classes.bannerBox}>
      <Hidden smDown>
      <img src="images/Vector1.png" className="backimg2 RotateLeft" />
      <img src="images/Vector2.png" className="backimg1 Rotate" />
      </Hidden>
      <Container>
        <Box className="mainBox">
          <AnimationOnScroll animateIn="bounceInLeft">
            <Typography variant="h2">
              <span>Shop By</span>
              <span style={{ color: "#FF860D" }}> Role</span>
            </Typography>
          </AnimationOnScroll>
          <Box mt={2}>
            <AnimationOnScroll animateIn="fadeInUp">
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
                molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut
                est urna euismod. Sit viverra id condimentum convallis dictum
                sed mauris.
              </Typography>
            </AnimationOnScroll>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {internshipData.map((data, i) => (
            <Grid key={i} item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.imageContainer} onClick={()=>history.push("/dress-collection")} style={{cursor:"pointer"}}>
                <img src={data.imagelead} alt={`Shop Role ${i + 1}`} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
