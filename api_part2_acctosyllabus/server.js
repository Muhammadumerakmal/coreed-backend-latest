//server.js
require("dotenv/config")
const express = require('express');
const app = express();

const bookRouter=require("./routes/book.routes")

const PORT = process.env.PORT 

//--ye seekhta hai kay kese json data ko read karain
app.use(express.json())

//-----------------------router registration--------------------------------//
// http://localhost:8000
// ye saari request bhejta hai book routes koo
app.use("/",bookRouter)

  

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
 
     // routes\book.routes.js
const express = require("express")
                                                               // iss ko mangwaliya
const {bookdataFunction,createBookFunction,updateBookFunction,deleteBookFunction}= require("../controllers/book.controllers")
const {himiddleware}=require("../middleware/book.middleware")
const router = express.Router()

//services\bookdb.services.js
const {bookDB}=require("../constant/book-data")

exports.showbooks = ()=>{
    return bookDB
}


//controllers\book.controllers.js



//----------------show book data function---------------------//
exports.bookdataFunction=(req,res)=>{
    
    res.status(200).json({status:"success",data:bookDB})
}

exports.createBookFunction=(req,res)=>{
    // params
    // body {done}
    // header
    // cookies

    const id = req.body.id
     const title = req.body.title
      const author = req.body.author
    bookDB.push({id:id,title:title,author:author})


    res.status(201).json({status:"book created successfully",data:bookDB})
}


//------------------------update book function------------------//

exports.updateBookFunction = (req, res) => {
    const id = req.params.id
    const { title, author } = req.body

    const book = bookDB.find(b => b.id == id)
    if (!book) {
        return res.status(404).json({ status: "book not found" })
    }

    if (title) book.title = title
    if (author) book.author = author

    res.status(200).json({ status: "book updated", data: bookDB })
    res.json({ status: "Book updated", book: bookDB[index] });
}


//------------------------delete book function------------------//

// ismai humne export kardia aur arrow function ke help se req,res dia 

exports.deleteBookFunction = (req, res) => {

    // iss id ka variable mai req se params jo dynamic hota hai woo iss mai se id nikal liya

    const id = Number(req.params.id)

// index kay variable mai humne findindex ka loop chalaya whol boom per jismai agar nahi mila too "-1 " return hojaiga
    const index = bookDB.findIndex(b => b.id === id)
    if (index === -1) {

        // -1 mil giya too ye return milgaiga
        return res.status(404).json({ status: "book not found" })
    }

    // ismai splice ko chlaya "index kay matlab wo book ka num milgia aur "-1" ka matlab sirf ye delete hoga "
    bookDB.splice(index, 1)

// jab del hjai too ye res how karwao
    res.status(200).json({
        status: "book deleted successfully",
        data: bookDB
    })
}


//----------------show book api---------------------//
router.get("/book",himiddleware,bookdataFunction)

//------------------------create book api------------------//
router.post("/create-book",createBookFunction)

// ------------------------update book api------------------//
router.put("/update-book/:id", updateBookFunction)



// ye wo route jab hum "/delete-book/:id aur ye jo ":id" iskay matlab = ye params ka part hai jo hum dynamic id write kartain ho put ke help se
// too aur yehi[:id] is delete kay case mai del hojaiga "
router.delete("/delete-book/:id", deleteBookFunction)

//bheja raha hoo doosri files ki lye taki wo accss karain //
module.exports = router


