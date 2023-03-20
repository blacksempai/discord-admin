const { model, Schema } = require("mongoose")

module.exports = model("Auction", new Schema({
    Guild: String,
    owner: { type: String, default: "none" },
    roles: { type: Array, default: [] }
}))