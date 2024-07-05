import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Container,
  Grid,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Radio,
  IconButton,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CloseIcon from "@material-ui/icons/Close";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  ProductDetailBox: {
    padding: "60px 0px",
    "& .offerBox": {
      fontSize: "13.5px",
      background: "#51b339",
      marginLeft: "10px",
      padding: "2px 3px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        background: "#41812f",
      },
    },
    "& .sieOptionBox": {
      padding: "6px 15px",
      border: "0 #f7f7f7 solid",
      margin: "4px 8px 4px 0",
      cursor: "pointer",
      textAlign: "center",
      position: "relative",
      borderRadius: "5px",
      backgroundColor: "#f7f7f7",
      fontSize: "18px",
      "&.selected": {
        border: "1px solid #2196f3",
        backgroundColor: "#e1f5fe",
      },
    },
    "& .MainServicesBox": {
      backgroundColor: "#f7f7f7",
      borderRadius: "15px",
      border: "1px solid #f7f7f7",
      textAlign: "center",
      padding: "10px",
    },
  },
  divider: {
    margin: theme.spacing(0, 2),
    height: "auto",
    backgroundColor: "#ccc",
  },
  originalPrice: {
    "& span": {
      color: "#999",
      textDecoration: "line-through",
      marginRight: theme.spacing(1),
    },
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  sectionTitle: {
    fontWeight: "600",
    marginBottom: theme.spacing(1),
  },
  offerBoxIcon: {
    fontSize: "17px",
    marginLeft: "5px",
  },
  drawerPaper: {
    width: "300px",
    padding: theme.spacing(2),
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid #e5e5e5",
  },
  textboxs: {
    position: "relative",
    zIndex: "1",
    "& li": {
      position: "relative",
      fontSize: "16px",
      marginLeft:"10px",
      fontWeight: "300",
      fontFamily: "Roboto, sans-serif",
      lineHeight: "21px",
      "&::after": {
        content: "''",
        position: "absolute",
        height: "6px",
        width: "6px",
        backgroundColor:"#000",
        borderRadius: "50%",
        left: "-11px",
        top: "14px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
    },
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: " 0px",
    },
  },
  table: {
    minWidth: 650,
  },
}));

const sliderImages = [
  {
    original: "images/banner/trend1.webp",
    thumbnail: "images/banner/trend1.webp",
  },
  {
    original: "images/banner/trend2.webp",
    thumbnail: "images/banner/trend2.webp",
  },
];
const sizeOptionData = [
  {
    size: "32",
  },
  {
    size: "34",
  },
  {
    size: "36",
  },
  {
    size: "38",
  },
  {
    size: "40",
  },
];

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ProductDetail() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("semi-stitched");
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    // Set default size to the first size option
    if (sizeOptionData.length > 0) {
      setSelectedSize(sizeOptionData[0].size);
    }
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleServiceSelect = (service) => {
    if (selectedService === service) {
      setSelectedService("");
    } else {
      setSelectedService(service);
    }
  };

  const handleAddToCart = () => {
    // Here, you would typically update the global state or send an API request
    setCartOpen(true);
  };

  const handleAddToWishlist = () => {
    // Here, you would typically update the global state or send an API request
    setWishlistOpen(true);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCartOpen(false);
    setWishlistOpen(false);
  };

  return (
    <Box className={classes.ProductDetailBox}>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={5} md={5} sm={6} xs={12}>
            {/* <ProductSlider sliderImages={sliderImages}/> */}
            <img
              src="images/banner/trend1.webp"
              alt=""
              width="100%"
              style={{ borderRadius: "15px" }}
            />
          </Grid>
          <Grid item lg={7} md={7} sm={6} xs={12}>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h5" style={{ color: "#333333" }}>
                SKU SPTA12811
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
              <Typography variant="h5" style={{ color: "#333333" }}>
                Ships in 11 days
              </Typography>
            </Box>
            <Typography variant="h3">
              Hand Embroidered Net Saree in Light Pink
            </Typography>
            <Box display="flex" alignItems="center" mt={2} mb={2}>
              <Typography variant="body2" style={{ fontWeight: "600" }}>
                5
              </Typography>
              <StarIcon style={{ color: "#ffde01", fontSize: "16px" }} />
              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
              <Typography variant="body1" style={{ color: "#333333" }}>
                3650 Reviews on{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="body1" className={classes.originalPrice}>
                MRP <span style={{ color: "#999" }}>₹2,320.00₹2</span>
              </Typography>
              <Typography variant="body1" style={{ fontWeight: "600" }}>
                ₹2,320.00
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "#cb4551",
                  fontWeight: "600",
                  marginLeft: "8px",
                }}
              >
                20% Off
              </Typography>
              <Box
                className="offerBox"
                onClick={handleDrawerOpen}
                aria-label="View Offers"
              >
                <Typography variant="body2" style={{ color: "#fff" }}>
                  Offers: 3
                </Typography>
                <ArrowForwardIcon
                  className={classes.offerBoxIcon}
                  style={{
                    color: "#fff",
                    fontSize: "17px",
                  }}
                />
              </Box>
            </Box>
            <Typography variant="body1">Inclusive of all taxes</Typography>
            <Box mt={2} mb={3}>
              <Typography>
                Shipping:{" "}
                <span style={{ color: "#cb4551", fontWeight: "600" }}>
                  Free
                </span>
              </Typography>
            </Box>
            <Divider />
            <Box className={classes.section}>
              <Box mt={4} mb={2}>
                <Typography variant="h6" style={{ fontWeight: "600" }}>
                  Tailoring Services
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={4} xs={6}>
                  <Box
                    className="MainServicesBox"
                    onClick={() => handleServiceSelect("semi-stitched")}
                    style={{
                      backgroundColor:
                        selectedService === "semi-stitched"
                          ? "#e1f5fe"
                          : "#f7f7f7",
                      border:
                        selectedService === "semi-stitched"
                          ? "1px solid #2196f3"
                          : "1px solid #f7f7f7",
                    }}
                  >
                    <Radio
                      checked={selectedService === "semi-stitched"}
                      onChange={() => handleServiceSelect("semi-stitched")}
                      color="primary"
                    />
                    <Typography variant="body1">Semi Stitched</Typography>
                    <Typography variant="body1" style={{ color: "#712BC1" }}>
                      + ₹0.00
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={6}>
                  <Box
                    className="MainServicesBox"
                    onClick={() => handleServiceSelect("ready-to-wear")}
                    style={{
                      backgroundColor:
                        selectedService === "ready-to-wear"
                          ? "#e1f5fe"
                          : "#f7f7f7",
                      border:
                        selectedService === "ready-to-wear"
                          ? "1px solid #2196f3"
                          : "1px solid #f7f7f7",
                    }}
                  >
                    <Radio
                      checked={selectedService === "ready-to-wear"}
                      onChange={() => handleServiceSelect("ready-to-wear")}
                      color="primary"
                    />
                    <Typography variant="body1">Ready to Wear</Typography>
                    <Typography variant="body1" style={{ color: "#712BC1" }}>
                      + ₹1000.00
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.section}>
              <Typography variant="subtitle1" className={classes.sectionTitle}>
                Size
              </Typography>
              <Box display="flex" alignItems="center">
                {sizeOptionData?.map((data, i) => {
                  return (
                    <Box
                      key={i}
                      className={`sieOptionBox ${
                        selectedSize === data.size ? "selected" : ""
                      }`}
                      onClick={() => handleSizeSelect(data.size)}
                    >
                      <Typography variant="body1">{data.size}"</Typography>
                    </Box>
                  );
                })}
              </Box>
              <Typography variant="body2" color="textSecondary">
                <i>Size Chart | How To Measure</i>
              </Typography>
            </Box>
            <Box className={classes.section}>
              <Typography variant="body1">
                You Pay: ₹3,320.00 (Incl. Services)
              </Typography>
              <Typography variant="body2">
                Know our Shipping and Return policy. Any Questions? Just Ask
              </Typography>
            </Box>
            <Box display="flex">
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
                style={{ marginRight: "10px" }}
                onClick={handleAddToCart}
              >
                Add to Shopping Bag
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<FavoriteBorderIcon />}
                onClick={handleAddToWishlist}
              >
                Wishlist
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box mt={6}>
          <Typography
            variant="h6"
            style={{ fontWeight: "600", color: "rgb(113, 43, 193)" }}
          >
            Product Highlights
          </Typography>
          <Box className={classes.textboxs}>
            <List>
              <ListItem>Readymade Cotton Silk Sherwani in Blue</ListItem>
            </List>
          </Box>
          <Box className={classes.textboxs}>
            <List>
              <ListItem>
                This attire is Enhanced with Buttons, Pockets, Sequins and
                Resham work. Crafted in Chinese Collar and Full Sleeve
              </ListItem>
            </List>
          </Box>
          <Box className={classes.textboxs}>
            <List>
              <ListItem>
                Available with a Cotton Silk Pant in Blue and a Faux Georgette
                Jacket in Blue
              </ListItem>
            </List>
          </Box>
          <Box className={classes.textboxs}>
            <List>
              <ListItem>
                Do note: 1.)Brooch and Footwear shown in the image is for
                presentation purposes only. 2.)Half to one inch may vary in
                measurement. 3.)Slight variation in actual color vs. image is
                possible.
              </ListItem>
            </List>
          </Box>
          <Box mt={3}>
          <Typography
            variant="h6"
            style={{ fontWeight: "600", color: "rgb(113, 43, 193)",marginBottom:"10px" }}
          >
          Additional Info
          </Typography>
          
          <TableContainer>
            <Table className={classes.table} aria-label="additional information table">
              <TableBody>
                <TableRow>
                  <TableCell>Fabric</TableCell>
                  <TableCell>Net</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Blouse Fabric</TableCell>
                  <TableCell>Art Silk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Work</TableCell>
                  <TableCell>Embroidered</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Care Instructions</TableCell>
                  <TableCell>Dry Clean Only</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
        </Box>
      </Container>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6">Available Offers</Typography>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemText primary="Sitewide Offer: Flat 20% Off on Everything" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Free Shipping within India" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Subscribe to our Newsletter and get ₹500 Off" />
          </ListItem>
        </List>
      </Drawer>
      <Snackbar
        open={cartOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Item added to Shopping Bag!
        </Alert>
      </Snackbar>
      <Snackbar
        open={wishlistOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Item added to Wishlist!
        </Alert>
      </Snackbar>
    </Box>
  );
}
