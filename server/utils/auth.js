const jwt = require("jsonwebtoken");
require("dotenv").config();

//TODO: We will want to hide this with dotenv I am pretty sure

// PUT  JWT_PW="mysecretsshhhhh"    In .env file

const secret = process.env.JWT_PW;

const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      req.player = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ userName, email, _id }) {
    const payload = { userName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
