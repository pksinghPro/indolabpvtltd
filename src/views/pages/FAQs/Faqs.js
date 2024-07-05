import { Box, Container, makeStyles, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    padding: "50px 0px 50px 0px",
  },
  accordion: {
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    margin: "10px 0",
    '&:before': {
      display: 'none',
    },
  },
  accordionSummary: {
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #e0e0e0",
  },
  accordionDetails: {
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  faqTitle: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
}));

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. The items must be in their original condition."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Shipping charges may vary depending on the destination."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive an email with the tracking information."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay."
  }
];

export default function Faqs() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.bannerBox}>
      
      <Container>
      <Typography variant="h4" className={classes.faqTitle}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                className={classes.accordion}
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={classes.accordionSummary}
                >
                  <Typography className={classes.heading}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
