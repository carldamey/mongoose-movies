module.exports = {
    new: newMovie,
    create,
    index,
};

const Movie = require('../models/movie');

function newMovie(req, res) {
    res.render('movies/new', { errorMsg: ""})
};

async function create(req, res) {
// convert nowShowing from checkbox value to boolean
    req.body.nowShowing = !!req.body.nowShowing
// remove whitespace at start and end of cast
    req.body.cast = req.body.cast.trim()
// split cast into array if not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s,\s*/)
    try {
        await Movie.create(req.body)
        res.redirect("movies/new")
    } catch (err) {
        res.render("movies/new/", {errorMsg: err.message})
    }
}

function index(req, res) {
    res.render("movies/index")
}