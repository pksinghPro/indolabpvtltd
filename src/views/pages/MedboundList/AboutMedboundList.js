import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
  InputAdornment,
  TextField,
  FormControl,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: "30px 0px 50px 0px",
  },
  mainBox: {
    "& h2": {
      fontSize: "24px",
      fontWeight: "500",
    },
    "& h6": {
      fontWeight: "400",
      fontSize: "18px",
    },
    "& h4": {
      fontWeight: "600",
      fontSize: "24px",
    },
    "& .flexBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  textBox: {
    "& h3": {
      fontWeight: "600",
      fontSize: "24px",
    },
    "& h5": {
      fontSize: "20px",
      fontWeight: "500",
    },
    "& p": {
      fontSize: "16px",
      color: "#494949",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    "& .medicalContant": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& h2": {
        fontSize: "24px",
      },
    },
  },
  alignText: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h2": {
      fontSize: "20px",
    },
  },
  imgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },
  textControl: {
    "& .MuiOutlinedInput-root": {
      border: "1px solid #C1C1C1",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      borderRadius: "100px",
    },
    "& .MuiInputBase-input": {
      color: "rgba(28, 28, 28, 0.3)",
    },
  },
  alignItems: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    "@media(max-width:817px)": {
      display: "block",
    },
  },
  flexbox: {
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width:817px)": {
      display: "block",
    },
  },
  imagelist: {
    "& figure": {
      width: "100%",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0px",
    },
  },
}));
const medBoundPicture = [
  {
    imagelead: "images/MedboundList1.png",
  },
  {
    imagelead: "images/MedboundList2.png",
  },
  {
    imagelead: "images/MedboundList3.png",
  },
  {
    imagelead: "images/MedboundList4.png",
  },
];
export default function AboutMedboundList() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Box className={classes.mainBox}>
          <Box className="flexBox">
            <Box ml={1}>
              <Typography variant="h2">Indolab List</Typography>
            </Box>
          </Box>
          <Box className="flexBox" ml={1}>
            <Typography variant="h6">
              <span style={{ color: "#FF860D" }}>
                Indolab | indolab@limited.com
              </span>
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container>
        <Box className={classes.textBox}>
          <Box mt={7}>
            <Typography variant="h5">About Indolab List</Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography variant="h5">Benefits</Typography>
          </Box>
          <Box mt={1} mb={1}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.
            </Typography>
          </Box>
          <Box mt={2} mb={2}>
            <Typography variant="h5">Collaborators</Typography>
          </Box>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={2}>
                {medBoundPicture &&
                  medBoundPicture.map((data, i) => {
                    return (
                      <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Box className={classes.imagelist}>
                          <figure>
                            <img src={data.imagelead} alt="" width="100%" />
                          </figure>
                        </Box>
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>

          <Box mt={2}>
            <Typography variant="h5">Features</Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
              molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
              urna euismod. Sit viverra id condimentum convallis dictum sed
              mauris.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.flexbox}>
          <Box mb={3}>
            <Box mt={3}>
              <Button
                variant="contained"
                color="secondary"
                className="buttonBOx"
                style={{ textTransform: "uppercase" }}
              >
                Click here to Claim Your Free Certificates
              </Button>
            </Box>
            <Box mt={3}>
              <Button
                variant="contained"
                color="secondary"
                className="buttonBOx"
                style={{ textTransform: "uppercase" }}
              >
                Click here to enlist your organisation on MBL
              </Button>
            </Box>
          </Box>
          <Box>
            <Box mt={3}>
              <Typography variant="h6" style={{ fontWe: "500" }}>
                Enter your MBL code to access your Resume
              </Typography>
            </Box>
            <Box mt={2} className={classes.alignItems}>
              <FormControl className={classes.textControl}>
                <TextField
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  placeholder="Enter Code"
                  name="enterCode"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IoSearchOutline fontSize="25px" color="#757575" />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
