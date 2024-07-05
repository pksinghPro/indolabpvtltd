import {
  Avatar,
  Box,
  Button,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  upcommingcardBox: {
    "& .cardmain": {
      background: "#F8F8F8",
      marginBottom: "20px",
    },

    "& .textBox": {
      paddingLeft: "20px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "0px",
      },
    },
    "& .cardbox": {
      padding: "15px",
      display: "flex",
      "@media(max-width:599px)": {
        display: "block",
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
      "& figure": {
        width: "317px",
        height: "220px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
      "& .button": {
        padding: "9px 20px",
        whiteSpace:"pre",
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

export default function UpcommingwebCards({ value }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.upcommingcardBox}>
      <Box className="cardmain">
        <Grid container spacing={0}>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box className="cardbox">
              <figure>
                <img src={value.imgweb} alt="" width="100%" />
              </figure>
              <Box className="textBox">
                <Box>
                  <Typography variant="h6">{value.title}</Typography>
                </Box>
                <Typography variant="body2">{value.text1}</Typography>
                <Typography variant="body2">{value.text2}</Typography>
                <Typography variant="body2">{value.text3}</Typography>
                <Box pt={2} pb={1}>
                  <Typography variant="body1" style={{ color: "#007AB5" }}>
                    {value.text4}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="button"
                  >
                    Click here to attend (zoom link)
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box className="avatarbox" align="center">
              <Avatar src="images/zoom2.png" />
              <Box>
                <Box mt={0.5}>
                  <Typography variant="body2">{value.sub1}</Typography>
                </Box>
                <Typography variant="body2">{value.sub2}</Typography>
                <Box mt={0.5}>
                  <Typography variant="body2">{value.sub3}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
