const page = require("../models/page.model.js");

// Create and Save a new user
exports.getPage = (req, res) => {
    try {
        if (!req.body.page_name)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        page.getPage(req.body.page_name, (err, data) => {
            res.send(data)
        });
    } catch (err) {
        next(err);
    }
};