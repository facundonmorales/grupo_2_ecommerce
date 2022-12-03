const express = require("express");
const path = require('path');
const ApiUsers = require("../../controller/api/UserControllers");
const router = express.Router();

router.get('/users/', ApiUsers.users);
router.get('/users/:id', ApiUsers.detalleUsers);











module.exports = router;