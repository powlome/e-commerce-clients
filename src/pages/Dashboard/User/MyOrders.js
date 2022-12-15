import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyOrder from "./MyOrder";


const AllCart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(()=>{
    fetch("https://safrian.onrender.com/orderCollections")
    .then(res=>res.json())
    .then(data=>setCarts(data))
  },[])
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {carts.map((cartItem) => (
            <MyOrder cartItem={cartItem} carts={carts} setCarts={setCarts} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllCart;
