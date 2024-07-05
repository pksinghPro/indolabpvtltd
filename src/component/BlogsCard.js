import React, { useEffect } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  blogcardBox: {
    background: "#FFFFFF",
    border: "1px solid #E2E2E2",
    "& .innerBox": {
      padding: "10px",
      "& h5": {
        fontWeight: "600",
      },
    },
  },
  mainimg: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",
    height: "200px", // Adjust as necessary based on your design
    cursor: "pointer",
  },
}));

export default function BlogsCard({ data, index }) {
  const classes = useStyles();
  const history = useHistory();

  const updateDimensions = () => {
    const offsetWidth = document.getElementById(`imagecard${index}`).offsetWidth;
    const newHeight = offsetWidth - 170;
    document.getElementById(`imagecard${index}`).style.height = `${newHeight}px`;
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [index]);

  const handleCardClick = () => {
    history.push("/blog-view"); // Navigate to the blog details page
  };

  return (
    <Box className={classes.blogcardBox} onClick={handleCardClick}>
      <Box
        id={`imagecard${index}`}
        className={classes.mainimg}
        style={{ backgroundImage: `url(${data.img})` }}
      ></Box>
      <Box className="innerBox">
        <Typography variant="h5">{data.title}</Typography>
        <Box my={1}>
          <Typography variant="body2">{data.description}</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Typography variant="body2" style={{ color: "#007AB5", cursor: "pointer" }}>
            Read More <RiArrowRightSLine color="#007AB5" />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
