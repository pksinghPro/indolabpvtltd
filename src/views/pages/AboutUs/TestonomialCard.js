import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  cardboxes: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: "35px 0px",
    },
    "& .cardbox": {
      background: "#949494",
      borderRadius: "8px",
      padding: "15px",
      "&:hover": {
        transform: " scale(1.2)",
        transition: "1.00s",
        marginTop: "-50px",
        background: "#FF860D",
        zIndex: "999",
      },
      "& p": {
        color: "#FFFFFF",
        textAlign: "center",
      },
      "& .MuiAvatar-root": {
        width: "69px",
        height: "69px",
      },
    },
    "& .fixedbox": {
      position: "absolute",
      left: "38%",
      bottom: "-76px",
    },
  },
}));
export default function TestimonialsAbout(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <Box className={classes.cardboxes}>
      <Box className="cardbox">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            src={data.leadimg}
            alt=""
            width="100%"
            style={{
              width: "100%",
              maxWidth: "52px",
              margin: "0 auto",
            }}
          />
        </Box>
        <Box mb={3} mt={1}>
          <Typography variant="body2" style={{ fontSize: "10px" }}>
            {data.text1}
          </Typography>
        </Box>
        <Box className="fixedbox">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar src={data.avatarimg} alt="" width="100%" />
          </Box>
          <Typography variant="body2" style={{ color: "#494949" }}>
            {data.text2}
          </Typography>
          <Typography variant="body2" style={{ color: "#712BC1" }}>
            {data.text3}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
