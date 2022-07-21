require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie } = require("./movie/functions");

const app = async (yargsObj) => {
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //add movie to DB
  } else if (yargsObj.read) {
    //list all movies from DB
  } else if (yargsObj.update) {
    //update one movie from DB
  } else if (yargsObj.delete) {
    //delete one movie from DB
  } else {
    console.log("Incorrect command");
  }
  await mongoose.disconnect();
};

app(yargs.argv);
