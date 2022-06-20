"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    text: { type: String, require: true },
    img: { type: String },
    creator: { type: mongoose_1.Schema.Types.ObjectId }
});
exports.default = (0, mongoose_1.model)("posts", postSchema);
