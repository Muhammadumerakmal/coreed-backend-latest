const { showbooks } = require("../services/bookdb.services")
const { bookDB } = require("../constant/book-data")

// ---------------- show books ----------------
exports.bookdataFunction = (req, res) => {
    const result = showbooks()
    res.status(200).json({
        status: "success",
        data: result
    })
}

// ---------------- create book ----------------
exports.createBookFunction = (req, res) => {
    const { id, title, author } = req.body

    if (!id || !title || !author) {
        return res.status(400).json({
            status: "id, title and author are required"
        })
    }

    bookDB.push({ id, title, author })

    res.status(201).json({
        status: "book created successfully",
        data: bookDB
    })
}

// ---------------- update book ----------------
exports.updateBookFunction = (req, res) => {
    const id = Number(req.params.id)
    const { title, author } = req.body

    const book = bookDB.find(b => b.id === id)

    if (!book) {
        return res.status(404).json({ status: "book not found" })
    }

    if (title) book.title = title
    if (author) book.author = author

    res.status(200).json({
        status: "book updated successfully",
        data: book
    })
}

// ---------------- delete book ----------------
exports.deleteBookFunction = (req, res) => {
    const id = Number(req.params.id)

    const index = bookDB.findIndex(b => b.id === id)
    if (index === -1) {
        return res.status(404).json({ status: "book not found" })
    }

    bookDB.splice(index, 1)

    res.status(200).json({
        status: "book deleted successfully",
        data: bookDB
    })
}
