const express = require("express")
const {
    bookdataFunction,
    createBookFunction,
    updateBookFunction,
    deleteBookFunction
} = require("../controllers/book.controllers")

const { himiddleware } = require("../middleware/book.middleware")

const router = express.Router()

// show books
router.get("/book", himiddleware, bookdataFunction)

// create book
router.post("/create-book", createBookFunction)

// update book
router.put("/update-book/:id", updateBookFunction)

// delete book
router.delete("/delete-book/:id", deleteBookFunction)

module.exports = router
