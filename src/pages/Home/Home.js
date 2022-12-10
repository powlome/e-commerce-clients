import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Categories from "./Categories";
import Products from './HomeProducts/Products';
import ShowProducts from "./ShowProducts";
import Slider from "./Slider";


const Home = () => {
  return (
    <Box>
      <Header />
      <Slider />
      <Categories/>
      <Products/>
      <ShowProducts/>
    </Box>
  );
};

export default Home;
