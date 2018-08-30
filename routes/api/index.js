const router = require("express").Router();
const projectsRoutes = require("./projects");

router.use("/projects", projectsRoutes); // projects routes

module.exports = router;
