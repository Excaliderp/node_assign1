import express from "express";
import {mockData} from "./mockData.js";

const app = express()
const port = 3006
let movies = mockData

app.get('/', (req, res) => {
  res.send('Hola amigo!')
});

app.get("/movies", (req, res) => {
    res.json(movies)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});