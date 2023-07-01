const mongoose = require("mongoose");
const { Schema } = mongoose;

const academicSchema = Schema({
    // should add cgpa or not ?
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["EXAM", "RESEARCH"],
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
    },
    proof: {
        type: String,
        required: true,
    },
    marks: {
        type: String,
    },
    link: {
        type: String,
    },
});

module.exports = mongoose.model("Academic", academicSchema);
