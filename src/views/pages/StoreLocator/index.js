import { Box, Container, makeStyles, Grid, Typography, Card, CardContent, CardMedia, Button } from "@material-ui/core";
import React,{useEffect} from "react";
import {  useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  storeLocatorBox: {
    padding: "50px 0px",
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardMedia: {
    height: 300,
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
}));

const store = {
  name: 'New Delhi',
  address: 'S-557, Office No-209, Heera Complex, School Block, Shakarpur, Laxmi Nagar, New Delhi, 110092',
  image: 'images/heera.jpg',
  mapLink: 'https://www.google.com/maps/place/Laxmi+Nagar,+Block+S1,+Nanakpura,+Shakarpur,+Delhi,+110092/@28.6275492,77.2759142,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce35319b6a7ff:0x127dca80423ad527!8m2!3d28.6275609!4d77.2784081!16s%2Fm%2F0bs568t?entry=ttu',
};

export default function StoreLocator() {
  const classes = useStyles();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Box className={classes.storeLocatorBox}>
      <Container>
        <Typography className={classes.sectionTitle}>
          Find Our Store
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={store.image}
                title={store.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                  {store.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {store.address}
                </Typography>
              </CardContent>
              <Button
                className={classes.button}
                fullWidth
                component="a"
                href={store.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
