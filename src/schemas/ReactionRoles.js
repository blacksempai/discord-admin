const { model, Schema } = require("mongoose")

let reactionRoles = new Schema
(
    {
        Guild: String,
        roles: Array
    }
)

module.exports = model("ReactionRoles", reactionRoles)