import React, { useEffect, useRef, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardgalleryBox: {
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.1)",
  },
  mainimg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    verticalAlign: "bottom",
    cursor:"pointer",
  },
  textContainer: {
    padding: theme.spacing(2),
    backgroundColor: "#fff",
  },
}));

export default function DressCollectionCard({ data, index }) {
  const classes = useStyles();
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef(null);
const history = useHistory()
  useEffect(() => {
    const updateImageSize = () => {
      if (imageRef.current) {
        const aspectRatio =
          imageRef.current.naturalWidth / imageRef.current.naturalHeight;

        const cardWidth = imageRef.current.offsetWidth;
        const newImageHeight = Math.floor(cardWidth / aspectRatio);
        setImageHeight(newImageHeight);
      }
    };

    updateImageSize();
    window.addEventListener("resize", updateImageSize);
    return () => {
      window.removeEventListener("resize", updateImageSize);
    };
  }, [data.img]);

  return (
    <Box className={classes.cardgalleryBox}>
      <img
        ref={imageRef}
        src={data.img}
        alt={`Trending Image ${index}`}
        className={classes.mainimg}
        style={{ height: `${imageHeight}px` }}
        onClick={()=>history.push("/product-detail")}
      />
      <Box className={classes.textContainer}>
        <Typography variant="body2">
          Digital Printed Georgette Crop Top Set in Orange
        </Typography>
        <Box pt={1}>
          <Typography variant="body2">₹3,700.00</Typography>
        </Box>
      </Box>
    </Box>
  );
}
