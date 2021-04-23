const mongoose = require("mongoose")
const lionSchema = mongoose.Schema({
name: String,
breed: String,
age:{
    type:Number,
    min:1,
    max:500
    }
})
module.exports = mongoose.model("lion", lionSchema)