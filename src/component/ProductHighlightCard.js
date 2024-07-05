import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardBox: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    width: "220px",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
    },
  },
  imageBox: {
    width: "100%",
    height: "140px",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "20px",
  },
  highlightText: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#333",
  },
  descriptionText: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#777",
    marginTop: "10px",
  },
}));

export default function ProductHighlightCard({ highlight }) {
  const classes = useStyles();

  return (
    <Box className={classes.cardBox}>
      <Box
        className={classes.imageBox}
        style={{ backgroundImage: `url(${highlight.image})` }}
      ></Box>
      <Typography className={classes.highlightText}>{highlight.text}</Typography>
      <Typography className={classes.descriptionText}>{highlight.description}</Typography>
    </Box>
  );
}
