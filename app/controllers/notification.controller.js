const Notification = require("../models/notification.model.js");

// Create and Save a new user
exports.notificationRead = (req, res) => {
    try {
        if (!req.body.user_id)
            return res.status(400).json({
                message: "Please fill in all the required fields."
            });

        if (!req.body.notification_id)
            return res.status(400).json({
                message: "Please fill in all the required fields."
            });

        const user_id = req.body.user_id ? req.body.user_id : '';
        const notification_id = req.body.notification_id ? req.body.notification_id : '';

        const notification = new Notification({
            user_id: user_id,
            notification_id: notification_id
        });

        // Save user in the database
        Notification.create(notification, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the user."
                });
            else res.send(data);
        });

    } catch (err) {
        console.log(err);
    }
};


exports.notificationList = (req, res) => {
    try {
        if (!req.body.user_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        Notification.notificationList(req.body.user_id, (err, data) => {
            res.send(data)
        });
    } catch (err) {
        console.log(err)
    }
};

