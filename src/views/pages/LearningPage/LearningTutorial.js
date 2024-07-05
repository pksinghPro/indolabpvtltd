import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import TutorialCard from "src/component/TutorialCard";

const useStyles = makeStyles((theme) => ({
  tutorialbox: {
    padding: "10px 0px 50px",

    "& .tutobox": {
      "& h3": {
        color: "#1F1F1F",
        fontSize: "30px",
        fontWeight: "600",
      },
      "& h5": {
        color: "#1C1C1C",
        fontSize: "20px",
        fontWeight: "400",
        margin: "12px 0px 22px",
        "& span": {
          color: "#712BC1",
        },
      },
    },
  },
}));
const learningCard = [
  {
    img1: "images/cell.png",
    text1: "Placenta Abruption",
    text2:
      "  Lorem ipsum dolor sit amet consect eturtinc idunt molestie rhoncus a ac.",
  },
  {
    img1: "images/cell.png",
    text1: "Placenta Abruption",
    text2:
      "  Lorem ipsum dolor sit amet consect eturtinc idunt molestie rhoncus a ac.",
  },
  {
    img1: "images/cell.png",
    text1: "Placenta Abruption",
    text2:
      "  Lorem ipsum dolor sit amet consect eturtinc idunt molestie rhoncus a ac.",
  },
  {
    img1: "images/cell.png",
    text1: "Placenta Abruption",
    text2:
      "  Lorem ipsum dolor sit amet consect eturtinc idunt molestie rhoncus a ac.",
  },
  {
    img1: "images/cell.png",
    text1: "Placenta Abruption",
    text2:
      "  Lorem ipsum dolor sit amet consect eturtinc idunt molestie rhoncus a ac.",
  },
  {
    img1: "images/cell.png",
    text1: "Placenta Abruption",
    text2:
      "  Lorem ipsum dolor sit amet consect eturtinc idunt molestie rhoncus a ac.",
  },
];
function LearningTutorial() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.tutorialbox}>
        <Container>
          <Box>
            <Box className="tutobox">
              <Typography variant="h3">Learning Tutorials</Typography>
              <Typography variant="h5">
                The Medical Education Cell | <span>Med</span>
                <span style={{ color: "#FF860D" }}>Bound</span>
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {learningCard &&
                learningCard.map((data, i) => {
                  return (
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <TutorialCard data={data} index={i} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LearningTutorial;
