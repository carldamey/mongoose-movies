const express = require("express")
const router = express.Router()
const reviewsCtrl = require("../controllers/reviews.js")

router.post("movies/:id/reviews", reviewsCtrl.create)
