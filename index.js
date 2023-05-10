const express = require("express")
const movies = require("./routes/movies.js")

const app = express();
const port = 3006;
// let movies = mockData;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola amigo!");
});

app.use("/movies", movies)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
