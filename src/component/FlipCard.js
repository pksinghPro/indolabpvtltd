import { Box, Typography, makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React from "react";
import { useRef } from "react";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const useStyles = makeStyles((theme) => ({
  filpmain: {
    width: "100%",
    height: "100%",
    // background: "url('images/flipcardback.png')",
    "& .flippy-front, .flippy-back": {
      padding: "60px 20px",
      background: "url('images/flipcardback1.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius:"10px",
      border:"2px solid #c8c8c8",
    },
    "& .displayStart": {
      marginTop: "-25px",
    },
  },
  img: {
    maxWidth: "100px",
  },
}));

export default function FlipCard() {
  const ref = useRef();
  const classes = useStyles();

  return (
    <Box className={classes.filpmain}>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="vertical" // horizontal or vertical
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        // className={classes.filpmain}
      >
        <FrontSide>
          <Box className="frontside">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscinLorem ipsum dolor
              sit amet, conseur adipiscin Lorem ipsum dolor sit amet, ectetur
              adipiscinLorem
            </Typography>
          </Box>
        </FrontSide>
        <BackSide>
          <Box className="displayStart">
            <Box mr={2}>
              <img src="images/flipback.png" className={classes.img} />
            </Box>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscinLorem ipsum dolor
              sit amet, conseur adipiscin Lorem ipsum dolor sit amet, ectetur
              adipiscinLorem
            </Typography>
          </Box>
        </BackSide>
      </Flippy>
    </Box>
  );
}
