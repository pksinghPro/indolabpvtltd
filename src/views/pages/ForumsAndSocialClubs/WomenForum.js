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
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: "0px 0px 50px 0px",
  },
  photoBox: {
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: "#F5F5F5",
    padding: "20px 100px",
    "& h2": {
      textAlign: "center",
      color: "#737373",
      fontSize: "40px",
    },
  },
  mainBox: {
    "& h2": {
      fontSize: "50px",
    },
    "& h6": {
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
export default function WomenForum() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.bannerBox}>
      <Box mb={4} className={classes.photoBox}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box>
              <img
                src="./images/WomenFourmImg.png"
                className="img1"
                alt=""
                width="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Box className={classes.mainBox}>
          <Box className="flexBox">
            <Box ml={1}>
              <Typography variant="h2">Forums & Social Clubs</Typography>
            </Box>
          </Box>
          <Box className="flexBox" ml={1} mt={3}>
            <Typography variant="h6">
              <span style={{ color: "#FF860D" }}>
                The medical education cell |{" "}
                <span style={{ color: "#712BC1" }}>Med</span>Bound
              </span>
            </Typography>
          </Box>
          <Box mt={3} className="flexBox">
            <Typography variant="h4">
              <span style={{ color: "#FF860D" }}>MB Women's Forums</span>
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

          <Box mt={2}>
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

          <Box mt={3} mb={3}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <Box p={1}>
                  <img
                    src="./images/WomenForum6.png"
                    className="img1"
                    alt=""
                    width="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <Box p={1}>
                  <img
                    src="./images/WomenForum5.png"
                    className="img1"
                    alt=""
                    width="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <Box p={1}>
                  <img
                    src="./images/WomenForum4.png"
                    className="img1"
                    alt=""
                    width="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <Box p={1}>
                  <img
                    src="./images/WomenForum3.png"
                    className="img1"
                    alt=""
                    width="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Typography variant="h5">Formated</Typography>
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
            onClick={() => history.push("/men-fourm")}
          >
            Click Here To Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
