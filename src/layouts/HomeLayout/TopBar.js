import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  Grid,
  Box,
  Container,
  Typography,
  Divider,
  Hidden,
  Menu,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./../../component/Logo";
import MenuItems from "./MenuItems";
import { FaApple, FaGoogle } from "react-icons/fa";
import { withStyles } from "@material-ui/core/styles";
import {
  FaMobileAlt,
  FaQuestionCircle,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa"; // Import FontAwesome icons
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    padding: "0px 0px",
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
      height: "100%",
    },
  },

  logoDrawer: {
    paddingLeft: "10px",
    width: "140px",
    marginBottom: "30px",
  },
  drawerContainer: {
    padding: "20px 0px",
    height: "100%",
    background: "#fff",
    width: "260px",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "0px",
    right: "-10px",
    fontSize: "25px",
  },
  logoImg: {
    width: "75px",
    // height: '44.5px',
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
    },
  },
  containerHeight: {
    height: "100%",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
  },
  topbarBox: {
    background: "#712BC1",
    padding: "10px",
    "& p": {
      color: "#fff",
    },
  },
  mainClassBox: {
    "& li": {
      display: "flex",
      color: "#000",
      fontFamily: "'Poppins', sans-serif",

      "&:hover": {
        color: "#FF860D",
      },
    },
    display: "flex",
  },
  drawerClassBox: {
    "& li": {
      display: "flex",
      color: "#000",
      fontFamily: "'Poppins', sans-serif",

      "&:hover": {
        color: "#FF860D",
      },
    },
  },
  barimage: {
    borderTop: "3px solid #FF860D",
    padding: "20px",
    maxWidth: "162px",
    textAlign: "center",
  },
}));

export default function Header() {
  const {
    mainClassBox,
    drawerClassBox,
    toolbar,
    topbarBox,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    mainHeader,
    wallet,
    submenu,
    barimage,
  } = useStyles();
  const history = useHistory();
  console.log(history.location);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const menuItems = [
    {
      title: "Saree",
      url: "/dress-collection",
    },
    {
      title: "Salwar Kameez",
      url: "/dress-collection",
    },
    {
      title: "Lehenga",
      url: "/dress-collection",
    },
    {
      title: "Men",
      url: "/dress-collection",
    },

    {
      title: "Concepts",
      url: "/dress-collection",
    },
    {
      title: "Kids",
      url: "/dress-collection",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const StyledMenu = withStyles({
    paper: {
      marginTop: "10px",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Container
        maxWidth="lg"
        className="p-0"
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <nav>
            <Box className={mainClassBox}>
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}
              <Box
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                  marginTop: "14px",
                  marginLeft: "13px",
                }}
              >
                <FaMobileAlt style={{ color: "#000", fontSize: "19px" }} />
              </Box>
            </Box>
          </nav>
        </Toolbar>
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/logo.svg"  style={{width:"100%",maxWidth:"124px"}} alt="" />
            <nav>
              <Box className={drawerClassBox}>
                {menuItems.map((menu, index) => {
                  const depthLevel = 0;
                  return (
                    <MenuItems
                      items={menu}
                      key={index}
                      depthLevel={depthLevel}
                    />
                  );
                })}
                <Box
                  onClick={handleClick}
                  style={{
                    cursor: "pointer",
                    marginTop: "14px",
                    marginLeft: "16px",
                  }}
                >
                  <FaMobileAlt style={{ color: "#000", fontSize: "19px" }} />
                </Box>
              </Box>
            </nav>
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <IconButton
              className={drawericon}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: "#197ab3", fontSize: "30px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Box>
      <Link to="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  );

  return (
    <>
      <AppBar
        // position={history.location.pathname !== "/" ? "absolute" : "absolute"}
        elevation={0}
        style={{
          backgroundColor: "#ccc0",
          border: "none",
          position: "relative",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box className={topbarBox}>
          <Container>
            <Box className="displaySpacebetween">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2">Indolab</Typography>
                <Box mx={1}>
                  <Divider
                    orientation="vertical"
                    style={{ height: "15px", background: "#fff" }}
                  />
                </Box>
                <Typography variant="body2">Info@indolab.com</Typography>
              </Box>
              <Hidden smDown>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Box
                    style={{ cursor: "pointer" }}
                    display="flex"
                    alignItems="center"
                  >
                    <IconButton>
                      <FaHeadphonesAlt
                        style={{ color: "#fff", fontSize: "17px" }}
                      />
                    </IconButton>
                    <Typography variant="body2">Help</Typography>
                  </Box>
                  <Box>
                    <Divider
                      orientation="vertical"
                      style={{
                        height: "15px",
                        background: "#fff",
                        marginLeft: "6px",
                      }}
                    />
                  </Box>
                  <Box
                    style={{ cursor: "pointer" }}
                    display="flex"
                    alignItems="center"
                  >
                    <IconButton>
                      <FaRegHeart style={{ color: "#fff", fontSize: "17px" }} />
                    </IconButton>
                    <Typography variant="body2">WhiteList</Typography>
                  </Box>
                  <Box>
                    <Divider
                      orientation="vertical"
                      style={{
                        height: "15px",
                        background: "#fff",
                        marginLeft: "6px",
                      }}
                    />
                  </Box>
                  <Box
                    style={{ cursor: "pointer" }}
                    display="flex"
                    alignItems="center"
                  >
                    <IconButton>
                      <FaShoppingBag
                        style={{ color: "#fff", fontSize: "17px" }}
                      />
                    </IconButton>
                    <Typography variant="body2">Bag</Typography>
                  </Box>
                  <Box>
                    <Divider
                      orientation="vertical"
                      style={{
                        height: "15px",
                        background: "#fff",
                        marginLeft: "6px",
                      }}
                    />
                  </Box>
                  <Box
                    style={{ cursor: "pointer" }}
                    display="flex"
                    alignItems="center"
                  >
                    <IconButton>
                      <FaUser style={{ color: "#fff", fontSize: "17px" }} />
                    </IconButton>
                    <Typography variant="body2">Account</Typography>
                  </Box>
                </Box>
              </Hidden>
            </Box>
          </Container>
        </Box>
        <Container
          maxWidth={history.location.pathname !== "/" ? "lg" : "lg"}
          className={containerHeight}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>

      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box className={barimage}>
          <Typography
            variant="h6"
            style={{ color: "#9A9A9A", fontSize: "14px" }}
          >
            Download the Indo Lab App
          </Typography>
          <Box mt={1}>
            <Box
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://play.google.com/store/games")}
            >
              <img src="images/google.png" alt="" width="100%" />
            </Box>
            <Box mt={1}>
              <Box
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.apple.com/in/app-store/")
                }
              >
                <img src="images/apple.png" alt="" width="100%" />
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledMenu>
    </>
  );
}
