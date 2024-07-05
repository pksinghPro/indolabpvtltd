import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  descriptionbox: {
    padding: "10px 0px",

    "& h4": {
      fontSize: "24px",
      fontWeight: "500",
      color: "#1C1C1C",
    },
    "& .textbox": {
      paddingLeft: "30px",
      paddingRight: "30px",
      marginTop: "-100px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "-74px",
      },
      "& p": {
        color: "#FFFFFF",
        marginTop: "12px",
        marginBottom: "12px",
        textAlign: "center",
      },
      "& h4": {
        fontSize: "24px",
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
      },
    },
    "& .folowerbox": {
      backgroundColor: "#712BC1",
      padding: "10px",
      height: "100%",
      "& img": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      },
    },
  },
  downsubtext: {
    marginTop: "90px",
  },
}));

function Achievement() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.descriptionbox}>
        <Box>
          <Typography variant="h4">Achievements</Typography>
          <Box mt={4} mb={3}>
            <img src="images/achivementimg.png" alt="" width="100%" />
          </Box>

          <Box className="textbox">
            <Grid container spacing={3}>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="folowerbox">
                  <Box>
                    <img
                      src="images/trained.png"
                      alt=""
                      width="100%"
                      style={{
                        width: "100%",
                        maxWidth: "48px",
                      }}
                    />
                    <Box>
                      <Typography variant="body1">Interns Trained</Typography>
                      <Typography variant="h4">2.5K</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="folowerbox">
                  <Box>
                    <img
                      src="images/issue.png"
                      alt=""
                      width="100%"
                      style={{
                        width: "100%",
                        maxWidth: "45px",
                      }}
                    />
                    <Box>
                      <Typography variant="body1">Interns Trained</Typography>
                      <Typography variant="h4">2.5K</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="folowerbox">
                  <Box>
                    <img
                      src="images/user.png"
                      alt=""
                      width="100%"
                      style={{
                        width: "100%",
                        maxWidth: "40px",
                      }}
                    />
                    <Box>
                      <Typography variant="body1">Interns Trained</Typography>
                      <Typography variant="h4">2.5K</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box className="folowerbox">
                  <Box>
                    <img
                      src="images/reward.png"
                      alt=""
                      width="100%"
                      style={{
                        width: "100%",
                        maxWidth: "35px",
                      }}
                    />
                    <Box>
                      <Typography variant="body1">Interns Trained</Typography>
                      <Typography variant="h4">2.5K</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Achievement;
