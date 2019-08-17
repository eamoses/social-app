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

module.exports = {
    getUsers
}