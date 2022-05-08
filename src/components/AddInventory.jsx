import React, { useState } from 'react';
import axios from 'axios';

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
        <h2>Add Inventory</h2>
        <label>
          Product Name
          <input
            name="productName"
            value={formValues.productName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Description
          <input
            name="productDescription"
            value={formValues.productDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Price
          <input
            name="productPrice"
            value={formValues.productPrice}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Amount
          <input
            name="productAmount"
            value={formValues.productAmount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Minimum Stock
          <input
            name="productMin"
            value={formValues.productMin}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
