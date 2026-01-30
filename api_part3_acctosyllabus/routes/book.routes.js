const express = require("express")
const { showallbooks } = require("../controllers/book.controllers")
const {himiddleware} = require("../middlewares/book.middleware")
const router = express.Router()

// Sample route for getting all books
router.get("/show-all-books",himiddleware, showallbooks)

module.exports = router