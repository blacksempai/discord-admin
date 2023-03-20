const { model, Schema } = require("mongoose")

module.exports = model("Plugins", new Schema({
    guild: String,
    economy: {type: Boolean, default: true}, 
    giveaways: {type: Boolean, default: true},
    moderation: {type: Boolean, default: true}, 
    rroles: {type: Boolean, default: true}, 
    autoroles: {type: Boolean, default: true}, 
    logs: {type: Boolean, default: true},
    utilities: {type: Boolean, default: true},
    fun: {type: Boolean, default: true},
}));