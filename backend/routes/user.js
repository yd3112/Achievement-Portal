const router = require("express").Router();
const { Student, User } = require("../schemas/user");
const HigherStudy = require("../schemas/higherStudy");
const Placement = require("../schemas/placement");
const Contact = require("../schemas/contact");
const CompExam = require("../schemas/compExam");

// user id for testing
const gid = "6355320b9bb6ac140a88049a";

router.get("/profile", async (req, res) => {
    const user = await User.findOne({ username: req.cookies.username });
    res.json({ success: true, user });
});

router.post("/add", async (req, res, next) => {
    // extract data from request
    const { uid, course, isGraduated, higherStudy, placement, contact, compExam } = req.body.student;
    const user = await User.findById(gid);

    // inserting data documents in database
    const higherStudyID = (await HigherStudy.create(higherStudy))._id;
    const placementID = (await Placement.create(placement))._id;
    const contactID = (await Contact.create(contact))._id;
    const compExamID = (await CompExam.create({ exams: compExam }))._id;
    const student = await Student.create({
        user: gid,
        uid: uid,
        course: course,
        dept: uid.slice(3, 5),
        year: parseInt(`20${uid.slice(1, 3)}`),
        isGraduated: isGraduated,
        higherStudy: higherStudyID,
        placement: placementID,
        contact: contactID,
        compExam: compExamID,
    });
    user.student = student._id;
    await user.save();

    // send response
    res.json({ success: true, student });
});

// get student details
router.get("/get/:uid", async (req, res, next) => {
    const user = await User.findById(gid).populate("student", "-__v");
    console.log(user);
    const student = await user.student.populate("higherStudy placement contact compExam");

    res.json({ success: true, student });
});

// edit user details
router.put("/edit", async (req, res, next) => {
    // extract data from req
    const { uid, course, isGraduated, higherStudy, placement, contact, compExam } = req.body.student;
    const user = await User.findById(gid);

    // updating data in database
    const student = await Student.findByIdAndUpdate(user.student, {
        uid: uid,
        course: course,
        isGraduated: isGraduated,
        higherStudy: higherStudy,
        placement: placement,
        contact: contact,
        compExam: compExam,
    });

    // send response
    res.json({ success: true });
});

router.delete("/delete", async (req, res, next) => {
    // extracting data
    const user = await User.findById(gid);
    const student = await Student.findById(user.student);

    // deleting data from database
    await HigherStudy.findByIdAndDelete(student.higherStudy);
    await Placement.findByIdAndDelete(student.placement);
    await Contact.findByIdAndDelete(student.contact);
    await CompExam.findByIdAndDelete(student.compExam);
    await Student.findByIdAndDelete(student._id);
    await User.findByIdAndDelete(gid);

    // sending response
    res.json({ success: true });
});

module.exports = router;
