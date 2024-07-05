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

function Formulated() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.descriptionbox}>
        <Box className="textbox">
          <Typography variant="h4">When it was formulated</Typography>
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
        </Box>
      </Box>
    </>
  );
}

export default Formulated;
