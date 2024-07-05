import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  cardBox: {
    background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "4px",
    borderRadius: "15px",
    textAlign: "left",
    height:"100%",
    minHeight: "198px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
    },
    "& h5": {
      fontWeight: "700",
      color: "#fff",
      paddingTop: "10px",
    },
    "& h6": {
      color: "#ffecd2",
      fontStyle: "italic",
    },
    "& .MuiTypography-body2": {
      color: "#fff",
    },
  },
  starRating: {
    display: "flex",
    marginTop: "10px",
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
}));

const TestimonialsCard = ({ value }) => {
  const classes = useStyles();

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? <StarIcon key={i} /> : <StarBorderIcon key={i} />);
    }
    return stars;
  };

  return (
    <Box className={classes.cardBox}>
     <Box>
       <Typography variant="body2">{value.review}</Typography>
      <Box>
        <Typography variant="h5">{value.name}</Typography>
        <Typography variant="h6">{value.position}</Typography>
        <Box className={classes.starRating}>{renderStars(value.rating)}</Box>
      </Box>
     </Box>
    </Box>
  );
};

export default TestimonialsCard;
