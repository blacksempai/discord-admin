const { model, Schema } = require("mongoose")

module.exports = model("Second_Work", new Schema({
    Guild: String,
    salary: { type: Number, default: 1000 },
    workcd: { type: String, default: "24h" },
}))