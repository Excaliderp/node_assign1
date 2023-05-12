const express = require("express")
const movies = require("./routes/movies.js")

const app = express();
const port = 3006;
// let movies = mockData;

app.use(express.json());

const validApiKey = "1337";

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey

  if(!apiKey || apiKey === "") {
    return res.status(401).json({ message: "API key is missing."})
  }

  if(apiKey !== validApiKey) {
    return res.status(403).json({ message: "Invalid API Key"})
  }

  next();
}

app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
})

app.get("/", (req, res) => {
  res.send("Hola amigo!");
});

app.use("/movies", movies)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
