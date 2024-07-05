import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Grid,
  Container,
  FormControl,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { FiUser, AiOutlineMail, GiSmartphone } from "react-icons/all";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
  },
  sectionTitle: {
    color: "#3C3B3D",
    fontWeight: 600,
    fontSize: "24px",
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: "#737373",
    fontSize: "14px",
    marginBottom: theme.spacing(3),
  },
  textControl: {
    marginBottom: theme.spacing(2),
    "& .MuiInputBase-input": {
      fontWeight: "400",
      color: "#A8A8A8",
    },
    "& .MuiInputBase-root": {
      borderRadius: "4px",
      background: "#F5F5F5",
      border: "1px solid #E0E0E0",
      padding: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function GetInTouch() {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Container>
        <Typography variant="h4" className={classes.sectionTitle}>
          Get in Touch
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          We are here to assist you 24/7.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth className={classes.textControl}>
              <TextField
                type="text"
                variant="outlined"
                placeholder="First Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiUser fontSize="25px" color="#B0B0B0" />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth className={classes.textControl}>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Last Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiUser fontSize="25px" color="#B0B0B0" />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.textControl}>
              <TextField
                type="email"
                variant="outlined"
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AiOutlineMail fontSize="25px" color="#B0B0B0" />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.textControl}>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GiSmartphone fontSize="25px" color="#B0B0B0" />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.textControl}>
              <TextField
                type="textarea"
                variant="outlined"
                placeholder="Describe your issue..."
                multiline
                rows={6}
                inputProps={{
                  maxLength: 300,
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.textControl}>
              <Button
                variant="contained"
                color="primary"
                className={classes.submitButton}
              >
                Submit
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
