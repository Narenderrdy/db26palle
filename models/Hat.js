const mongoose = require("mongoose")
const HatSchema = mongoose.Schema({
    brand: {
        type: String,
        minLength: 4
    },
    material: {
        type: String,
        minLength: 4
    },
    cost: Number
})

module.exports = mongoose.model("Hat",
    HatSchema)