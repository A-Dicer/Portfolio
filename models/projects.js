const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    title: { type: String },
    disc: { type: String},
    lang: { type: String },
    links: {type: Array}
});

const Projects = mongoose.model("Projects", projectsSchema);
module.exports = Projects;