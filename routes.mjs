import { resolve } from 'path';
import db from './models/index.mjs';

import initProductsController from './controllers/products.mjs';
import initProjectsController from './controllers/projects.mjs';

export default function routes(app) {
  const ProjectsController = initProjectsController(db);
  app.get('/projects', ProjectsController.index);
  app.post('/projects', ProjectsController.create);

  const ProductsController = initProductsController(db);
  app.get('/products', ProductsController.index);
  app.post('/products', ProductsController.create);

  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
