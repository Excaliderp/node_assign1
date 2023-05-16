const express = require("express")
const movies = require("./routes/movies.js")
const authenticateApiKey = require("./components/apiKeys.js")
const addApiKey = require("./routes/addApiKey.js")

const app = express();
const port = 3006;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola amigo!");
});

app.use("/addApiKey", addApiKey)

app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
})

app.use("/movies", movies)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
