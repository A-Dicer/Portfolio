const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the levels collection and inserts the levels below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", {useMongoClient: true});

const projectsSeed = [
  { 
    "title": "Kalimba RILs",
    "disc": "A companion streaming race leaderboard for the video game Kalimba.  It tracks your position in the race and allows you to chat with the other players. ",
    "lang": "React.js, Node.js, Socket-io, Moment.js, MongoDB",
    "links": ["https://github.com/A-Dicer/KalimbaILs", "https://kalimbril.herokuapp.com"]
  },
  { 
    "title": "Punch-Out!! Splitter",
    "disc": "A speedrun Timer for every Punch-Out!! game.  Allows user to track their overall time, individual level times, and saves their best to the Database. It provides an overlay to be streamed live.  Requires a Twitch.com account to login.",
    "lang": "React.js, Node.js, Socket-io, MongoDB",
    "links": ["https://github.com/A-Dicer/PunchOut", "https://punch-out.herokuapp.com"]
  },
  { 
    "title": "Summer Sum Challenge",
    "disc": "A companion website created for SiftPop.com's Summer Sum Challenge game. The site scrapes domestic box office data and tracks users' scores, displaying them on the sites leaderboard.",
    "lang": "Bootstrap, Node.js, Express.js, Request, Cheerio, jQuery, AJAX",
    "links": ["https://github.com/A-Dicer/SummerSumChallenge", "https://siftpop.com/summersum"]
  },
  { 
    "title": "</ CodeKeeper />",
    "disc": "Web Application for storing and searching code snippets.  Create snippets of code or save other users snippets to find quickly and use again.  Search for snippets you saved or globally by keyword, coding language, or user name.",
    "lang": "JQuery, Bootstrap, Node.js, MySQL",
    "links": ["https://github.com/A-Dicer/codeKeeper", "https://codeKeeper.herokuapp.com"]
  },
  { 
    "title": "TAS Node",
    "disc": "A program to be run with Node.js on the command line.  It is a tool for creating Tool Assisted Speedruns(TAS).  Features include locating specific lines of code to edit, auto save, update, and undo.",
    "lang": "Node.js, NPM Packages: Inquirer",
    "links": ["https://github.com/A-Dicer/TASNode"]
  },
  { 
    "title": "Super Fantastic Trivia",
    "disc": "A simple 50’s styled trivia game. Can be played alone or with a second player. Keeps track of points based on correct answer and how quickly the correct answer was guessed.",
    "lang": "JavaScript, HTML5, CSS3",
    "links": ["https://github.com/A-Dicer/TriviaGame", "https://a-dicer.github.io/TriviaGame"]
  }
];

db.Projects
  .remove({})
  .then(() => db.Projects.collection.insertMany(projectsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
