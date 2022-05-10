import React, { useState } from 'react';
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import NavBar from './components/NavBar.jsx';
import InventoryTable from './components/InventoryTable.jsx';
import AddInventory from './components/AddInventory.jsx';
import AddProject from './components/AddProject.jsx';
import BasicTabs from './components/Tabs.jsx';

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
      <NavBar />
      <BasicTabs />
      <AddInventory setProducts={setProducts} />
      <Paper elevation={3}>
        <Button variant="contained" onClick={getProducts}>
          Inventory
        </Button>
        <Button variant="contained">
          Re-order
        </Button>
        <InventoryTable products={products} />
      </Paper>
      <AddProject />
    </div>
  );
}
