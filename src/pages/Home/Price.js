import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const Price = ({price}) => {
  const useStyles = makeStyles({
    rightSlideBox:{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      background : `url(${price.img}) no-repeat center center`,
      backgroundSize: "cover",
      overflow: "hidden",
      margin: "10px 0",
      minHeight: "150px",
      width: "200px",
    }
  })
  const {rightSlideBox} = useStyles();
  return (
    <Box className={rightSlideBox}>
      <Typography variant="h5" fontWeight="600" color="#fff">{price.title}</Typography>
      <Typography variant="h6" fontWeight="600" color="#fff">{price.price}</Typography>
    </Box>
  );
};

export default Price;