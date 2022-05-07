import { resolve } from 'path';
import db from './models/index.mjs';

import initProductsController from './controllers/products.mjs';

export default function routes(app) {
  const ProductsController = initProductsController(db);
  app.get('/products', ProductsController.index);

  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
