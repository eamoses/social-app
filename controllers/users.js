const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

// Select all fields from the users table.
// limit the results to 50.
// Use res.json to return the results to the user.
const getUsers = (req, res) => {
    pool.query("SELECT * FROM users", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
}

const getUserById = (req, res) => {
  let sql = `SELECT ??, ??, ??, ?? FROM ?? WHERE ?? = ${req.params.id}`
  sql = mysql.format(sql, ['id', 'username', 'email', 'blurb', 'users', 'id'])
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createUser = (req, res) => {
  pool.query('INSERT INTO users SET ?', {
    username: "emilyannemoses", 
    email: "eamoses@gmail.com",
    blurb: "This is some test info for a fake user"
  }, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

module.exports = {
    getUsers,
    getUserById,
    createUser
}