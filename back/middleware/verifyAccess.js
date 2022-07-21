const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET || "secretsecret";

function verifyToken(req, res, next) {
   // console.log(req.headers)
  let token = req.headers.auth_key;
  console.log(`Verify Access Token: ${token}`)

  if (!token) {
    res.statusMessage = "You need to send the authToken(JWT).";
    return res.status(401).end();
  }

  if (token) {
    jwt.verify(token, process.env.SECRET, function (err, datos) {
      if (err) {
       
        res.json({ err: err.toString() });
      } else {
        req.userId = datos.id;

        next();
      }
    });
  }
}

module.exports = verifyToken;
