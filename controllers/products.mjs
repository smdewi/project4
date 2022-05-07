export default function initProductsController(db) {
  const index = async (request, response) => {
    try {
      const products = await db.Product.findAll();
      response.send({ products });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      const product = await db.Product.create({
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        amount: request.body.amount,
        min: request.body.min,
      });
      response.send({ product });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    create,
  };
}
