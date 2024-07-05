import {
  Box,
  Grid,
  makeStyles,
  Typography,
  FormControl,
  TextField,
  InputAdornment,
  Container,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Category from "src/component/Category";
import { FiSearch } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  FlashCardBox: {
    padding: "30px 0px 70px",
    "& .textall": {
      marginBottom: "50px",

      "& h3": {
        fontSize: "32px",
        fontWeight: "600",
        textTransform: "uppercase",
      },
      "& h6": {
        fontSize: "18px",
        color: "#464646",
        fontWeight: "500",
        marginTop: "2px",
        "& span": {
          fontSize: "18px",
          fontWeight: "400",
          color: "#712BC1",
        },
      },
    },
  },
  mainform: {
    "& .MuiOutlinedInput-root": {
      height: "48px",
      borderRadius: "25px",
      backgroundColor: "#F7F7F7",
    },

    "& .searchBox": {
      "& .MuiFormControl-root": {
        borderRadius: "50px",
      },
    },
    "& .MuiInputBase-input": {
      // backgroundColor: "#fff",
      fontSize: "16px",
      fontWeight: "400",
      color: "#494949",
    },
  },
}));

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

export default function FlashCard() {
  const classes = useStyles();
  return (
    <Box className={classes.FlashCardBox}>
      <Container>
        <Box className="textall">
          <Grid container spacing={2}>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box>
                <Typography variant="h3">FLASHCARDS</Typography>
                <Typography variant="h6">
                  The medical education cell | <span>Med</span>
                  <span style={{ color: "#FF860D" }}>Bound</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box className={classes.mainform}>
                <Box className="searchBox">
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Browse by category"
                    type="search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <FiSearch
                              position="start"
                              style={{ fontSize: "24px", color: "#FF860D" }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {data.map((value) => (
              <Grid item xs={12} sm={6} md={4}>
                <Category value={value} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
