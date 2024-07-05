import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { AnimationOnScroll } from "react-animation-on-scroll";

const useStyles = makeStyles((theme) => ({
  budgetBox: {
    padding: "60px 0",
    backgroundColor: "#f8f9fa",
    "& .zoneBox": {
      textAlign: "center",
      "& h2": {
        fontSize: "48px",
        fontWeight: "700",
        color: "#333",
        marginBottom: theme.spacing(2),
        "& span": {
          color: "#FF860D",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
    },
    "& .cardMedia": {
      height: 300,
      borderRadius: "10px 10px 0 0",
    },
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    image: "/images/banner/casualshirt.jpg",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Jeans",
    image: "/images/banner/jeans.avif",
    price: "$39.99",
  },
  {
    id: 3,
    name: "Summer Dress",
    image: "/images/banner/summerdress.jpg",
    price: "$29.99",
  },
];

export default function BudgetStore() {
  const classes = useStyles();

  return (
    <Box className={classes.budgetBox}>
      <Container>
        <Box mb={4} className="zoneBox">
          <AnimationOnScroll animateIn="bounceInRight">
            <Typography variant="h2">
              The Budget <span>Store</span>
            </Typography>
          </AnimationOnScroll>
        </Box>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className="cardMedia"
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
