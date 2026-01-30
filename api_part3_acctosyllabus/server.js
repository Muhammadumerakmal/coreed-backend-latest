require("dotenv/config")
const bookRoutes =require("./routes/book.routes")

const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000
// ---routes would go here---
app.use("/book",bookRoutes)


// listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) 