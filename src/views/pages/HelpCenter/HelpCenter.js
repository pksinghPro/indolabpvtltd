import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Container,
  Grid,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textBox: {
    padding: theme.spacing(4),
    background: "#FFFFFF",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
  },
  heading: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  headingIcon: {
    marginRight: theme.spacing(2),
    width: 40,
    height: 40,
    objectFit: "cover",
  },
  sectionTitle: {
    color: "#3C3B3D",
    fontWeight: 600,
    fontSize: "24px",
  },
  subtitle: {
    color: "#494949",
    fontSize: "12px",
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
    background: "#E0E0E0",
  },
  listItem: {
    marginBottom: theme.spacing(2),
  },
}));

export default function HelpCenter() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.textBox}>
      <Container>
        <Box className={classes.heading}>
          <img
            src="./images/HelpCenter.png"
            alt="Help Center Icon"
            className={classes.headingIcon}
          />
          <Typography variant="h3" className={classes.sectionTitle}>
            Fashionista Help Center
          </Typography>
        </Box>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Need assistance? Find answers here.
        </Typography>
        <Box className={classes.divider} />
        <Box className={classes.listItem}>
          <Typography variant="h4">How to Report a Violation?</Typography>
          <Typography variant="body1">
            Step-by-step guide on reporting violations on Fashionista.
          </Typography>
        </Box>
        <Box className={classes.listItem}>
          <Typography variant="h4">Reporting Specific Violations</Typography>
          <Typography variant="body1">
            Learn about different types of violations and how to report them.
          </Typography>
        </Box>
        <Box className={classes.listItem}>
          <Typography variant="h4">Contact Support</Typography>
          <Typography variant="body1">
            For further assistance, contact our support team at{" "}
            <span style={{ color: "#712BC1" }}>Info@indolab.com</span>.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
