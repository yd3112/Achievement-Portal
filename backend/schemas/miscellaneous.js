const mongoose = require("mongoose");
const { Schema } = mongoose;

const miscellaneousSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("Miscellaneous", miscellaneousSchema);
