import {
  Box,
  Typography,
  makeStyles,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  upcommingBox: {
    "& .h3": {
      color: "#1F1F1F",
    },
    "& h6": {
      "& span": {
        fontWeight: "600",
      },
    },
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
      "& p": {
        marginBottom: "8px",
      },
    },
  },
}));
const almuniData = [
  {
    almuimg: "images/event1.png",
    almuhead: "Event Name",
    mainsub: "Date: 15th April 2023 | Time: 06:00 IST",
    subalmu:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
  },
  {
    almuimg: "images/event1.png",
    almuhead: "Event Name",
    mainsub: "Date: 15th April 2023 | Time: 06:00 IST",
    subalmu:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
  },
  {
    almuimg: "images/event1.png",
    almuhead: "Event Name",
    mainsub: "Date: 15th April 2023 | Time: 06:00 IST",
    subalmu:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
  },
  {
    almuimg: "images/event1.png",
    almuhead: "Event Name",
    mainsub: "Date: 15th April 2023 | Time: 06:00 IST",
    subalmu:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the zindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
  },
];
export default function Upcomingweb() {
  const classes = useStyles();

  return (
    <Box className={classes.upcommingBox}>
      <img src="images/upcommingimg.png" width="100%" />
      <Container>
        <Box mt={2} mb={1}>
          <Typography variant="h3">Upcoming Events</Typography>
        </Box>
        <Typography variant="h6">
          The Medical Education Cell |{" "}
          <span style={{ color: "#712BC1" }}>Med</span>
          <span style={{ color: "#FF860D" }}> Bound</span>
        </Typography>
        <Box mt={3}>
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
                            <Typography variant="h5">
                              {data.almuhead}
                            </Typography>
                            <Typography variant="body2">
                              {data.mainsub}
                            </Typography>
                            <Typography variant="body2">
                              {data.subalmu}
                            </Typography>
                          </Box>
                          <Box mt={2}>
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{
                                padding: "8px 40px",
                                fontSize: "16px",
                                textTransform: "uppercase",
                              }}
                            >
                              Click here to join event
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </>
                );
              })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
