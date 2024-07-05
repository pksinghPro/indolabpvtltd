import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
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

export default function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.textBox}>
      <Container>
        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Privacy Policy
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Last updated: June 29, 2024
          </Typography>
        </Box>
        <Box mb={4} className={classes.content}>
          <Typography variant="body1">
            Welcome to Fashionista's Privacy Policy, operated by IndoLab, LLC
            and its affiliates ("Company," "we," "our," and/or "us"). Your
            privacy is important to us, and this Privacy Policy explains how we
            collect, use, and protect your information through our ecommerce
            clothing store services (collectively, the "Services"). By using our
            Services, you agree to the collection and use of information in
            accordance with this policy.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" className={classes.content}>
            We collect various types of information when you use our Services,
            including personal information such as your name, email address,
            shipping address, payment information, and browsing behavior on our
            website.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            2. Use of Your Information
          </Typography>
          <Typography variant="body1" className={classes.content}>
            We use the information collected to process your orders, improve our
            Services, personalize your experience, and communicate with you
            about promotions and updates. We do not sell your information to
            third parties.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            3. Security of Your Information
          </Typography>
          <Typography variant="body1" className={classes.content}>
            We implement security measures to protect your personal information
            from unauthorized access and maintain data accuracy. However, no
            method of transmission over the internet or electronic storage is
            completely secure.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            4. Your Choices and Rights
          </Typography>
          <Typography variant="body1" className={classes.content}>
            You have the right to access, correct, or delete your personal
            information. You may also choose to opt-out of certain data
            collection practices.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            5. Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" className={classes.content}>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h2" className={classes.sectionTitle}>
            6. Contact Us
          </Typography>
          <Typography variant="body1" className={classes.content}>
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at{" "}
            <span style={{ color: "#712BC1" }}>Info@indolab.com</span>.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
