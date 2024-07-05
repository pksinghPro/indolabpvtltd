import React from "react";
import { Box, Container, makeStyles, Grid } from "@material-ui/core";
import HelpCenter from "./HelpCenter";
import GetInTouch from "./GetInTouch";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: theme.spacing(6, 0), // Increased padding for better spacing
    background: "#F5F5F5", // Light gray background for contrast
  },
}));

export default function HelpIndexComponent() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <HelpCenter />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <GetInTouch />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
