const city = require("../models/city.model.js");

// Create and Save a new user
exports.getCity = (req, res) => {
    try {
        city.getCity((err, data) => {
            res.send(data)
        });
    } catch (err) {
        console.log(err);
    }
};