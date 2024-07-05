import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Avatar,
  Paper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionBox: {
    padding: theme.spacing(4, 0),
    background: "#FFFFFF",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(4),
    "& h2": {
      color: "#3C3B3D",
      marginBottom: theme.spacing(2),
      textAlign: "center",
    },
  },
  mainImage: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  blogContent: {
    marginBottom: theme.spacing(4),
    padding: "10px",
    "& h4": {
      color: "#1C1C1C",
      fontWeight: 600,
      marginBottom: theme.spacing(2),
    },
    "& p": {
      color: "#555",
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  latestBlogs: {
    padding: theme.spacing(2),
    background: "#F7F7F7",
    border: "1px solid #E2E2E2",
    borderRadius: theme.spacing(2),
    "& .blogItem": {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      background: "#FFFFFF",
      border: "1px solid #E2E2E2",
      borderRadius: theme.spacing(1),
    },
    "& .blogItem .avatar": {
      width: theme.spacing(10),
      height: theme.spacing(10),
      marginRight: theme.spacing(2),
    },
    "& .blogItem .title": {
      fontWeight: "600",
      marginBottom: theme.spacing(1),
      color: "#1C1C1C",
    },
    "& .blogItem .date": {
      color: "#888",
      fontSize: "0.9rem",
    },
  },
  relatedProducts: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    background: "#F7F7F7",
    border: "1px solid #E2E2E2",
    borderRadius: theme.spacing(2),
    "& .productItem": {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      background: "#FFFFFF",
      border: "1px solid #E2E2E2",
      borderRadius: theme.spacing(1),
    },
    "& .productItem .productImage": {
      width: theme.spacing(12),
      height: theme.spacing(12),
      marginRight: theme.spacing(2),
    },
    "& .productItem .productName": {
      fontWeight: "600",
      color: "#1C1C1C",
      marginBottom: theme.spacing(1),
    },
    "& .productItem .productDescription": {
      color: "#555",
      fontSize: "0.9rem",
    },
  },
  actionButton: {
    marginTop: theme.spacing(2),
  },
}));

const latestBlogsData = [
  {
    title: "Spring Fashion Trends 2024",
    image: "images/blog1.jpg",
    date: "27-01-2023",
  },
  {
    title: "Choosing the Right Accessories",
    image: "images/blog2.jpg",
    date: "27-01-2023",
  },
  {
    title: "How to Care for Woolen Garments",
    image: "images/blog3.jpg",
    date: "27-01-2023",
  },
];

const relatedProductsData = [
  {
    image: "images/blog4.jpg",
    name: "Vibrant Floral Dress",
    description: "Perfect for spring, available in various sizes and colors.",
  },
  {
    image: "images/blog5.jpg",
    name: "Minimalist White Sneakers",
    description: "Comfortable and stylish, a must-have for any wardrobe.",
  },
];

export default function BlogView() {
  const classes = useStyles();

  return (
    <Box className={classes.sectionBox}>
      <Container maxWidth="lg">
        <Typography variant="h2">Spring Fashion Trends 2024</Typography>
        <img
          src="images/blog2.jpg"
          alt="Blog Main Image"
          className={classes.mainImage}
        />
        <Paper elevation={3} className={classes.blogContent}>
          <Typography variant="h4">Spring Fashion Trends 2024</Typography>
          <Typography variant="body1">
            Explore the latest trends in spring fashion for 2024. From vibrant
            colors to minimalist designs, discover what's hot this season and
            how to incorporate these trends into your wardrobe.
          </Typography>
        </Paper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.latestBlogs}>
              <Typography variant="h5">Latest Blogs</Typography>
              <Box mt={2}>
                {latestBlogsData.map((blog, index) => (
                  <Box key={index} className="blogItem">
                    <Avatar className="avatar" src={blog.image} />
                    <Box>
                      <Typography variant="subtitle1" className="title">
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" className="date">
                        {blog.date}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.relatedProducts}>
              <Typography variant="h5">Related Products</Typography>
              <Box mt={2}>
                {relatedProductsData.map((product, index) => (
                  <Box key={index} className="productItem">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="productImage"
                    />
                    <Box>
                      <Typography variant="subtitle1" className="productName">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="productDescription"
                      >
                        {product.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box className={classes.actionButton}>
                <Button variant="contained" color="primary" fullWidth>
                  Explore More Products
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
