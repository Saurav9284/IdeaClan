const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createrId: { type: mongoose.Types.ObjectId, required: true },
    status: { type: String, enum: ["Pending", "Resolved", "Reopened"] }
});

const DiscussionModel = mongoose.model('Discussion', discussionSchema);

module.exports = DiscussionModel;
