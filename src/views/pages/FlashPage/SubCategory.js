import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import Medical from "./Medical";
import Achievement from "./Achievement";
import { FiSearch } from "react-icons/fi";
const useStyles = makeStyles((theme) => ({
  subboxes: {
    padding: "10px 0px",
    "& .textall": {
      marginBottom: "50px",

      "& h3": {
        fontSize: "32px",
        fontWeight: "600",
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
  TabBox: {
    "& .active": {
      background: "#F0F0F0",
      border: "1px solid #E2E2E2",
      borderRadius: "4px",
      fontWeight: "300",
      fontSize: "14px",
      padding: "11px 0px",
      marginBottom: "10px",
      width: "90%",
      color: "#464646",
      "&:hover": {
        background: "#FF860D",
        color: "#FFFFFF",
      },
    },
    "& .inactive": {
      background: "#F0F0F0",
      border: "1px solid #E2E2E2",
      borderRadius: "4px",
      fontWeight: "300",
      fontSize: "14px",
      padding: "11px 0px",
      marginBottom: "10px",
      width: "90%",
      color: "#464646",
    },
  },
}));
const tabData = [
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
  {
    tabname: "Sub-Category-1 ",
  },
];
function SubCategory({ index, handleClick }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [tabView, setTabView] = useState("MyCreation");

  return (
    <>
      <Box className={classes.subboxes}>
        <Box className="textall">
          <Grid container spacing={2}>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box>
                <Typography variant="h3">Flashcards</Typography>
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
                    placeholder="Browse by sub-category.."
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
        {index?.length > 0 ? (
          <Grid item xs={12} sm={12} lg={12} md={12}>
            {index[0] === 0 && (
              <Medical handleClick={handleClick} index={index} />
            )}
            {/* {index[1] === 1 && (
              <Achievement handleClick={handleClick} index={index} />
            )} */}
          </Grid>
        ) : (
          <Box className={classes.TabBox}>
            <Grid container>
              {tabData &&
                tabData.map((data, i) => {
                  return (
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                      <Box className="buttonBoxtab">
                        <Button
                          // onClick={() => setTabView("MyCreation")}

                          onClick={() => handleClick(i)}
                          className={
                            tabView === "MyCreation" ? "active" : "inactive"
                          }
                        >
                          {data.tabname}
                        </Button>
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}

export default SubCategory;
