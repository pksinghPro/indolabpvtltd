import React from "react";
import { makeStyles, Box, Grid, Typography, Divider } from "@material-ui/core";

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
        marginTop: "20px",
      },
    },
  },
}));
const programData = [
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    image1: "images/bullet.png",
    bullet1:
      "  Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
];
function Programs() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.descriptionbox}>
        <Box className="textbox">
          <Typography variant="h4">Bullet points of the Programs</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie
            rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna
            euismod. Sit viverra id condimentum convallis dictum sed
            mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt
            molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est
            urna euismod.
          </Typography>
        </Box>
        <Box mt={4}>
          <Grid container>
            {programData &&
              programData.map((data, i) => {
                return (
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <img
                        src={data.image1}
                        alt=""
                        width="100%"
                        style={{
                          width: "100%",
                          maxWidth: "9px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography variant="body1">{data.bullet1}</Typography>
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

export default Programs;
