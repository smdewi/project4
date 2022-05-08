export default function initProjectsController(db) {
  const index = async (request, response) => {
    try {
      const projects = await db.Project.findAll();
      response.send({ projects });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      const project = await db.Project.create({
        name: request.body.name,
        description: request.body.description,
        budget: request.body.budget,
      });
      response.send({ project });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    create,
  };
}
