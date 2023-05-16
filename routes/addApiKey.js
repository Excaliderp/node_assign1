const express = require("express");
const router = express.Router();
const validApiKeys = require("../validApiKeys")

validApiKey = validApiKeys


router.get("/", (req, res) => {
  res.json(validApiKey)

});

router.post("/", (req, res) => {
  const newApiKey = String(Math.floor(Math.random() * 100000));

  validApiKey = [...validApiKey, newApiKey]
  res.json(newApiKey)
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const key = validApiKey.find((key) => key === id)

  if(!key) {
    return res.status(403).json({ message: "That API key does not exist."})
  }

  const newData = validApiKey.filter((key) => key !== id)
  validApiKey = newData

  res.json({ message: "API key deleted successfully." });
});

module.exports = router;
