import React, { useState } from 'react';
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import InventoryTable from './components/InventoryTable.jsx';
import AddInventory from './components/AddInventory.jsx';
import AddProject from './components/AddProject.jsx';

export default function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get('/products').then((result) => {
      console.log('getting product list');
      setProducts(result.data.products);
      console.log(setProducts);
    });
  };

  return (
    <div className="app-container">
      This is App.jsx
      <AddInventory />
      <Paper elevation={3}>
        <Button variant="contained" onClick={getProducts}>
          Inventory
        </Button>
        <InventoryTable products={products} />
      </Paper>
      <AddProject />
    </div>
  );
}
