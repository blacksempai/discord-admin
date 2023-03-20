const { model, Schema } = require("mongoose")

module.exports = model("Logs", new Schema({
    Guild: String,
    Channel: String,
}))