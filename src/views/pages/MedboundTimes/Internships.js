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
    padding: "30px 0px 50px 0px",
  },
  photoBox: {
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: "url('images/Internship.png')",
    padding: "20px",
  },
  mainBox: {
    "& h2": {
      fontSize: "24px",
    },
    "& h6": {
      fontWeight: "400",
      fontSize: "18px",
    },
    "& h4": {
      fontWeight: "600",
      fontSize: "24px",
    },
    "& h3": {
      fontSize: "18px",
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
    "& h2": {
      fontSize: "20px",
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
      "& h4": {
        fontSize: "24px",
        fontWeight: "600",
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
  },
  imgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },
}));
const intershipData = [
  {
    imagelead: "images/internshipImg1.png",
  },
  {
    imagelead: "images/internshipImg2.png",
  },
  {
    imagelead: "images/internshipImg3.png",
  },
  {
    imagelead: "images/internshipImg4.png",
  },
];
export default function Internships() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Box className={classes.mainBox}>
          <Box className="flexBox">
            <Box>
              <img src="images/medboundtimeslogo.png" alt="medboundtimeslogo" />
            </Box>
            <Box ml={1}>
              <Typography variant="h4">Indolab Times</Typography>
            </Box>
          </Box>
          <Box className="flexBox">
            <Typography variant="h6">
              <span style={{ color: "#FF860D" }}>
                Indolab | indolab@limited.com
              </span>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box mt={4} mb={4} className={classes.photoBox}>
        <Box>
          <Box display="flex" justifyContent="end">
            <span style={{ color: "#FFFFFF" }}>
              <Typography variant="h2">Indolab Times</Typography>
            </span>
          </Box>
          <Box display="flex" justifyContent="end">
            <span style={{ color: "#FF860D" }}>
              <Typography variant="h2">Internship</Typography>
            </span>
          </Box>
          <Box display="flex" justifyContent="end">
            <span style={{ color: "#FFFFFF" }}>
              <Typography variant="h2">Opportunities</Typography>
            </span>
          </Box>
        </Box>
      </Box>
      <Container>
        <Box className={classes.textBox}>
          <Box className="medicalContant">
            <Typography variant="h4">
              <span style={{ color: "#FF860D" }}>
                Medical Content Writing Internships
              </span>
            </Typography>
          </Box>
          <Box mt={7}>
            <Typography variant="h5">Description Of the Internship</Typography>
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
            <Typography variant="h5">Activities</Typography>
          </Box>
          <Box mt={1} mb={3}>
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
            {intershipData &&
              intershipData.map((data, i) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <img src={data.imagelead} alt="" width="100%" />
                    </Box>
                  </Grid>
                );
              })}
          </Grid>

          <Box mt={2}>
            <Typography variant="h5">Formats</Typography>
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
        </Box>
        <Box mt={3} className={classes.btnBox}>
          <Button
            variant="contained"
            color="secondary"
            className="buttonBOx"
            style={{ textTransform: "uppercase" }}
          >
            Click Here To Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
