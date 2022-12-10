import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Product = ({product}) => {
  const useStyles = makeStyles({
    featuresItem:{
      background :` linear-gradient(95deg ,rgb(110, 100, 16) ,rgba(0,0,0, 0.8)),url(${product.img}) no-repeat center center`,
      backgroundSize: 'cover',
      height: '300px',
      width: '100%',
      padding : "50px 20px",
      borderRadius: '5px',
      position: 'relative',
      // overflowX: 'hidden',
      "& $h4":{
        color: '#fff',
        fontSize: '50px',
        marginBottom: '10px',
        textAlign: 'center',
        "@media (max-width: 1024px)": {
          fontSize: '40px',
        },
      },
      "& $h6":{
        color: '#fff',
        fontSize: '20px',
        marginBottom: '10px',
        textAlign: 'center',
        width: '90%',
      },
    }
  })
  const {featuresItem} = useStyles();
  return (
    <Box className={featuresItem}>
       <Typography variant="h4">{product.title}</Typography>
       <Typography variant="h6">{product.desc}</Typography>
    </Box>
  );
};

export default Product;