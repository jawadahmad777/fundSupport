const spicedPg = require("spiced-pg");
let db; //connecting to heroku or localhost
if (process.env.DATABASE_URL) {
  db = spicedPg(process.env.DATABASE_URL);
} else {
  db = spicedPg("postgres:postgres:postgres@localhost:5432/fundsupport");
}
//////////////////////////////////////////////////////////////////////////
exports.orginizationProfile1 = function(email, phone, website, Fields) {
  const query =
    "INSERT INTO orginization ( orginization_email, phone, website, fields_activites) VALUES ($1, $2, $3, $4, $5) RETURNING *";

  const params = [email, phone, website, Fields];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
//////////////////////////////////////////////////////////////////////
exports.orginizationProfile = function(
  OrginizationName,
  address,
  country,
  legalEntity,
  contactPerson
) {
  const query =
    "INSERT INTO orginization (  orginization_name, address, country, legal_entity, contact_person) VALUES ($1, $2, $3, $4, $5) RETURNING *";

  const params = [
    OrginizationName,
    address,
    country,
    legalEntity,
    contactPerson
  ];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
//////////////////////////////////////////////////////////////////////

exports.createUser = function(
  firstName,
  lastName,
  email,
  password,
  project,
  orginization,
  website,
  source
) {
  const query =
    "INSERT INTO users (first_name, last_name,email, hashed_password, project, orginization, website,  source) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";

  const params = [
    firstName,
    lastName,
    email,
    password,
    project,
    orginization,
    website,
    source
  ];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
///////////////////////////////////////////////////////
// exports.sourceIt = function(source, source_id) {
//   const query = `INSERT into source (source, source_id ) VALUES ($1, $2);`;
//   const params = [source, source_id];
//   return db.query(query, params).then(results => {
//     return results.rows[0];
//   });
// };
/////////////////////////////////////////////////////////
exports.checkEmail = function(email) {
  const q = "SELECT * FROM users WHERE email = $1;";
  const params = [email];
  return db.query(q, params).then(results => {
    return results.rows;
  });
};
//
