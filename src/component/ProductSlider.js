import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  imageGalleryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainImageContainer: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  thumbnailContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  thumbnail: {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
    cursor: "pointer",
    border: "2px solid transparent",
    transition: "border-color 0.3s ease",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
  selectedThumbnail: {
    borderColor: theme.palette.primary.main,
  },
}));

const setting = {
  showFullscreenButton: false,
  showPlayButton: false,
  showBullets: false,
  showNav: false,
};

function ProductSlider({ sliderImages }) {
  const classes = useStyles();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openProductView, setOpenProductView] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Box className={classes.imageGalleryContainer}>
      <Box className={classes.mainImageContainer}>
        <ImageGallery
          items={sliderImages}
          startIndex={selectedImageIndex}
          showThumbnails={false}
          {...setting}
        />
      </Box>
      <Grid container spacing={1} className={classes.thumbnailContainer}>
        {sliderImages.map((image, index) => (
          <Grid item key={index}>
            <img
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className={`${classes.thumbnail} ${
                selectedImageIndex === index ? classes.selectedThumbnail : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          </Grid>
        ))}
      </Grid>
      {openProductView && (
        <ProductViewModal
          open={openProductView}
          close={() => setOpenProductView(false)}
          imageData={sliderImages[selectedImageIndex]}
        />
      )}
    </Box>
  );
}

export default ProductSlider;

const ProductViewModal = ({ open, close, imageData }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={close} maxWidth="md">
      <DialogTitle style={{ position: "relative" }}>
        <Typography variant="h4">Product Image</Typography>
        <Box style={{ position: "absolute", right: "22px", top: "22px" }}>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TransformWrapper>
          <TransformComponent>
            <img
              src={imageData.original}
              alt="Product"
              style={{ width: "100%" }}
            />
          </TransformComponent>
        </TransformWrapper>
      </DialogContent>
    </Dialog>
  );
};
