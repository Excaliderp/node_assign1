const express = require("express")
const router = express.Router();
const mockData = require("../mockData");

let movies = mockData

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


module.exports = router;