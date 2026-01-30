//routes\book.routes.js
const express = require("express")
const { showallbooks ,createBook,updateBook,deleteBook} = require("../controllers/book.controllers")
const {himiddleware} = require("../middlewares/book.middleware")
const router = express.Router()

// Sample route for getting all books
router.get("/show-all-books",himiddleware, showallbooks)

router.post("/create-book", createBook)




router.put("/update-book/:id", updateBook)

router.delete("/delete-book/:id", deleteBook)




module.exports = router