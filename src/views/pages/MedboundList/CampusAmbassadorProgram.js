import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: "0px 0px 50px 0px",
  },
  photoBox: {
    "& .postImg": {
      width: "100%",
      margin: "0",
      overflow: "hidden",
      height: "100%",
      "& img": {
        width: "100%",
        minHeight: "100%",
        objectFit: "contain",
      },
    },
  },
  mainBox: {
    "& h5": {
      fontWeight: "600",
    },
    "& h2": {
      fontSize: "50px",
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
      justifyContent: "center",
    },
  },
  textBox: {
    "& h3": {
      fontWeight: "600",
      fontSize: "24px",
    },
    "& h5": {
      fontWeight: "600",
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
    "& h5": {
      fontWeight: "600",
    },
  },
  imgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },
}));
const leadPicture = [
  {
    imagelead: "images/ForumsAndSocialClubs1.png",
  },
  {
    imagelead: "images/ForumsAndSocialClubs2.png",
  },
  {
    imagelead: "images/ForumsAndSocialClubs3.png",
  },
  {
    imagelead: "images/ForumsAndSocialClubs4.png",
  },
];
export default function CampusAmbassadorProgram() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerBox}>
      <Box mt={4} mb={4} className={classes.photoBox}>
        <Box>
          <figure className="postImg">
            <img
              src="images/CampusAmbassadorProgram.png"
              alt="Horse Profile Images"
            />
          </figure>
        </Box>
      </Box>
      <Container>
        <Box className={classes.mainBox}>
          <Box mt={3} className="flexBox">
            <Typography variant="h4">
              <span style={{ color: "#FF860D" }}>
                Campus Ambassador Program
              </span>
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container>
        <Box className={classes.textBox}>
          <Box mt={7}>
            <Typography variant="h5">Description of forum</Typography>
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

          <Box mt={4}>
            <Typography variant="h5">Activities</Typography>
          </Box>
          <Box mt={1} mb={1}>
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
          <Grid container spacing={2}>
            {leadPicture &&
              leadPicture.map((data, i) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <img src={data.imagelead} alt="" width="100%" />
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
        <Box mt={2} className={classes.btnBox}>
          <Typography variant="h5">Sign-Up Links</Typography>
        </Box>
        <Box mt={2} className={classes.btnBox}>
          <Button variant="contained" color="secondary" className="buttonBOx">
            Click here to Become Campus Ambassador
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
