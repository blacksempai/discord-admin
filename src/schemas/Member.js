const { model, Schema } = require("mongoose")

module.exports = model("Member", new Schema({
    Guild: String,
    userID: String,
    cash: { type: Number, default: "0" },
    card: { type: Number, default: "0" },
    level: { type: Number, default: "1" },
    xp: { type: Number, default: "1" },
    timely: { type: Number, default: Date.now() },
    work: { type: Number, default: Date.now() },
    work_second: { type: Number, default: Date.now() },
    inventory: { type: Array, default: [] }
}))