module.exports = {
    new: newMovie,
    create,
};

const Movie = require('../models/movie');

function newMovie(req, res) {
    res.render('movies/new', { errorMsg: ""})
};

async function create() {

}