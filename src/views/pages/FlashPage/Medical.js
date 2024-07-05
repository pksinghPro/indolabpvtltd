import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Flipcardcomponent from "./Flipcardcomponent";
const useStyles = makeStyles((theme) => ({
  descriptionbox: {
    padding: "10px 0px",
    "& h4": {
      fontSize: "24px",
      fontWeight: "600",
      color: "#1F1F1F",
    },
    "& h5": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#3C3C3C",

      "& span": {
        color: "#1F1F1F",
        fontWeight: "500",
      },
    },

    "& .transciption": {
      background: "#F0F0F0",
      borderRadius: " 8px",
      padding: "24px",
      marginBottom: "10px",
      "& h6": {
        fontSize: "14px",
        fontWeight: "400",
        color: "#3C3C3C",
      },
    },
    "& .flexbox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      alignItems: "center",
      "@media(max-width:558px)": {
        display: "block",
      },
    },
  },
}));
const categoryData = [
  {
    text1: "Medical Transcription",
    text2: "122 Flashcards",
    text3: "Subject",
    text4: "Career Institution Medical Transcription",
    text5: "Author",
    text6: "Aadya Srivastava",
    text7: "Create Date & Time: 28.02.2023",
  },
  {
    text1: "Medical Transcription",
    text2: "122 Flashcards",
    text3: "Subject",
    text4: "Career Institution Medical Transcription",
    text5: "Author",
    text6: "Aadya Srivastava",
    text7: "Create Date & Time: 28.02.2023",
  },
  {
    text1: "Medical Transcription",
    text2: "122 Flashcards",
    text3: "Subject",
    text4: "Career Institution Medical Transcription",
    text5: "Author",
    text6: "Aadya Srivastava",
    text7: "Create Date & Time: 28.02.2023",
  },
  {
    text1: "Medical Transcription",
    text2: "122 Flashcards",
    text3: "Subject",
    text4: "Career Institution Medical Transcription",
    text5: "Author",
    text6: "Aadya Srivastava",
    text7: "Create Date & Time: 28.02.2023",
  },
  {
    text1: "Medical Transcription",
    text2: "122 Flashcards",
    text3: "Subject",
    text4: "Career Institution Medical Transcription",
    text5: "Author",
    text6: "Aadya Srivastava",
    text7: "Create Date & Time: 28.02.2023",
  },
];
function Medical({ handleClick, index }) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(true);
  const [view, setView] = useState(false);

  const handleClickOpen = () => {
    setOpen(false);
    setView(true);
  };

  const handleClose = () => {
    setOpen(false);
    setView(true);
  };
  return (
    <>
      <Box>
        {open && (
          <Box>
            <Box className={classes.descriptionbox}>
              <Box mb={3}>
                <Typography variant="h4">Sub-Category 1</Typography>
              </Box>
              <Grid container>
                {categoryData &&
                  categoryData.map((data, i) => {
                    return (
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box
                          className="transciption"
                          style={{ cursor: "pointer" }}
                          onClick={handleClickOpen}
                        >
                          <Box className="flexbox">
                            <Typography variant="h4">{data.text1}</Typography>
                            <Typography variant="h6">{data.text2}</Typography>
                          </Box>
                          <Typography
                            variant="h5"
                            style={{ margin: "24px 0px" }}
                          >
                            <span>{data.text3}</span> : {data.text4}
                          </Typography>
                          <Box className="flexbox">
                            <Typography variant="h5">
                              <span>{data.text5}</span> : {data.text6}
                            </Typography>
                            <Typography variant="h6">{data.text7}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Box>
        )}
        {view && (
          <Box>
            <Flipcardcomponent />
          </Box>
        )}
      </Box>
    </>
  );
}

export default Medical;
