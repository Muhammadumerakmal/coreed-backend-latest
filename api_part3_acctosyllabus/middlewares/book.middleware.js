const { log } = require("console")

exports.himiddleware=(req,res,next)=>{
    console.log("This is a middleware function")

    
    next()
}