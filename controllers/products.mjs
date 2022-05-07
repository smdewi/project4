export default function initProductsController(db) {
  const index = async (request, response) => {
    try {
      const products = await db.Product.findAll();
      response.send({ products });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
