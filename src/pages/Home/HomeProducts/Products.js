import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { products } from "../../../fakeData/fakeData";
import { useStyles } from "../../../styles/Styles";
import Product from "./Product";

const Products = () => {
  const { featureProducts } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Container className={featureProducts} sx={{overflowX: 'hidden', py : '30px'}}>
        <Typography variant="h4">Our Features</Typography>
        <Slider {...settings}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Products;
