import React, { useState } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import Product from './Product';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', quantity: 1 },
    { id: 2, name: 'Product 2', quantity: 2 },
    { id: 3, name: 'Product 3', quantity: 3 },
  ]);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      quantity: 0,
    };

    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <Box sx={{ backgroundColor: 'orange', minHeight: '100vh', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Product
              name={product.name}
              quantity={product.quantity}
            />
            <Button variant="contained" onClick={() => handleRemoveProduct(product.id)} color="secondary">
              Remove
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={handleAddProduct} color="primary" sx={{ mt: 4 }}>
        Add Product
      </Button>
    </Box>
  );
};

export default App;
