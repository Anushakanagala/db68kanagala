const mongoose = require("mongoose")
const lionSchema = mongoose.Schema({
name: String,
age: Number,
breed: String
})
module.exports = mongoose.model("lion", lionSchema)