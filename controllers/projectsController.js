const db = require("../models");

module.exports = {
//---------------------------- Find All Projects -------------------------------
  findAll: function (req, res) {
      db.Projects.find(req.query)
        .then(dbModel => res.json({results: dbModel}))
        .catch(err => res.status(422).json(err));
  }
};


