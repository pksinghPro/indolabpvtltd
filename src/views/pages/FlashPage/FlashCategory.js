import React, { useState } from "react";
import { Box, Grid, makeStyles, Link, Container } from "@material-ui/core";
import Page from "src/component/Page";
import SubCategory from "./SubCategory";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0px",
  },
  TabBox: {
    "& .buttonBox": {
      "& a": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "400",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        fontFamily: "'Inter', sans-serif",
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

function FlashCategory(props) {
  const classes = useStyles();
  const [tabview, setTabView] = useState("SubCategory");
  const [index, setIndex] = useState("");
  const handleClick = (i) => {
    const tempArray = [...index];
    if (tempArray[i] == i) {
      tempArray[i] = undefined;
    } else {
      tempArray[i] = i;
    }
    setIndex(tempArray);
  };
  return (
    <>
      <Page title="Description">
        <Box className={classes.root}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box className={classes.TabBox}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={12}>
                      <Box className="buttonBox">
                        <Link
                          className={tabview === "SubCategory" ? "active" : " "}
                          onClick={() => {
                            setTabView("SubCategory");
                            setIndex("");
                          }}
                        >
                          <Box className={classes.dotedcircle}></Box>
                          Category-1
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={12}>
                      <Box className="buttonBox">
                        <Link
                          className={tabview === "Stories" ? "active" : " "}
                          onClick={() => setTabView("Stories")}
                        >
                          <Box className={classes.dotedcircle}></Box>
                          Category-2
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={12}>
                      <Box className="buttonBox">
                        <Link
                          className={tabview === "Formulated" ? "active" : " "}
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
                          className={tabview === "Achievement" ? "active" : " "}
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
                {tabview === "SubCategory" ? (
                  <SubCategory
                    handleClick={(i) => handleClick(i)}
                    index={index}
                  />
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Page>
    </>
  );
}

export default FlashCategory;
