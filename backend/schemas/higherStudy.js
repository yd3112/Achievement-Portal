const mongoose = require("mongoose");
const { Schema } = mongoose;

const higherStudySchema = Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    field: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        default: Date.now(),
    },
    current: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("HigherStudy", higherStudySchema);
