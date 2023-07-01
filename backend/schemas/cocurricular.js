const mongoose = require("mongoose");
const { Schema } = mongoose;

const cocurricularSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    institute: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    proof: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Cocurricular", cocurricularSchema);
