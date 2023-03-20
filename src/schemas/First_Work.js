const { model, Schema } = require("mongoose")

module.exports = model("First_Work", new Schema({
    Guild: String,
    salary: { type: String, default: '1000' },
    workcd: { type: String, default: "24h" },
}))