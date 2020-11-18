// const Pool = require('pg').Pool;
const { Pool } = require("pg");
// const pool = new Pool({
//   user: 'george',
//   host: 'localhost',
//   database: 'jobjab',
//   password: 'kruchin',
//   port: 5432,

//   connectionString:
// })

const PG_URI =
  "postgres://rbupcsle:n4-9r8bhAnROYawuMjrFG4k5QQD_guEy@ruby.db.elephantsql.com:5432/rbupcsle";

const pool = new Pool({
  connectionString: PG_URI,
});

// In a production environment, you would want to put your configuration details in a separate file with
// restrictive permissions that is not accessible from version control, but for the simplicity of this tutorial ,
// we’re keeping it in the same file as the queries.

const getUsers = (req, res) => {
  pool.query(
    //    'SELECT * FROM job_application_page ORDER BY id ASC',
    `SELECT job_application_page.id AS id,
			 users.id AS user_id,
       application_name,
       sources.id AS source_id,
       sources.sourcename,
       status.id AS status_id,
       status.status,
       application_folder_link,
       resume_doc_link,
       resume_pdf_link,
       cover_letter_doc_link,
       cover_letter_pdf_link,
       notes,
       date_submitted,
       offer_salary,
       creation_date
FROM job_application_page
JOIN users ON job_application_page.userid = users.id
JOIN sources ON job_application_page.sourceid = sources.id
JOIN status ON job_application_page.job_app_status_id = status.id`,
    (err, results) => {
      if (err) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (err, results) => {
    if (err) {
      throw error;
    }
    console.log(results);
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (err, results) => {
      if (err) {
        throw error;
      }
      res
        .status(201)
        .send(`User succesfully added with name: ${name} & email: ${email}`); // 201 refers to succesful creation of a resource
    }
  );
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  pool.query(
    "UPDATE users set NAME = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (err, results) => {
      if (err) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (err, results) => {
    if (err) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
