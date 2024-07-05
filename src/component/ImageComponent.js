import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",

    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
}));

export default function ImageComponent({ data, i }) {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Box>
        <img src={data.img} className="img1" alt="" />
      </Box>
    </Box>
  );
}
