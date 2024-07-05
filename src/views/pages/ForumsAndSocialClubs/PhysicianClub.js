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

const leadPicture = [
  {
    imagelead: "images/PhysicianClub1.png",
  },
  {
    imagelead: "images/PhysicianClub2.png",
  },
  {
    imagelead: "images/PhysicianClub3.png",
  },
  {
    imagelead: "images/PhysicianClub4.png",
  },
];
export default function PhysicianClub() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.bannerBox}>
      <Box className="ProileImg">
        <figure className="postImg">
          {window.location.pathname === "/physical-clubs" && (
            <img src="images/PhysicianClub.png" alt="" />
          )}
          {window.location.pathname === "/dental-clubs" && (
            <img src="images/DentalClub.png" alt="" />
          )}
          {window.location.pathname === "/pharma-clubs" && (
            <img src="images/farmaclub.png" alt="" />
          )}
          {window.location.pathname === "/biotech-clubs" && (
            <img src="images/biotech.png" alt="" />
          )}
          {window.location.pathname === "/creative-club" && (
            <img src="images/CreativeClub.png" alt="" />
          )}
        </figure>
      </Box>
      <Container>
        <Box className={classes.textlead}>
          <Box className="mainclass">
            <Typography variant="h2">Forums & Social Clubs</Typography>
            <Typography variant="h6">
              The medical education cell | <span>Med</span>Bound
            </Typography>
            {window.location.pathname === "/physical-clubs" && (
              <Typography variant="h4">Physician's Club</Typography>
            )}
            {window.location.pathname === "/dental-clubs" && (
              <Typography variant="h4">Dental-Club</Typography>
            )}
            {window.location.pathname === "/pharma-clubs" && (
              <Typography variant="h4">Pharma Club</Typography>
            )}
            {window.location.pathname === "/biotech-clubs" && (
              <Typography variant="h4">Biotech Club</Typography>
            )}
            {window.location.pathname === "/creative-club" && (
              <Typography variant="h4">Creative Club</Typography>
            )}
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
            <Typography variant="h5">Formated</Typography>
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
            <Box mt={4}>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                Present Committee
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {leadPicture &&
            leadPicture.map((data, i) => {
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

        <Box mt={3} display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" color="secondary">
            Click here to register
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
