const mongoose = require('mongoose')
const {Schema} = mongoose

const AdoptionSchema = new Schema({
    email: String,
    date: String,
    hour: String,
    ferret:String,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const AdoptionModel = mongoose.model("Adoption", AdoptionSchema)

module.exports = AdoptionModel