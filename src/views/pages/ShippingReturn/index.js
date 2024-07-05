import { Box, Container, makeStyles, Grid, Card, CardContent, Typography, Divider } from "@material-ui/core";
import React,{useEffect} from "react";
import {  useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ShippingReturnBox: {
    padding: "50px 0px",
    backgroundColor: "#f7f7f7",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    transition: "transform 0.3s ease-in-out",
    '&:hover': {
      transform: "translateY(-5px)",
    },
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: theme.spacing(1),
  },
  answer: {
    fontSize: "16px",
    color: "#555",
  },
  title: {
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  divider: {
    margin: "20px 0",
  },
}));

const shippingReturns = [
  {
    question: "What is your shipping policy?",
    answer: "We offer free standard shipping on all orders over $50. Expedited shipping options are available at checkout."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 5-7 business days. Expedited shipping options are available and may vary in delivery times."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. The items must be in their original condition and packaging."
  },
  {
    question: "How do I return an item?",
    answer: "To return an item, please contact our customer service to receive a return authorization and instructions."
  },
  {
    question: "Are there any return fees?",
    answer: "Return shipping is free for defective or incorrect items. For all other returns, a return shipping fee may apply."
  },
];

export default function ShippingReturn() {
  const classes = useStyles();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Box className={classes.ShippingReturnBox}>
      <Container>
        <Typography className={classes.title}>Shipping & Returns</Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={3}>
          {shippingReturns.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.heading}>{item.question}</Typography>
                  <Typography className={classes.answer}>{item.answer}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
