import UpcommingwebCards from "src/component/UpcommingwebCards";
import { Box, Typography, makeStyles, Container } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  upcommingBox: {
    "& .postImg": {
      width: "100%",
      margin: "0",
      overflow: "hidden",
      height: "100%",
      "& img": {
        width: "100%",
        minHeight: "100%",
        objectFit: "contain",
      },
    },
    "& .h3": {
      color: "#1F1F1F",
    },
    "& h6": {
      "& span": {
        fontWeight: "600",
      },
    },
    "& .zoomclass": {
      padding: "20px 0px",
    },
  },
}));
const data = [
  {
    imgweb: "images/zoom1.png",
    title: "Placenta Abruption",
    text1: " Date: 15th April 2023 | 18:00 hour IST",
    text2: "  Program : Clinical Case Discussion & Mic",
    text3: "  Topics : Obstertrics & Gynaecology, Medicine, Surgery",
    text4: "  Now Get a FREE Participation Certificate on attending th Webinar",
    sub1: "Dr Darshit Patel",
    sub2: "(MBBS)",
    sub3: "Speaker",
  },
  {
    imgweb: "images/zoom1.png",
    title: "Placenta Abruption",
    text1: " Date: 15th April 2023 | 18:00 hour IST",
    text2: "  Program : Clinical Case Discussion & Mic",
    text3: "  Topics : Obstertrics & Gynaecology, Medicine, Surgery",
    text4: "  Now Get a FREE Participation Certificate on attending th Webinar",
    sub1: "Dr Darshit Patel",
    sub2: "(MBBS)",
    sub3: "Speaker",
  },
  {
    imgweb: "images/zoom1.png",
    title: "Placenta Abruption",
    text1: " Date: 15th April 2023 | 18:00 hour IST",
    text2: "  Program : Clinical Case Discussion & Mic",
    text3: "  Topics : Obstertrics & Gynaecology, Medicine, Surgery",
    text4: "  Now Get a FREE Participation Certificate on attending th Webinar",
    sub1: "Dr Darshit Patel",
    sub2: "(MBBS)",
    sub3: "Speaker",
  },
];

export default function Upcomingweb() {
  const classes = useStyles();

  return (
    <Box className={classes.upcommingBox}>
      <Box className="ProileImg">
        <figure className="postImg">
          <img src="images/upcommingimg.png" alt="" />
        </figure>
      </Box>

      <Container>
        <Box className="zoomclass">
          <Box mt={2} mb={1}>
            <Typography variant="h3">Upcoming Webinars on Zoom</Typography>
          </Box>
          <Typography variant="h6">
            The Medical Education Cell |{" "}
            <span style={{ color: "#712BC1" }}>Med</span>
            <span style={{ color: "#FF860D" }}> Bound</span>
          </Typography>
          <Box mt={3}>
            {data.map((value) => (
              <UpcommingwebCards value={value} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
