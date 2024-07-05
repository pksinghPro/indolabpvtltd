import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  Button,
  Divider,
  InputBase,
  IconButton,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./../../component/Logo";
import { useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaLinkedinIn } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    backgroundColor: "#1a1a1a",
    padding: theme.spacing(8, 0),
    color: "#fff",
  },
  footerLogo: {
    maxWidth: "150px",
    marginBottom: theme.spacing(3),
  },
  footerTitle: {
    fontWeight: 600,
    fontSize: "18px",
    marginBottom: theme.spacing(2),
    color: "#fff",

  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    marginBottom: theme.spacing(1),
    display: "block",
    fontFamily: "'Heebo', sans-serif",

    "&:hover": {
      color: "#f8a488",
    },
  },
  socialIcons: {
    display: "flex",
    marginTop: theme.spacing(2),
  },
  icon: {
    color: "#fff",
    fontSize: "24px",
    "&:hover": {
      color: "#f8a488",
    },
  },
  subscribeSection: {
    backgroundColor: "#2a2a2a",
    padding: theme.spacing(4, 0),
    textAlign: "center",
  },
  subscribeInput: {
    backgroundColor: "#fff",
    borderRadius: "25px",
    padding: theme.spacing(1, 2),
    width: "70%",
    marginRight: theme.spacing(2),
  },
  subscribeButton: {
    backgroundColor: "#f8a488",
    color: "#fff",
    borderRadius: "25px",
    padding: theme.spacing(1, 4),
    "&:hover": {
      backgroundColor: "#d48270",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box>
      <Box className={classes.footerSection}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <img src="/images/logo.svg" alt="Logo" className={classes.footerLogo} />
              <Typography variant="body2" style={{color:"#fff"}}>The best place to find your fashion essentials. Shop the latest trends and styles.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.footerTitle}>Quick Links</Typography>
              <Link component={RouterLink} to="/about-us" className={classes.footerLink}>About Us</Link>
              <Link component={RouterLink} to="/help-center-page" className={classes.footerLink}>Contact Us</Link>
              <Link component={RouterLink} to="/privacy-policy" className={classes.footerLink}>Privacy Policy</Link>
              <Link component={RouterLink} to="/terms-and-conditions" className={classes.footerLink}>Terms & Conditions</Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.footerTitle}>Customer Service</Typography>
              <Link component={RouterLink} to="/shipping-return" className={classes.footerLink}>Shipping & Returns</Link>
              <Link component={RouterLink} to="/faq" className={classes.footerLink}>FAQ</Link>
              <Link component={RouterLink} to="/store-locator" className={classes.footerLink}>Store Locator</Link>
              <Link component={RouterLink} to="/blogs" className={classes.footerLink}>Blog</Link>

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.footerTitle}>Follow Us</Typography>
              <Box className={classes.socialIcons}>
                <IconButton component="a" href="https://facebook.com" className={classes.icon}>
                  <FaFacebookF />
                </IconButton>
                <IconButton component="a" href="https://instagram.com" className={classes.icon}>
                  <FaInstagram />
                </IconButton>
                <IconButton component="a" href="https://twitter.com" className={classes.icon}>
                  <FaTwitter />
                </IconButton>
                <IconButton component="a" href="https://pinterest.com" className={classes.icon}>
                  <FaPinterest />
                </IconButton>
                <IconButton component="a" href="https://linkedin.com" className={classes.icon}>
                  <FaLinkedinIn />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.subscribeSection}>
        <Container>
          <Typography variant="h6" style={{color:"#fff"}}>Subscribe to our Newsletter</Typography>
          <Box mt={2}>
            <InputBase
              placeholder="Enter your email"
              className={classes.subscribeInput}
            />
            <Button className={classes.subscribeButton}>Subscribe</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
