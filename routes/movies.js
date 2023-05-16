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
  const { Title, Year, Genre, Released } = req.body.movie;

  if (!Title || !Year || !Genre || !Released) {
    return res.status(400).json({ message: "Title, Year, Released and Genre are required fields and can not be empty." });
  }

  if (!/^\d+$/.test(Year)) {
    return res.status(400).json({ message: "Year can only contain numbers." });
  }

  const nextId = String(Math.floor(Math.random() * 10000));
  const movie = req.body.movie;

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
  const movie = movies.find((film) => film.imdbID === id)

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const newData = movies.filter((film) => film.imdbID !== id)
  movies = newData
  res.json({message: "The movie '" + movie.Title + "' was removed"})
})

module.exports = router;
