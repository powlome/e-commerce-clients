import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { categories } from "../../fakeData/fakeData";
import { useStyles } from "../../styles/Styles";
import Category from "./Category";
const Categories = () => {
  const {categorySection} = useStyles();
  return (
    <Box >
      <Container className={categorySection}>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
