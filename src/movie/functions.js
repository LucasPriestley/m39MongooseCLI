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

exports.findMovie = async (movieObj) => {
  try {
    // console.log(movieObj);
    const findMovie = await Movie.find(movieObj);
    console.log(findMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (filter, update) => {
  try {
    console.log("U");
    const updateMovie = await Movie.updateOne(filter, update);

    console.log(updateMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    console.log("D");
    await Movie.deleteOne(movieObj);
  } catch (error) {
    console.log(error);
  }
};
