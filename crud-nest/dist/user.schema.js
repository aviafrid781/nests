"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: Number,
    address: String,
    created_at: String,
    updated_at: String,
});
//# sourceMappingURL=user.schema.js.map