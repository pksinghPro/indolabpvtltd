import FlipCard from "src/component/FlipCard";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainflipBOx: {
    "& h4": {
      fontWeight: "600",
    },
    "& .maonbox": {
      paddingTop: "30px",
    },
  },
}));
const data=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

export default function Flipcardcomponent() {
  const classes = useStyles();

  return (
    <Box className={classes.mainflipBOx}>
      <Typography variant="h4">
        Medical Transcription Lesson 5
        <Box mt={1} mb={2}>
          <Typography variant="body1">
            by grant.samantha.miller || 9, Aug 2008 || Subjects: career
            institute medical transcription us
          </Typography>
        </Box>
      </Typography>
      <Box className="maonbox">
        <Grid container spacing={3}>
          {data.map((value) => (
            <Grid item xs={12} sm={6}>
              <FlipCard  value={value}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
