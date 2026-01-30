//controllers\book.controllers.js
const { showBooks } = require("../services/bookdb.services")
const book_table = require("../model/bookdb.model")

// ---------------- show all books ----------------
exports.showallbooks = (req, res) => {
  const result = showBooks()
  return res.status(200).json({
    success: true,
    data: result,
  })
}

// ---------------- create book ----------------
exports.createBook = async (req, res) => {
  // client se data nikal rahe hain
  const { title, author, year } = req.body

  // mongodb me new book create kar rahe hain
  const result = await book_table.create({
    title,
    author,
    year,
  })

  return res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: result,
  })
}

// ---------------- update book ----------------
exports.updateBook = async (req, res) => {
  // url se book ki id le rahe hain
  const { id } = req.params

  // body se updated data le rahe hain
  const { title, author, year } = req.body

  // pehle check kar rahe hain book exist karti hai ya nahi
  const updatedBook = await book_table.findByIdAndUpdate(
    id,
    {
      title,
      author,
      year,
    },
    { new: true } // ye option updated record return karta hai
  )

  // agar book nahi mili
  if (!updatedBook) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    })
  }

  return res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: updatedBook,
  })
}

// ---------------- delete book ----------------
exports.deleteBook = async (req, res) => {
  // url se id nikal rahe hain
  const { id } = req.params

  // mongodb se book delete kar rahe hain
  const deletedBook = await book_table.findByIdAndDelete(id)

  // agar book nahi mili
  if (!deletedBook) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    })
  }

  return res.status(200).json({
    success: true,
    message: "Book deleted successfully",
  })
}
