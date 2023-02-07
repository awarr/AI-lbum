const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imageUrl: String,
});
module.exports = mongoose.model("Image", imageSchema);
