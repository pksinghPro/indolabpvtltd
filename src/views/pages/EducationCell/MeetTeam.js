import React from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  descriptionbox: {
    padding: "10px 0px",

    "& .textbox": {
      "& h4": {
        fontSize: "24px",
        fontWeight: "500",
        color: "#1C1C1C",
      },
      "& p": {
        fontSize: "16px",
        fontWeight: "300",
        color: "#494949",
        marginTop: "20px",
      },
    },
  },
  teambox: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "70px 0px",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
    },
    "& h5": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#712BC1",
      marginTop: "10px",
      marginBottom: "10px",
      textAlign: "center",
    },
    "& img": {
      width: "100%",
      maxWidth: "170px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      marginTop: "-62px",
    },

    "& h6": {
      color: "#5E5C5C",
      fontWeight: "400",
      fontSize: "14px",
      textAlign: "center",
    },
  },
  teamheadbox: {
    marginTop: "60px",
  },
}));
const teamData = [
  {
    img1: "images/teamhead.png",
    text1: "John Palmer",
    text2: "Co-Founder",
    text3:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies",
  },
  {
    img1: "images/teamhead.png",
    text1: "John Palmer",
    text2: "Co-Founder",
    text3:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies",
  },
  {
    img1: "images/teamhead.png",
    text1: "John Palmer",
    text2: "Co-Founder",
    text3:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies",
  },
  {
    img1: "images/teamhead.png",
    text1: "John Palmer",
    text2: "Co-Founder",
    text3:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies",
  },
];
function MeetTeam() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.descriptionbox}>
        <Box className="textbox">
          <Typography variant="h4">Meet The Team</Typography>
        </Box>
        <Box className={classes.teamheadbox}>
          <Grid container spacing={2}>
            {teamData &&
              teamData.map((data, i) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box className={classes.teambox}>
                      <img src={data.img1} alt="" width="100%" />
                      <Box>
                        <Typography variant="h5">{data.text1}</Typography>
                        <Typography variant="h6">{data.text2}</Typography>

                        <Typography variant="body2">{data.text3}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default MeetTeam;
