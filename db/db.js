const spicedPg = require("spiced-pg");
let db; //connecting to heroku or localhost
if (process.env.DATABASE_URL) {
  db = spicedPg(process.env.DATABASE_URL);
} else {
  db = spicedPg("postgres:postgres:postgres@localhost:5432/fundsupport");
}
//////////////////////////////////////////////////////////////////////
exports.createUser = function(
  firstName,
  lastName,
  email,
  password,
  project,
  orginization,
  website
) {
  const query =
    "INSERT INTO users (first_name, last_name,email, hashed_password, project, orginization, website) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";

  const params = [
    firstName,
    lastName,
    email,
    password,
    project,
    orginization,
    website
  ];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
///////////////////////////////////////////////////////
exports.source = function(source) {
  const query = "select source from source where source = $1;";

  const params = [source];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
/////////////////////////////////////////////////////////
exports.checkEmail = function(email) {
  const q = "SELECT * FROM users WHERE email = $1;";
  const params = [email];
  return db.query(q, params).then(results => {
    return results.rows;
  });
};
