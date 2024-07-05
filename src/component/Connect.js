import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    zIndex: "10",
    background: "#fff",
    "& .imgBOx":{
      overflow:"hidden", width: "100%",
      height: "100%",
    },
    "& .mainimg": {
      transition:"0.5s",
      width: "100%",
      height: "100%",
      "&:hover":{
        transform:"scale(1.1)",
      }
    },
    "& p": {
      maxWidth: "200px",
    },
    "& h6": {
      maxWidth: "200px",
      color: "#3C3B3D",
      fontWeight: "500",
    },
    "& .mainBox1": {
      background: "#fff",
    },
    "& .topHeight": {
      paddingTop: "25px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "10px",
      },
    },
    "& .connectimg1": {
      maxWidth: "100px",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "50px",
      },
    },
  },
}));

export default function Connect({ value }) {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box className="mainBox1">
            <Box className="topHeight">
              <img src="images/img5.png" className="connectimg1" alt="" />
            </Box>
            <Box>
              <Typography variant="h6">{value.text1}</Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                style={{ maxWidth: "200px", marginTop: "8px" }}
              >
                {value.dec1}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="imgBOx">
            <img src={value.mainimg1} className="mainimg" alt="" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="imgBOx">
            <img src={value.mainimg2} className="mainimg" alt="" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="mainBox1">
            <Box className="topHeight">
              <img src="images/img5.png" className="connectimg1" alt="" />
            </Box>
            <Box>
              <Typography variant="h6">{value.text2}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" style={{ maxWidth: "200px" }}>
                {value.dec2}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
