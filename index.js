const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const bcrypt = require("./db/bcrypt");
const cookieSession = require("cookie-session");
const db = require("./db/db.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(express.static(__dirname + "/public"));
if (process.env.NODE_ENV != "production") {
  app.use(
    "/bundle.js",
    require("http-proxy-middleware")({
      target: "http://localhost:8081/"
    })
  );
} else {
  app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
app.use(
  cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 14
  })
);
///////////////////////////////////////////////////////////////////////////////////////
app.post("/registration", (req, res) => {
  console.log(req.body);
  if (
    req.body.firstName == "" ||
    req.body.lastName == "" ||
    req.body.email == "" ||
    req.body.password == "" ||
    req.body.project == "" ||
    req.body.orginization == "" ||
    req.body.website == ""
  ) {
    res.json({
      success: false,
      message: "Please Fill in the whole fields"
    });
  } else {
    db.checkEmail(req.body.email).then(results => {
      if (results.length == 0) {
        bcrypt
          .hashPassword(req.body.password)
          .then(hashedPassword => {
            db.createUser(
              req.body.firstName,
              req.body.lastName,
              req.body.email,
              hashedPassword,
              req.body.project,
              req.body.organization,
              req.body.website
            ).then(results => {
              req.session.isLoggedIn = true;
              console.log(results);
              req.session.userId = results.id;
              res.json({
                success: true,
                message: "User created successfully"
              });
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        req.session.loggedIn = false;
        res.json({
          success: false,
          message: "Duplicate Email found, Please use another email address"
        });
      }
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////////
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
  console.log("I'm listening.");
});
////////////////////////////////////////////////////////////////////////////////
