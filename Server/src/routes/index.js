const express = require('express');
const router = express.Router();

const characters = require('./characters');

router.use("/rickandmorty/character", characters);

module.exports = router