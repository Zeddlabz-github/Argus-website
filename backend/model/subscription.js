/**
 * @author krish
 */

const mongoose = require('mongoose')

let schema = new mongoose.Schema(
    {
        email: String,
        isApproved: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('subscription', schema, 'subscription')
