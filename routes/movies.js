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
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});

router.post("/", (req, res) => {
  const nextId = String(Math.floor(Math.random() * 10000));
  const movie = req.body.movie;
  console.log(typeof nextId);

  const newMovie = {
    ...movie,
    imdbID: nextId,
  };

  movies = [newMovie, ...movies];
  res.json(newMovie);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const movie = req.body.movie;
  const index = movies.findIndex((film) => film.imdbID === id);

  if (index === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const updatedMovie = { ...movies[index], ...movie };
  movies[index] = updatedMovie;
  res.json(updatedMovie);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const movie = movie.find((film) => film.imdbID === id)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  
})

module.exports = router;
