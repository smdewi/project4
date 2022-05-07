import React, { useState } from 'react';
import axios from 'axios';

import Paper from '@mui/material/Paper';

import InventoryTable from './components/InventoryTable.jsx';

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
      <Paper elevation={3}>
        {products.length === 0 && (
          <button type="button" onClick={getProducts}>
            Inventory
          </button>
        )}
        <InventoryTable products={products} />
      </Paper>
    </div>
  );
}
