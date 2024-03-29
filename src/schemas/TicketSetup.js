const { model, Schema } = require("mongoose")

module.exports = model("TicketSetup", new Schema({
    Guild: String,
    Channel: String,
    Category: String,
    Transcripts: String,
    Handlers: String,
    Everyone: String,
    Description: String,
    Buttons: [String],
}))