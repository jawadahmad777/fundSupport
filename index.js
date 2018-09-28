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

/////////////////////////////////////////////////////////////////////////////////////
app.post("/projectProfile", (req, res) => {
  console.log(req.body);
  if (
    req.body.projectname == "" ||
    req.body.region == "" ||
    req.body.focusproject == "" ||
    req.body.targetgroup == "" ||
    req.body.duration == "" ||
    req.body.budget == "" ||
    req.body.projectcost == "" ||
    req.body.cost == "" ||
    req.body.comment == "" ||
    req.body.summary == ""
  ) {
    res.json({
      success: false,
      message: "Please Fill in the whole fields"
    });
  } else {
    db.projectProfile(
      req.body.projectname,
      req.body.region,
      req.body.focusproject,
      req.body.targetgroup,
      req.body.duration,
      req.body.budget,
      req.body.projectcost,
      req.body.cost,
      req.body.comment,
      req.body.summary
    );
    req.session.loggedIn = false;
    res.json({
      success: false,
      message: "Duplicate Email found, Please use another email address"
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////////
app.post("/orginizationProfile", (req, res) => {
  console.log(req.body);
  if (
    req.body.orginization == "" ||
    req.body.address == "" ||
    req.body.country == "" ||
    req.body.legalentity == "" ||
    req.body.contactperson == "" ||
    req.body.email == "" ||
    req.body.phone == "" ||
    req.body.website == "" ||
    req.body.fields == "" ||
    req.body.foundation == "" ||
    req.body.employe == "" ||
    req.body.volunteers == "" ||
    req.body.mission == "" ||
    req.body.revenue == "" ||
    req.body.org == "" ||
    req.body.fundingname == "" ||
    req.body.time == "" ||
    req.body.pic == "" ||
    req.body.comment == ""
  ) {
    res.json({
      success: false,
      message: "Please Fill in the whole fields"
    });
  } else {
    db.orginizationProfile(
      req.body.orginization,
      req.body.address,
      req.body.country,
      req.body.legalentity,
      req.body.contactperson,
      req.body.email,
      req.body.phone,
      req.body.website,
      req.body.fields,
      req.body.foundation,
      req.body.employe,
      req.body.volunteers,
      req.body.mission,
      req.body.revenue,
      req.body.org,
      req.body.fundingname,
      req.body.time,
      req.body.pic,
      req.body.comment
    );
    req.session.loggedIn = false;
    res.json({
      success: false,
      message: "Duplicate Email found, Please use another email address"
    });
  }
});

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
    req.body.website == "" ||
    req.body.source == ""
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
              req.body.orginization,
              req.body.website,
              req.body.source
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
///////////////////////////////////////////////////////////////////////////////////
app.post("/login", (req, res) => {
  var userInfo;
  if (req.body.email == "" || req.body.password == "") {
    res.json({
      success: false,
      message: "Please Fill in the whole fields"
    });
  } else {
    db.checkEmail(req.body.email).then(results => {
      if (results.length == 0) {
        res.json({
          success: false,
          message: "E-Mail does not exist, Please try again"
        });
      } else {
        userInfo = results[0];
        const hashedPwd = userInfo.hashed_password;
        bcrypt.checkPassword(req.body.password, hashedPwd).then(checked => {
          console.log(checked, "here is the checked");
          if (checked) {
            req.session.isLoggedIn = true;
            req.session.userId = userInfo.id;
            res.json({
              success: true,
              message: "User Logged in successfully"
            });
            // res.redirect("/orginizationProfile");
          } else {
            res.json({
              success: false,
              message: "Password does not match, Please try again"
            });
          }
        });
      }
    });
  }
});

///////////////////////////////////////////////////////////////////////////
function checkLogin(req, res, next) {
  !req.session.isLoggedIn ? res.redirect("/welcome") : next();
}

app.get("/welcome", (req, res) => {
  req.session.isLoggedIn
    ? res.redirect("/")
    : res.sendFile(`${__dirname}/index.html`);
});

app.get("*", checkLogin, (req, res) => res.sendFile(`${__dirname}/index.html`));
///////////////////////////////////////////////////////////////////////////////////////
// app.get("*", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(process.env.PORT || 8080, function() {
  console.log("I'm listening.");
});
////////////////////////////////////////////////////////////////////////////////
