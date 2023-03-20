const { model, Schema } = require("mongoose")

module.exports = model("Second_Shop", new Schema({
    Guild: String,
    owner: { type: String, default: "none" },
    cashbox: { type: Number, default: "0" },
    materials: { type: Number, default: "0" },
    roles_sold: { type: Number, default: "0" },
    money_earned: { type: Number, default: "0" },
    delay: { type: Number, default: Date.now()},
    delaycd: { type: String, default: "24h" },
    roles: { type: Array, default: [] }
}))