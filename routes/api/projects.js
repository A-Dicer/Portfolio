const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// --------------------- Matches with "/api/projects" --------------------------
router.route("/").get(projectsController.findAll) //gets all projects
module.exports = router;
