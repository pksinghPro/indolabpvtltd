import React, { useState } from "react";
import {
  Box,
  Grid,
  makeStyles,
  Link,
  Container,
  Typography,
  Avatar,
} from "@material-ui/core";
import Page from "src/component/Page";
import CareerAndTrainings from "./CareerAndTrainings";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 0px 50px 0px",
    "& .medicalContant": {
      "& h4": {
        fontSize: "24px",
        fontWeight: "600",
        textAlign: "center",
      },
    },
    "& .postImg": {
      width: "100%",
      margin: "0",
      overflow: "hidden",
      height: "100%",
      "& img": {
        width: "100%",
        minHeight: "100%",
        objectFit: "contained",
      },
    },
    "& .maintimes": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& h4": {
        fontWeight: "600",
        color: "#1C1C1C",
        marginLeft: "10px",
      },
      "& .MuiAvatar-root": {
        width: "32px",
        height: "32px",
      },
    },
  },
  TabBox: {
    "& .buttonBox": {
      "& a": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "400",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        alignItems: "center",
        fontSize: "14px",
        color: "#A7A7A7",
        height: "45px",
        "&:hover": {
          textDecoration: "none",
          color: "#bca7f9",
        },
        "&.active": {
          color: "#FF860D",
        },
        "& svg": {
          margin: "0px 10px",
          fontSize: "24px",
        },
      },
    },
  },

  dotedcircle: {
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    backgroundColor: "#D8D8D8",
    margin: "0px 25px",
  },
}));

function Index(props) {
  const classes = useStyles();
  const [tabview, setTabView] = useState("Description");
  return (
    <>
      <Page title="Description">
        <Box className={classes.root}>
          <Container>
            <Box className="maintimes" mb={1}>
              <Avatar src="images/timesavtar.png" />
              <Typography variant="h4">Indolab Times</Typography>
            </Box>
            <Typography
              variant="h6"
              style={{ color: "#FF860D", textAlign: "center" }}
            >
              Indolab | indolab@limited.com
            </Typography>
          </Container>
          <Box mt={4} mb={4}>
            <figure className="postImg">
              <img src="images/training.png" alt="" />
            </figure>
          </Box>
          <Box className="medicalContant">
            <Typography variant="h4">
              <span style={{ color: "#FF860D" }}>
                Desk Editor At Indolab Times
              </span>
            </Typography>
          </Box>
          <Box mt={7}>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box className={classes.TabBox}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4} md={12}>
                        <Box className="buttonBox">
                          <Link
                            className={
                              tabview === "Description" ? "active" : " "
                            }
                            onClick={() => setTabView("Description")}
                          >
                            <Box className={classes.dotedcircle}></Box>
                            Desk Editor At Indolab Times
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={4} md={12}>
                        <Box className="buttonBox">
                          <Link
                            className={tabview === "Stories" ? "active" : " "}
                            onClick={() => setTabView("Stories")}
                          >
                            <Box className={classes.dotedcircle}></Box>
                            Written & Spoken English Course
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={12}>
                        <Box className="buttonBox">
                          <Link
                            className={
                              tabview === "Formulated" ? "active" : " "
                            }
                            onClick={() => setTabView("Formulated")}
                          >
                            <Box className={classes.dotedcircle}></Box>
                            Category-3
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={12}>
                        <Box className="buttonBox">
                          <Link
                            className={
                              tabview === "Achievement" ? "active" : " "
                            }
                            onClick={() => setTabView("Achievement")}
                          >
                            <Box className={classes.dotedcircle}></Box>
                            Category-4
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={12}>
                        <Box className="buttonBox">
                          <Link
                            className={tabview === "MeetTeam" ? "active" : " "}
                            onClick={() => setTabView("MeetTeam")}
                          >
                            <Box className={classes.dotedcircle}></Box>
                            Category-5
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={12}>
                        <Box className="buttonBox">
                          <Link
                            className={tabview === "Opinions" ? "active" : " "}
                            onClick={() => setTabView("Opinions")}
                          >
                            <Box className={classes.dotedcircle}></Box>
                            Category-6
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={4} md={12}>
                        <Box className="buttonBox">
                          <Link
                            className={tabview === "Programs" ? "active" : " "}
                            onClick={() => setTabView("Programs")}
                          >
                            <Box className={classes.dotedcircle}></Box>
                            Category-7
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={9} md={9}>
                  {tabview === "Description" ? <CareerAndTrainings /> : ""}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Page>
    </>
  );
}

export default Index;
