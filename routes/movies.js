var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');

// GET /movies/new
router.get('/new', moviesCtrl.new);

// POST /movies
router.post('/', moviesCtrl.create)

// GET /movies
router.get("/", moviesCtrl.index)

module.exports = router;
