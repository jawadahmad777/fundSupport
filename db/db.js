const spicedPg = require("spiced-pg");
let db; //connecting to heroku or localhost
if (process.env.DATABASE_URL) {
  db = spicedPg(process.env.DATABASE_URL);
} else {
  db = spicedPg("postgres:postgres:postgres@localhost:5432/fundsupport");
}

//////////////////////////////////////////////////////////////////////
exports.projectProfile = function(
  projectname,
  region,
  focusproject,
  targetgroup,
  duration,
  budget,
  projectcost,
  cost,
  comment
) {
  const query = `INSERT INTO project(
      project_name, region, focus_project, target_group, duration, budget, project_cost,
      overhead_cost, comment
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * `;

  const params = [
    projectname,
    region,
    focusproject,
    targetgroup,
    duration,
    budget,
    projectcost,
    cost,
    comment
  ];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
//////////////////////////////////////////////////////////////////////
exports.orginizationProfile = function(
  orginization,
  address,
  country,
  legalEntity,
  contactPerson,
  email,
  phone,
  website,
  Fields,
  foundation,
  employe,
  volunteers,
  mission,
  revenue,
  org,
  fundingname,
  time,
  pic,
  comment
) {
  const query = `INSERT INTO orginization(
      orginization_name, address, country, legal_entity, contact_person,
      orginization_email, phone, website, fields_activites, year_foundation, number_employees, number_valunteers,
      mission_orginization, yearly_revenue, Current_funding_org, Current_funding_name, funding_start_end, eu_pic_number, comment
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 , $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING * `;

  const params = [
    orginization,
    address,
    country,
    legalEntity,
    contactPerson,
    email,
    phone,
    website,
    Fields,
    foundation,
    employe,
    volunteers,
    mission,
    revenue,
    org,
    fundingname,
    time,
    pic,
    comment
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
  const query = `INSERT INTO users
    (first_name, last_name,email, hashed_password, project, orginization, website,  source)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

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

/////////////////////////////////////////////////////////
exports.checkEmail = function(email) {
  const q = "SELECT * FROM users WHERE email = $1;";
  const params = [email];
  return db.query(q, params).then(results => {
    return results.rows;
  });
};
