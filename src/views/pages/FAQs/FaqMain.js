import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  InputAdornment,
  Typography,
  FormControl,
  TextField,
  Divider,
} from "@material-ui/core";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
const useStyles = makeStyles((theme) => ({
  textBox: {
    "& h3": {
      fontSize: "24px",
    },
    "& h4": {
      fontSize: "16px",
      fontWeight: "600",
      color: "#3C3B3D",
    },
    "& p": {
      fontSize: "14px",
      color: "#494949",
    },
  },
  textControl: {
    "& .MuiOutlinedInput-root": {
      background: "#F7F7F7",
      border: "1px solid #BBBBBB",
      borderRadius: "36px",
    },
    "& .MuiInputBase-input": {
      color: "#494949",
    },
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
}));
const storiesData = [
  {
    text1: "Stories-1 heading",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    text1: "Stories-2 heading",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    text1: "Stories-3 heading",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
  {
    text1: "Stories-4 heading",
    text2:
      "Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris.Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac. Purus est aliquet eu duis ultricies ut est urna euismod. Sit viverra id condimentum convallis dictum sed mauris. Lorem ipsum dolor sit amet consectetur. Lobortis tincidunt molestie rhoncus a ac.",
  },
];

function FaqMain() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.textBox}>
        <Box className={classes.alignItems}>
          <Grid container>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <FormControl fullWidth className={classes.textControl}>
                <TextField
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  placeholder="Search..."
                  name="enterCode"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IoSearchOutline fontSize="25px" color="#FF860D" />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Box mt={2}>
          <Box mt={3} mb={4}>
            <Typography variant="h3">
              FAQs On{" "}
              <span style={{ color: "#712BC1", fontWeight: "400" }}>Med</span>
              <span style={{ color: "#712BC1", fontWeight: "400" }}>Bound</span>
            </Typography>
          </Box>
          <Box className={classes.flexBox}>
            <AiOutlineMenu fontSize="17px" color="#FF860D" />
            <Box ml={1}>
              <Typography variant="h4">General</Typography>
            </Box>
          </Box>
          <Box mt={1}>
            <Divider />
          </Box>
        </Box>
        <Box mt={2}>
          <Box mt={1}>
            <Typography variant="h4">Q. What is IndoLab?</Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2">
            IndoLab is a global community for medical and healthcare students
              and professionals. You can share your opinion and perspective on
              medicine, health and the life around it. Take the quizzes on
              different medical topics anytime.
            </Typography>
          </Box>
        </Box>
        <Box mt={6}>
          <Box mt={1}>
            <Typography variant="h4">Q. Is it FREE to join?</Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2">
              Yes, IndoLab is a free resource for the users.
            </Typography>
          </Box>
        </Box>
        <Box mt={2} mb={2}>
          <Box mt={1}>
            <Typography variant="h4">
              Q. Who can join or Sign Up for IndoLab?
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2">
            IndoLab is a professional networking platform for VERIFIED
              students and professionals from medical and health care
              occupations. We are dedicated to provide a wide spectrum of
              socio-educational opportunities to enhance your career and
              academic growth.
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Box mt={1}>
            <Typography variant="h4">
              Q. How do you verify the users?
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2">
            IndoLab platform is only for VERIFIED students and professionals
              from medical and health care industry. Thus, when you create a
              user account (sign up) at IndoLab, we ask for certain information
              (example: educational background, name of academic Institution,
              degree/diploma and license number). It does take an extra moment,
              but it helps maintain the sanctity of the platform.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default FaqMain;
