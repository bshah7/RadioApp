const connection = require("../models/db.js");
const { body, param, validationResult } = require("express-validator");
const user = require("../models/user.model.js");

module.exports = {
    // User name and email Validation
    userInfo: [
        body("name", "The name must be of minimum 3 characters length")
            .isLength({ min: 3, max: 25 })
            .trim()
            .unescape()
            .escape(),
        body("email", "Invalid email address")
            .optional()
            .trim()
            .unescape()
            .escape()
            .isEmail()
    ],

    // User ID Validation
    userID: [param("id", "Invalid User ID").trim().isInt()],

    // Checking Validation Result
    result: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    },
};