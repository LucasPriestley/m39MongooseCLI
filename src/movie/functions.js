const Movie = require("./model");

exports.createMovie = async (movieObj) => {
  try {
    console.log(movieObj);
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};
