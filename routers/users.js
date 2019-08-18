const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getUsers);

router.get('/:id', usersController.getUserById)

router.post('/', usersController.createUser);

module.exports = router;