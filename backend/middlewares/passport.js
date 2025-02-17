const passport = require("passport");
const { execute } = require("../dbConnections/executeQuery");
require("dotenv").config();

let JwtStrategy = require("passport-jwt").Strategy;

const getToken = (req) => {
  return req.cookies.token;
};

let opts = {};

opts.jwtFromRequest = getToken;
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      let query2 = `SELECT * FROM users WHERE u_id=?;`;
      let user = await execute(query2, [jwt_payload.id]);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error);
    }
  })
);
