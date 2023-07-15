import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Product = ({ name, quantity }) => {
  const [count, setCount] = useState(quantity);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card sx={{ backgroundColor: 'lightblue' }} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography color="text.secondary">
          Quantity: {count}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button variant="contained" onClick={handleIncrease} color="success" size="small">
            +
          </Button>
          <Button variant="contained" onClick={handleDecrease} color="error" size="small">
            -
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
