import ExamTable from "src/component/ExamTable";
import { Box, Typography, makeStyles, Container } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  ExamModuleBox: {
    padding: "50px 0px 50px",
    "& h5": {
      fontWeight: "600",
      paddingBottom: "15px",
    },
    "& h6": {
      fontSize: "16px",
      fontWeight: "600",
      color: "#585858",
    },
    "& p": {
      fontSize: "12px",
      fontWeight: "400",
    },
  },
}));

export default function ExamModule() {
  const classes = useStyles();

  return (
    <Box className={classes.ExamModuleBox}>
      <Container>
        <Typography variant="h5">Exam Module</Typography>
        <Typography variant="h6">About Exam Module</Typography>
        <Box mt={1} mb={3}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Sed ullamcorper nulla risus
            commodo adipiscing imperdiet nunc. Elit phasellus fames risus
            malesuada sed risus id. Proin nascetur morbi eget mattis dis. Tempor
            nisi pharetra massa interdum metus duis est lacus proin. Ipsum amet
            venenatis aliquam cum. Vel eget donec dictum leo elit elit et. Ut
            adipiscing malesuada enim viverra sit eu. Viverra et ut consectetur
            tellus sem egestas dolor amet. Tristique massa faucibus nibh
            adipiscing feugiat. Accumsan pharetra tortor lectus nibh sagittis
            cras eget. Purus neque nec eget et et. Sodales euismod in et platea
            neque netus.
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="h6">List of available exams & links</Typography>
        </Box>

        <Box my={2}>
          <ExamTable />
        </Box>
        <Box my={1}>
          <Typography variant="h6">Indolab</Typography>
        </Box>
        <Typography variant="body2">
          Become a Indolab Member To Excess the Exam Platform With Indolab
          App.
        </Typography>
      </Container>
    </Box>
  );
}
