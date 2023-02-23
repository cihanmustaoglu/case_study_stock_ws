module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", tutorials.create);

  // Retrieve all Product
  router.get("/", tutorials.findAll);

  // Retrieve all published Product
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Product with id
  router.get("/:id", tutorials.findOne);

  // Update a Product with id
  router.put("/:id", tutorials.update);

  // Delete a Product with id
  router.delete("/:id", tutorials.delete);

  // Delete all Product
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
