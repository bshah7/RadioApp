const category = require("../models/category.model.js");

// Create and Save a new user
exports.getCategory = (req, res) => {
    try {
        category.getCategory((err, data) => {
            res.send(data)
        });
    } catch (err) {
        next(err);
    }
};