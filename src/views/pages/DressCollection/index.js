import React, { useState } from "react";
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  IconButton,
} from "@material-ui/core";
import DressCollectionCard from "src/component/DressCollectionCard";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  topDressBox: {
    padding: "50px 0px",
  },
  filterBox: {
    position: "sticky",
    top: "0",
    height: "100vh",
    overflowY: "auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.1)",
    background: "#fff",
  },
  filterSection: {
    marginBottom: "8px",
  },
  filterTitle: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showMoreButton: {
    marginTop: "10px",
  },
}));

const productData = [
  {
    img: "images/banner/trend1.webp",
  },
  {
    img: "images/banner/trend2.webp",
  },
  {
    img: "images/banner/trend3.webp",
  },
  {
    img: "images/banner/trend4.webp",
  },
  {
    img: "images/banner/trend5.webp",
  },
  {
    img: "images/banner/trend6.webp",
  },
  {
    img: "images/banner/trend7.webp",
  },
  {
    img: "images/banner/trend8.webp",
  },
  {
    img: "images/banner/trend9.webp",
  },
];

const colorOptions = [
  "Green",
  "Pink",
  "Purple",
  "White",
  "Grey",
  "Orange",
  "Brown",
  "Metallic",
  "Blue",
  "Red",
  "Yellow",
  "Black",
  "Beige",
  "Multicolor",
  "Gold",
  "Silver",
];
const typeOptions = [
  "Woven Saree",
  "Printed Sarees",
  "Regional",
  "Embroidered",
  "Handloom",
  "South",
];
const priceOptions = [
  "$0 - $50",
  "$50 - $100",
  "$100 - $200",
  "$200 - $500",
  "$500+",
];
const plusSizeOptions = [
  "44",
  "46",
  "48",
  "50",
  "52",
  "54",
  "56",
  "58",
  "60",
  "62",
  "64",
  "66",
  "68",
  "70",
  "72",
  "74",
];
const workOptions = [
  "Traditional",
  "Zari",
  "Resham",
  "Contemporary",
  "Digital Print",
  "Sequins",
  "+ 26 more",
];
const dispatchOptions = ["Ready to Ship", "+ 5 more"];
const tailoringOptions = [
  "Customizable/Fabric",
  "Semi Stitched",
  "Readymade",
];
const discountOptions = [
  "11%-20%",
  "21%-30%",
  "31%-40%",
  "41%-50%",
];

function DressType() {
  const classes = useStyles();
  const [showMoreColors, setShowMoreColors] = useState(false);
  const [showMorePrices, setShowMorePrices] = useState(false);
  const [showMoreTypes, setShowMoreTypes] = useState(false);
  const [showMoreSizes, setShowMoreSizes] = useState(false);
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreDispatch, setShowMoreDispatch] = useState(false);
  const [showMoreTailoring, setShowMoreTailoring] = useState(false);
  const [showMoreDiscount, setShowMoreDiscount] = useState(false);

  const [openColors, setOpenColors] = useState(true);
  const [openPrices, setOpenPrices] = useState(true);
  const [openTypes, setOpenTypes] = useState(true);
  const [openSizes, setOpenSizes] = useState(true);
  const [openWork, setOpenWork] = useState(true);
  const [openDispatch, setOpenDispatch] = useState(true);
  const [openTailoring, setOpenTailoring] = useState(true);
  const [openDiscount, setOpenDiscount] = useState(true);

  const visibleColors = showMoreColors ? colorOptions : colorOptions.slice(0, 8);
  const visiblePrices = showMorePrices ? priceOptions : priceOptions.slice(0, 3);
  const visibleTypes = showMoreTypes ? typeOptions : typeOptions.slice(0, 4);
  const visibleSizes = showMoreSizes ? plusSizeOptions : plusSizeOptions.slice(0, 4);
  const visibleWork = showMoreWork ? workOptions : workOptions.slice(0, 5);
  const visibleDispatch = showMoreDispatch ? dispatchOptions : dispatchOptions.slice(0, 1);
  const visibleTailoring = showMoreTailoring ? tailoringOptions : tailoringOptions.slice(0, 2);
  const visibleDiscount = showMoreDiscount ? discountOptions : discountOptions.slice(0, 2);

  return (
    <>
      <Box className={classes.topDressBox}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Box className={classes.filterBox}>
                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Shop by Color
                    <IconButton onClick={() => setOpenColors(!openColors)}>
                      {openColors ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openColors && (
                    <>
                      <Grid container spacing={2}>
                        {visibleColors.map((color, index) => (
                          <Grid item lg={6} md={6} sm={6} xs={6} key={index}>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox name={color} />}
                                label={color}
                              />
                            </FormGroup>
                          </Grid>
                        ))}
                      </Grid>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMoreColors(!showMoreColors)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMoreColors ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>

                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Shop by Price
                    <IconButton onClick={() => setOpenPrices(!openPrices)}>
                      {openPrices ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openPrices && (
                    <>
                      <FormGroup>
                        {visiblePrices.map((price, index) => (
                          <FormControlLabel
                            control={<Checkbox name={price} />}
                            label={price}
                            key={index}
                          />
                        ))}
                      </FormGroup>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMorePrices(!showMorePrices)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMorePrices ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>

                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Shop by Type
                    <IconButton onClick={() => setOpenTypes(!openTypes)}>
                      {openTypes ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openTypes && (
                    <>
                      <FormGroup>
                        {visibleTypes.map((type, index) => (
                          <FormControlLabel
                            control={<Checkbox name={type} />}
                            label={type}
                            key={index}
                          />
                        ))}
                      </FormGroup>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMoreTypes(!showMoreTypes)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMoreTypes ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>

                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Plus Size
                    <IconButton onClick={() => setOpenSizes(!openSizes)}>
                      {openSizes ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openSizes && (
                    <>
                      <FormGroup>
                        {visibleSizes.map((size, index) => (
                          <FormControlLabel
                            control={<Checkbox name={size} />}
                            label={size}
                            key={index}
                          />
                        ))}
                      </FormGroup>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMoreSizes(!showMoreSizes)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMoreSizes ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>

                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Work
                    <IconButton onClick={() => setOpenWork(!openWork)}>
                      {openWork ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openWork && (
                    <>
                      <FormGroup>
                        {visibleWork.map((work, index) => (
                          <FormControlLabel
                            control={<Checkbox name={work} />}
                            label={work}
                            key={index}
                          />
                        ))}
                      </FormGroup>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMoreWork(!showMoreWork)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMoreWork ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>

                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Time to Dispatch
                    <IconButton onClick={() => setOpenDispatch(!openDispatch)}>
                      {openDispatch ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openDispatch && (
                    <>
                      <FormGroup>
                        {visibleDispatch.map((dispatch, index) => (
                          <FormControlLabel
                            control={<Checkbox name={dispatch} />}
                            label={dispatch}
                            key={index}
                          />
                        ))}
                      </FormGroup>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMoreDispatch(!showMoreDispatch)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMoreDispatch ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>

                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Tailoring Options
                    <IconButton onClick={() => setOpenTailoring(!openTailoring)}>
                      {openTailoring ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openTailoring && (
                    <>
                      <FormGroup>
                        {visibleTailoring.map((tailoring, index) => (
                          <FormControlLabel
                            control={<Checkbox name={tailoring} />}
                            label={tailoring}
                            key={index}
                          />
                        ))}
                      </FormGroup>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMoreTailoring(!showMoreTailoring)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMoreTailoring ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>

                <Box className={classes.filterSection}>
                  <Typography className={classes.filterTitle}>
                    Discount
                    <IconButton onClick={() => setOpenDiscount(!openDiscount)}>
                      {openDiscount ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Typography>
                  {openDiscount && (
                    <>
                      <FormGroup>
                        {visibleDiscount.map((discount, index) => (
                          <FormControlLabel
                            control={<Checkbox name={discount} />}
                            label={discount}
                            key={index}
                          />
                        ))}
                      </FormGroup>
                      <Button
                        className={classes.showMoreButton}
                        onClick={() => setShowMoreDiscount(!showMoreDiscount)}
                        style={{ color: "#712BC1" }}
                      >
                        {showMoreDiscount ? "Show Less" : "+ Show More"}
                      </Button>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item lg={9} md={9} sm={8} xs={12}>
              <Grid container spacing={1}>
                {productData?.map((data, index) => {
                  return (
                    <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                      <Box>
                        <DressCollectionCard data={data} index={index} />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default DressType;
