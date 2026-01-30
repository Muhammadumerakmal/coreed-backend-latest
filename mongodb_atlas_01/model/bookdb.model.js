const {Schema,model}= require("mongoose")

const bookTable= new Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  year:{
    type:Number,
    required:true
  },
},{timestamps:true})

const book_table = model("book_table",bookTable)

module.exports=book_table