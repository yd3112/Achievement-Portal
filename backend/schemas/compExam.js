const mongoose = require("mongoose");
const { Schema } = mongoose;

const compExamSchema = Schema({
    exams: {
        type: [
            {
                name: String,
                score: Number,
                total: Number,
                rank: Number,
            },
        ],
        required: false,
    },
});

module.exports = mongoose.model("CompExam", compExamSchema);
