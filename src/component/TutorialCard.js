import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  maintuto: {
    position: "relative",
    "& img": {
      borderRadius: "20px",
    },
    "& h5": {
      color: "#1C1C1C",
      fontSize: "20px",
      fontWeight: "600",
      margin: "6px 0px",
    },
    "& button": {
      padding: "7px 19px",
      fontSize: "16px",
      whiteSpace: "pre",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },
  institutebtn: {
    position: "absolute",
    top: "62px",
    left: "44%",
    "& .circleicon": {
      backgroundColor: "#fff",
      width: "32px",
      height: "32px",
      borderRadius: "100%",
      fontSize: "16px",
      fontWeight: "400",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        color: "#FF860D",
        fontSize: "20px",
      },
    },
  },
}));
function TutorialCard(props) {
  const classes = useStyles();
  const history = useHistory();

  const { data } = props;
  return (
    <>
      <Box className={classes.maintuto}>
        <img src={data.img1} alt="" width="100%" />
        <Box className={classes.institutebtn}>
          <Box className="circleicon">
            <IconButton onClick={() => history.push("/learning-tutorails")}>
              <IoIosPlay />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5">{data.text1}</Typography>
          <Typography variant="body2">{data.text2}</Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => history.push("/learning-tutorails")}
            >
              Click here to play video
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TutorialCard;
