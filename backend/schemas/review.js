const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
});


module.exports = mongoose.model("Review", reviewSchema);
