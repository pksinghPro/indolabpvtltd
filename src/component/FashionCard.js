import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  productCardBox: {
    background: "#FFFFFF",
    border: "1px solid #E8E8E8",
    borderRadius: "10px",
    transition: "0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
    "& .innerBox": {
      padding: "15px 15px 25px",
    },
  },
  productImage: {
    width: "100%",
    height: "230px !important",
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",
    backgroundColor: "#ccc !important",
  },
}));

export default function FashionCard({ product }) {
  const classes = useStyles();
  const history = useHistory();

  const updateDimensions = () => {
    var offsetWidth = document.getElementById("productCard").offsetWidth;
    var newOffsetWidth = offsetWidth - 80;
    document.getElementById("productCard").style.height = newOffsetWidth + "px";
  };

  useEffect(() => {
    updateDimensions();
  }, [product]);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Box className={classes.productCardBox}>
      <Box
        id="productCard"
        className={classes.productImage}
        style={{ background: `url(${product.img})`, cursor: "pointer" }}
      ></Box>
      <Box className="innerBox">
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          {product.title}
        </Typography>
        <Box my={1}>
          <Typography variant="body2">
            {product.description}
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="h6" style={{ fontWeight: 600 }}>
            {product.price}
          </Typography>
        </Box>
        <Box align="center" mt={2} mb={1}>
          <Button variant="contained" color="primary" onClick={() => history.push("/product-detail")}>
            View Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
