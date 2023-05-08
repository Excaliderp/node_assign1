import express from "express";

const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hola amigo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})