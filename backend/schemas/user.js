const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    mobile: {
        type: Number,
        required: true,
        // unique: true,
    },
    image: {
        type: String,
        required: false,
    },
    profession: {
        type: String,
        required: true,
        enum: ["STUDENT", "TEACHER"],
    },
    otp: {
        type: String,
        required: false,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        default: null,
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: "Faculty",
        default: null,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: Boolean,
});

const studentSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // uid uniquely identifies a user (for a students it is admission number)
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    course: String,
    dept: String,
    year: Number,
    isGraduated: Boolean,
    higherStudy: {
        type: [Schema.Types.ObjectId],
        ref: "HigherStudy",
    },
    placement: {
        type: Schema.Types.ObjectId,
        ref: "Placement",
    },
    contact: {
        type: Schema.Types.ObjectId,
        ref: "Contact",
    },
    compExam: {
        type: [Schema.Types.ObjectId],
        ref: 'CompExam'
    }
});

const facultySchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
// plugin local passport strategy in user Schema
userSchema.plugin(passportLocalMongoose);

module.exports.User = mongoose.model("User", userSchema);
module.exports.Student = mongoose.model("Student", studentSchema);
module.exports.Faculty = mongoose.model("Faculty", facultySchema);
