import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  cardBox: {
    backgroundColor: "#EDA65F",
    borderRadius: "10px",
    "& h4": {
      color: "#fff",
    },
    "& .MuiAvatar-root": {
      width: "160px",
      height: "160px",
      [theme.breakpoints.down("sm")]: {
        width: "120px",
        height: "120px",
      },
    },
    "& .iconbutton": {
      border: "1px solid #fff",
      marginRight: "20px",
      height: "57px",
      display: "flex",
      width: "57px",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: "50%",
      "& svg": {
        color: "#fff",
        fontSize: "32px",
      },
    },
  },
}));

const Category = ({ value }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box style={{}} className={classes.cardBox}>
      <Box
        position="relative"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="../images/zigZag.png" alt="imga" width="100%" />
        <Box style={{ position: "absolute" }}>
          <Typography variant="h4">Cateory -1</Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Box>
          <Avatar src="../images/profileCategory.png" />
        </Box>
        <Box
          className="iconbutton"
          onClick={() => history.push("/flash-category")}
        >
          <BsArrowRight />
        </Box>
      </Box>
    </Box>
  );
};

export default Category;
