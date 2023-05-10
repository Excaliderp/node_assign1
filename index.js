import express from "express";
import { mockData } from "./mockData.js";

const app = express();
const port = 3006;
let movies = mockData;
const id = mockData.indexOf;

app.get("/", (req, res) => {
  res.send("Hola amigo!");
});

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;

  const movie = movies.find((film) => film.imdbID === id);
  console.log(movie)
  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
