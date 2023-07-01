const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = Schema({
    email: {
        type: String,
        required: true,
    },
    linkedIn: {
        type: String,
        required: true,
    },
    twitter: String,
    instagram: String,
});

module.exports = mongoose.model("Contact", contactSchema);
