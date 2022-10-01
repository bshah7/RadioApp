const banner = require("../models/banner.model.js");

// Create and Save a new user
exports.getBanner = (req, res) => {
    try {
        banner.getBanner((err, data) => {
            res.send(data)
        });
    } catch (err) {
        next(err);
    }
};