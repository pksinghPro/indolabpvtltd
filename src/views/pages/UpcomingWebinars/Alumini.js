import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Avatar,
  Grid,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  internshipBox: {
    padding: "30px 0px",
    "& .aluminibox": {
      backgroundColor: "#F8F8F8",
      padding: "20px 8px 15px 20px",

      "& figure": {
        width: "100%",

        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
      "& h5": {
        fontWeight: "600",
        color: "#1C1C1C",
        margin: "12px 0px 8px",
      },
    },
    "& h6": {
      marginBottom: "15px",
    },
  },
}));
const almuniData = [
  {
    almuimg: "images/alumini1.png",
    almuhead: "John Palmer",
    subalmu:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and.",
  },
  {
    almuimg: "images/alumini2.png",
    almuhead: "John Palmer",
    subalmu:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and.",
  },
  {
    almuimg: "images/alumini3.png",
    almuhead: "John Palmer",
    subalmu:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and.",
  },
  {
    almuimg: "images/alumini1.png",
    almuhead: "John Palmer",
    subalmu:
      "    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and.",
  },
];

export default function Alumini() {
  const classes = useStyles();

  return (
    <Box className={classes.internshipBox}>
      <Container>
        <Box mt={2} mb={1}>
          <Typography variant="h3">Our ALUMNI</Typography>
        </Box>
        <Typography variant="h6">
          The Medical Education Cell |{" "}
          <span style={{ color: "#712BC1" }}>Med</span>
          <span style={{ color: "#FF860D" }}> Bound</span>
        </Typography>
        <Box>
          {almuniData &&
            almuniData.map((data, i) => {
              return (
                <>
                  <Box className="aluminibox" mb={2}>
                    <Grid container spacing={3}>
                      <Grid item lg={3} md={3} sm={5} xs={12}>
                        <figure>
                          <img src={data.almuimg} alt="" width="100%" />
                        </figure>
                      </Grid>
                      <Grid item lg={9} md={9} sm={7} xs={12}>
                        <Box>
                          <Typography variant="h5">{data.almuhead}</Typography>
                          <Typography variant="body2">
                            {data.subalmu}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              );
            })}
        </Box>
      </Container>
    </Box>
  );
}
