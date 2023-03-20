const { model, Schema } = require("mongoose")

module.exports = model("Ticket", new Schema({
    Guild: String,
    MembersID: [String],
    TicketID: String,
    ChannelID: String,
    Closed: Boolean,
    Locked: Boolean,
    Type: String,
    Claimed: Boolean,
    ClaimedBy: String,
}))