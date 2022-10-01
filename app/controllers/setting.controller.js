const setting = require("../models/setting.model.js");

// Create and Save a new user
exports.generalSetting = (req, res) => {
    try {
        setting.generalSetting((err, data) => {
            res.send(data)
        });
    } catch (err) {
        next(err);
    }
};