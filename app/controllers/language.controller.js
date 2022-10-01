const language = require("../models/language.model.js");

// Create and Save a new user
exports.getLanguage = (req, res) => {
    try {
        language.getLanguage((err, data) => {
            res.send(data)
        });
    } catch (err) {
        next(err);
    }
};