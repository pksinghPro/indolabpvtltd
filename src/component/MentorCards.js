import {
  Avatar,
  Box,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  mentorBox: {
    background: "#FFFFFF",
    border: "1px solid #DBDBDB",
    borderRadius: "10px",
    padding: "15px",
    transition: "0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow:
        " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
    "& .iconbutton": {
      boxShadow: "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px",
      width: "25px",
      height: "23px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        fontSize: "15px",
        color: "#fff",
      },
    },
    "& .iconBox": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MuiIconButton-root": {
        padding: "6px",
        marginRight: "10px",
      },
    },
    "& h5": {
      fontSize: "16px",
      fontWeight: "600",
      color: "#1C1C1C",
    },
    "& h6": {
      fontSize: "12px",
      fontWeight: "400",
      marginBottom: "16px",
    },
  },
  mainimg: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: " no-repeat !important",
    borderRadius: "10px",
  },
}));

export default function MentorCards({ index, data }) {
  const classes = useStyles();
  const updateDimensions = () => {
    var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
    var newoofsetWidth = offsetWidth - 80;
    document.getElementById("imagecard" + index).style.height =
      newoofsetWidth + "px";
  };

  useEffect(() => {
    updateDimensions();
  }, [data, index]);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Box className={classes.mentorBox}>
      {/* <Avatar src="images/mentor.png" /> */}
      <Box
        id={`imagecard${index}`}
        className={classes.mainimg}
        style={{ background: "url(" + data.img + ")", cursor: "pointer" }}
      ></Box>
      <Box align="center">
        <Box mt={1} style={{ marginBottom: "5px" }}>
          <Typography variant="h5">John Palmer</Typography>
        </Box>
        <Typography variant="h6">Sr. Project Manager</Typography>
        <Box className="iconBox" my={1}>
          <IconButton
            className="iconbutton"
            style={{
              background:
                "linear-gradient(134.83deg, #4676ED 14.69%, #436DE4 27.83%, #3C55CD 49.23%, #302EA8 76.04%, #2B1E99 85.61%)",
            }}
          >
            <FaFacebookF />
          </IconButton>
          <IconButton
            className="iconbutton"
            style={{
              background:
                "linear-gradient(225deg, #007AB5 14.64%, #0046E5 85.36%)",
            }}
          >
            <FaLinkedinIn />
          </IconButton>
          <IconButton
            className="iconbutton"
            style={{
              background:
                "linear-gradient(225deg, #33CCFF 14.64%, #337FFF 85.36%)",
            }}
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            className="iconbutton"
            style={{
              background:
                "linear-gradient(225deg, #FBE18A 14.72%, #FCBB45 29.45%, #F75274 41.27%, #D53692 51.69%, #8F39CE 66.93%, #5B4FE9 85.36%)",
            }}
          >
            <FaInstagram />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
