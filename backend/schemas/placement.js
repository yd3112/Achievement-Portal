const mongoose = require("mongoose");
const { Schema } = mongoose;

const placementSchema = mongoose.Schema({
    company: {
        type: String,
    },
    ctc: {
        type: String,
        required : true,
    },
    sector: {
        type: String,
        required: true,
    },
    desc : {
        type : String,
    },
    current: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model("Placement", placementSchema);
