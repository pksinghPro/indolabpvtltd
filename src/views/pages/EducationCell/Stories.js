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
      "& h6": {
        fontSize: "16px",
        fontWeight: "600",
        color: "#1C1C1C",
        marginTop: "20px",
      },
      "& p": {
        marginTop: "8px",
      },
    },
  },
}));
const storiesData = [
  {
    text1: "Stories-1 heading",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    text1: "Stories-2 heading",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
];

function Stories() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.descriptionbox}>
        <Box className="textbox">
          <Typography variant="h4">Stories</Typography>
          <Grid container spacing={2}>
            {storiesData &&
              storiesData.map((data, i) => {
                return (
                  <>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Typography variant="h6">{data.text1}</Typography>
                      <Typography variant="body2">{data.text2}</Typography>
                    </Grid>
                  </>
                );
              })}
          </Grid>
          <Box mt={5}>
            <img src="images/storiesimg.png" alt="" width="100%" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Stories;
