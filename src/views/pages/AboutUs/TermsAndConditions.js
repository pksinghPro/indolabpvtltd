import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Container,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textBox: {
    padding: theme.spacing(4),
    background: "#FFFFFF",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
  },
  sectionTitle: {
    color: "#3C3B3D",
    fontWeight: 600,
    fontSize: "24px",
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: "#494949",
    fontSize: "16px",
    marginBottom: theme.spacing(2),
  },
  content: {
    color: "#494949",
    fontSize: "14px",
    lineHeight: "1.6",
  },
}));

export default function TermsConditions() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.textBox}>
      <Container>
        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Terms & Conditions
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Last updated: 29/06/2024
          </Typography>
        </Box>
        <Box mb={4} className={classes.content}>
          <Typography variant="body1">
            Welcome to Fashionista, operated by IndoLab, LLC and its affiliates
            ("Company," "we," "our," and/or "us"). These Terms & Conditions
            govern your use of our website and services (collectively, the
            "Services"). By accessing or using our Services, you agree to be
            bound by these Terms. Please read them carefully before using our
            Services.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            1. Use of Our Services
          </Typography>
          <Typography variant="body1" className={classes.content}>
            You agree to use the Services only for purposes that are permitted
            by (a) these Terms & Conditions and (b) any applicable law,
            regulation, or generally accepted practices or guidelines in the
            relevant jurisdictions.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            2. Privacy Policy
          </Typography>
          <Typography variant="body1" className={classes.content}>
            Your use of our Services is also governed by our Privacy Policy.
            Please review our Privacy Policy to understand our practices.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            3. Account Registration
          </Typography>
          <Typography variant="body1" className={classes.content}>
            To access some features of the Services, you may be required to
            register for an account. When you register for an account, you agree
            to provide accurate, current, and complete information as prompted
            by the registration form and to maintain and promptly update such
            information to keep it accurate, current, and complete.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            4. Intellectual Property
          </Typography>
          <Typography variant="body1" className={classes.content}>
            The content on the Services ("Content") and the trademarks,
            service marks, and logos contained therein ("Marks") are owned by or
            licensed to the Company, and are subject to copyright and other
            intellectual property rights under applicable laws.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" className={classes.content}>
            In no event shall the Company, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Services; (ii) any conduct or
            content of any third party on the Services; (iii) any content
            obtained from the Services; and (iv) unauthorized access, use, or
            alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence), or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed of its essential purpose.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            6. Contact Us
          </Typography>
          <Typography variant="body1" className={classes.content}>
            If you have any questions about these Terms & Conditions, please
            contact us at{" "}
            <span style={{ color: "#712BC1" }}>Info@indolab.com</span>.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
