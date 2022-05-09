import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function AddInventory({ setProducts }) {
  const initialValues = {
    productName: '',
    productDescription: '',
    productPrice: '',
    productAmount: '',
    productMin: '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newProduct = {
      name: formValues.productName,
      description: formValues.productDescription,
      price: formValues.productPrice,
      amount: formValues.productAmount,
      min: formValues.productMin,
    };
    axios.post('/products', newProduct).then((result) => {
      console.log(result);
      setProducts((products) => [...products, result.data.product]);
    });
  };

  return (
    <div className="col-sm">
      <div className="admin">
        <h2>
          <AddCircleRoundedIcon />
          Add Inventory
        </h2>
        <label>
          <input
            name="productName"
            placeholder="Product Name"
            value={formValues.productName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            name="productDescription"
            placeholder="Description"
            value={formValues.productDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            name="productPrice"
            placeholder="Price"
            value={formValues.productPrice}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            name="productAmount"
            placeholder="Amount"
            value={formValues.productAmount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            name="productMin"
            placeholder="Min Stock"
            value={formValues.productMin}
            onChange={handleInputChange}
          />
        </label>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
