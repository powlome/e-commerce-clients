import { Box } from '@mui/material';
import React from 'react';
import { pricing } from '../../fakeData/fakeData';
import { useStyles } from '../../styles/Styles';
import Price from './Price';
const Pricing = () => {
  const {rightSlideMainBox} = useStyles();
  return (
    <Box className={rightSlideMainBox}>
       {
         pricing.map(price => <Price key={price.id} price={price} />)
       }     
    </Box>
  );
};

export default Pricing;