require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, findMovie, updateMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //add movie to DB
  } else if (yargsObj.read) {
    await findMovie({ title: yargsObj.title });
    //list all movies from DB
  } else if (yargsObj.update) {
    const filterObj = { title: yargsObj.title };
    const updateObj = { title: yargsObj.newTitle };
    await updateMovie(filterObj, updateObj);
    //update one movie from DB
  } else if (yargsObj.delete) {
    await deleteMovie( {title: yargsObj.title} );
    //delete one movie from DB
  } else {
    console.log("Incorrect command");
  }
  await mongoose.disconnect();
};

app(yargs.argv);
