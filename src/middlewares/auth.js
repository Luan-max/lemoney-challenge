const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No Token provider" });
  }

  const [schema, token] = authHeader.split(" ");

  if (schema !== "Bearer") {
    return res.status(401).json({ error: "No Token provider" });
  }

  jwt.verify(token, authConfig.secret, (err, decode) => {
    if (err) return res.status(401).json({ error: "Token invalid" });

    req.advertiser_id = decode.id;

    return next();
  });
};
