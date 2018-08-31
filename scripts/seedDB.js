const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the levels collection and inserts the levels below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", {useMongoClient: true});

const projectsSeed = [
  { 
    "title": "Punch-Out!! Splitter",
    "disc": "This is a speedrun Timer for every Punch-Out!! game.  The user to track their overall time, individual level times, and saves their best to the Database. It provides an overylay to be streamed live.  Requires a Twitch.com account to login.",
    "lang": "React.js, Node.js, Socket-io, MongoDB",
    "links": ["https://github.com/A-Dicer/PunchOut", "https://punch-out.herokuapp.com"]
  },
  { 
    "title": "Summer Sum Challenge",
    "disc": "This is a companion website created for SiftPop.com's Summer Sum Challenge game. The site scrapes domestic box office data and tracks users scores, displaying them on the sites leaderboard.",
    "lang": "Bootstrap, Node.js, Express.js, Request, Cheerio, jQuery, AJAX",
    "links": ["https://github.com/A-Dicer/SummerSumChallenge", "https://siftpop.com/summersum"]
  },
  { 
    "title": "</ CodeKeeper />",
    "disc": "Web Application for storing and searching code snippets.  Create snippets of code or save other useres snippets to find quickly and use again.  Search for snippets you saved or globaly by keyword, coding languge, or user name.",
    "lang": "JQuery, Bootstrap, Node.js, MySQL",
    "links": ["https://github.com/A-Dicer/codeKeeper", "https://codeKeeper.herokuapp.com"]
  },
  { 
    "title": "TAS Node",
    "disc": "A program to be run in Node.js on the comamand line.  It is a tool for creating Tool Assisted Speedruns.  Features include locating specific lines of code to edit, auto saving and updating, and undo.",
    "lang": "Node.js, NPM Packages: Inquirer",
    "links": ["https://github.com/A-Dicer/TASNode"]
  },
  { 
    "title": "Super Fantastic Trivia",
    "disc": "A simple 50’s styled trivia game. Can play alone or with a second player. Keeps track of points based on correct guesses and how quickly you guessed ",
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
