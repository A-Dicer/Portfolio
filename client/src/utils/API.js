import axios from "axios";

export default {
//-------------------------------------- Projects Api --------------------------------------
  getProjects: function() {return axios.get("/api/projects")}, // Gets all projects
}