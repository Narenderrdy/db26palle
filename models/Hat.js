const mongoose = require("mongoose")
const HatSchema = mongoose.Schema({
    brand: String,
    material: String,
    cost: Number
})

module.exports = mongoose.model("Hat",
    HatSchema)