const { model, Schema } = require("mongoose")

module.exports = model("Guild", new Schema({
    Guild: String,
    currency: { type: String, default: "💵" },
    timelyaward: { type: String, default: "100" },
    timelycd: { type: String, default: "24h" }
}))