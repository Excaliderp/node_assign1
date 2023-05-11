const express = require("express");
const router = express.Router();
const mockData = require("../mockData");

let movies = mockData;

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const movie = movies.find((film) => film.imdbID === id);
  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});


router.post("/", (req, res) => {
  const nextId = String(Math.floor(Math.random() * 10000))
  const movie = req.body.movie;
  console.log(typeof(nextId))

  const newMovie = {
    ...movie,
    imdbID: nextId
  }

  movies = [newMovie, ...movies]
  console.log(newMovie)
  res.json(newMovie)
});

module.exports = router;
