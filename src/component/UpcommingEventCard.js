import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  upcommingcardBox: {
    background: "#F8F8F8",
    margin: "20px 0px",
    "& .displaySpacebetween": {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    "& .displayStart": {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    "& .textBox": {
      paddingLeft: "20px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "0px",
      },
    },
    "& .cardbox": {
      padding: "15px",
      [theme.breakpoints.down("xs")]: {
        padding: "8px",
      },
      "& p": {
        paddingBottom: "5px",
        [theme.breakpoints.down("xs")]: {
          paddingBottom: "0px",
        },
      },
      "& h6": {
        fontWeight: "600",
        paddingBottom: "8px",
        [theme.breakpoints.down("xs")]: {
          padding: "8px 0px",
        },
      },
      "& .MuiAvatar-root": {
        width: "320px",
        height: "200px",
        borderRadius: "1px",
        [theme.breakpoints.down("sm")]: {
          width: "120px",
          height: "200px",
        },
        [theme.breakpoints.down("xs")]: {
          width: "220px",
          height: "100px",
        },
      },
      "& .button": {
        padding: "9px 20px",
      },
    },
    "& .avatarbox": {
      background: "#FF860D",
      padding: "30px 60px",
      [theme.breakpoints.down("xs")]: {
        padding: "10px 60px",

        display: "flex",
        justifyContent: "space-between",
      },
      "& p": {
        color: "#fff",
        paddingBottom: "5px",
        [theme.breakpoints.down("xs")]: {
          paddingBottom: "0px",
        },
      },
      "& .MuiAvatar-root": {
        width: "120px",
        height: "120px",
        border: "1px solid #fff",
        [theme.breakpoints.down("sm")]: {
          width: "80px",
          height: "80px",
        },
      },
    },
  },
}));

export default function UpcommingEventCard({ value }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.upcommingcardBox}>
      <Box className="cardbox displayStart">
        <Avatar src="images/zoom1.png" />
        <Box className="textBox">
         
            <Typography variant="h6">{value.title}</Typography>
          <Box>
          <Typography variant="body1">
            Date: 15th April 2023 | Time: 06:00 IST
          </Typography>
          </Box>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the zindustry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the zindustry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and.
          </Typography>
         
          <Box mt={2}>
            <Button variant="contained" color="secondary" className="button" onClick={()=> history.push("/alumini")}>
              Click here to join event
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Box className="avatarbox" align="center">
          <Avatar src="images/zoom2.png" />
          <Box>
            <Box mt={0.5}>
              <Typography variant="body2">Dr Darshit Patel</Typography>
            </Box>
            <Typography variant="body2">(MBBS)</Typography>
            <Box mt={0.5}>
              <Typography variant="body2">Speaker</Typography>
            </Box>
          </Box>
        </Box> */}
    </Box>
  );
}
