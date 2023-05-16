const validApiKeys = require("../validApiKeys")

validApiKey = validApiKeys

// let validApiKey = ["1337", "5", "8"];


const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey

  if(!apiKey || apiKey === "") {
    return res.status(401).json({ message: "API key is missing."})
  }

  if(!validApiKey.includes(apiKey)) {
    return res.status(403).json({ message: "Invalid API Key"})
  }

  next();
}

module.exports = authenticateApiKey