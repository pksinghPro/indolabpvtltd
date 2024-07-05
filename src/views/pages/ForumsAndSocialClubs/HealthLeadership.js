import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    paddingBottom: "50px",
    "& .postImg": {
      width: "100%",
      margin: "0",
      overflow: "hidden",
      height: "100%",
      "& img": {
        width: "100%",
        minHeight: "100%",
        objectFit: "contain",
      },
    },
  },
  textlead: {
    marginBottom: "30px",
    "& .mainclass": {
      textAlign: "center",
      padding: "30px 0px 20px",
      "& h2": {
        fontSize: "50px",
        color: "#1F1F1F",
        textTransform: "uppercase",
      },
      "& h6": {
        fontSize: "500",
        color: "#FF860D",
        fontWeight: "500",
        margin: "24px 0px",
        "& span": {
          color: "#712BC1",
        },
      },
      "& h4": {
        fontWeight: "700",
        color: "#FF860D",
      },
    },
    "& .desbox": {
      "& h5": {
        color: "#1C1C1C",
        fontWeight: "600",
        margin: "20px 0px 10px",
      },
      "& p": {},
    },
  },
  subtextbox: {
    "& h5": {
      color: "#1C1C1C",
      fontWeight: "600",
      margin: "20px 0px 10px",
    },
  },
}));

const leadPicture = [
  {
    imagelead: "images/ForumsAndSocialClubs1.png",
  },
  {
    imagelead: "images/ForumsAndSocialClubs2.png",
  },
  {
    imagelead: "images/ForumsAndSocialClubs3.png",
  },
  {
    imagelead: "images/ForumsAndSocialClubs4.png",
  },
];
export default function HealthLeadership() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.bannerBox}>
      <Box className="ProileImg">
        <figure className="postImg">
          <img src="images/ForumsAndSocialClubs.png" alt="" />
        </figure>
      </Box>
      <Container>
        <Box className={classes.textlead}>
          <Box className="mainclass">
            <Typography variant="h2">Forums & Social Clubs</Typography>
            <Typography variant="h6">
              The medical education cell | <span>Med</span>Bound
            </Typography>
            <Typography variant="h4">MB Health Leadership Forums</Typography>
          </Box>
          <Box className="desbox">
            <Typography variant="h5">Description of forum</Typography>
            <Typography variant="body1">
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
            <Typography variant="h5">Activities</Typography>
            <Typography variant="body1">
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

        <Grid container spacing={2}>
          {leadPicture &&
            leadPicture.map((data, i) => {
              return (
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Box>
                    <img src={data.imagelead} alt="" width="100%" />
                  </Box>
                </Grid>
              );
            })}
        </Grid>
        <Box className={classes.subtextbox}>
          <Typography variant="h5">Formated</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie
            rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna
            euismod. Sit viverra id condimentum convallis dictum sed
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
          <Box
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" color="secondary">
              Click here to register
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
