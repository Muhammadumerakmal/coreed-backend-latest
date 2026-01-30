// server.js
require("dotenv/config")
const express = require("express")
const app = express()

const { connectMongoDb } = require("./db/connection")
const bookRoutes = require("./routes/book.routes")

const PORT = process.env.PORT || 3000

// 🔥 MIDDLEWARE (THIS WAS MISSING)
app.use(express.json())

// routes
app.use("/book", bookRoutes)

// DB
connectMongoDb(process.env.MONGODB_URL)

// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
