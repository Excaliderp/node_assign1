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
  const index = parseInt(req.params.id) - 1;
  const movie = movies[index];

  // const index = movies.findIndex((film) => film.id === id);

  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
