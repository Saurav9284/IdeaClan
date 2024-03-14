const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    course: { type: String, enum: ["backend", "frontend", "full stackweb development", "android developer", "data analytics"] },
    url: { type: String, required: true }
});

const LectureModel = mongoose.model('Lecture', lectureSchema);

module.exports = LectureModel;
