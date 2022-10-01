const Users = require("../models/user.model.js");

// Create and Save a new user
exports.login = (req, res) => {
    try {
        // Validation 
        // 1- Facebook, 2- Google, 3- OTP
        if (!req.body.type)
            return res.status(400).json({
                message: "Please fill in all the required fields.",
                fields: ["type"],
            });

        if (req.body.type == 1 || req.body.type == 2) {
            if (!req.body.email)
                return res.status(400).json({
                    message: "Please fill in all the required fields."
                });
        }

        if (req.body.type == 1 || req.body.type == 2) {
            if (!req.body.email) {
                return res.status(400).json({
                    message: "Please fill in all the required fields.",
                    fields: ["email"],
                });
            }

            Users.findByEmail(req.body.email, (err, data) => {
                if (err) {
                    if (err.status == 400) {
                        // if user not found then we create a new user and return the response
                        const mobile = req.body.mobile ? req.body.mobile : '';
                        const name = req.body.name ? req.body.name : '';
                        const type = req.body.type ? req.body.type : 1;
                        const user = new Users({
                            name: name,
                            mobile: mobile,
                            email: req.body.email,
                            type: type,
                        });

                        // Save user in the database
                        Users.create(user, (err, data) => {
                            if (err)
                                res.status(500).send({
                                    message:
                                        err.message || "Some error occurred while creating the user."
                                });
                            else res.send(data);
                        });
                    } else {
                        console.log('Type 1 and 2 user login Error not found user');
                    }
                }
                else { res.send(data) }

            });
        } else if (req.body.type == 3) {
            // OTP Login 
            if (!req.body.mobile) {
                return res.status(400).json({
                    message: "Please fill in all the required fields."
                });
            }

            Users.findByMobile(req.body.mobile, (err, data) => {
                if (err) {
                    if (err.status == 400) {
                        // if user not found then we create a new user and return the response
                        const mobile = req.body.mobile ? req.body.mobile : '';
                        const email = req.body.email ? req.body.email : '';
                        const name = req.body.name ? req.body.name : '';
                        const type = 3;

                        const user = new Users({
                            name: name,
                            mobile: mobile,
                            email: email,
                            type: 3,
                        });

                        console.log(user);
                        console.log('hmmmm');
                        // Save user in the database
                        Users.create(user, (err, data) => {
                            if (err)
                                res.status(500).send({
                                    message:
                                        err.message || "Some error occurred while creating the user."
                                });
                            else res.send(data);
                        });
                    } else {
                        console.log('Type 3 OTP login mobile not found error')
                    }
                }
                else { res.send(data) }
            });
        }
    } catch (err) {
        next(err);
    }
};

// Create and Save a new user
exports.updateProfile = (req, res) => {
    try {
        // Validation        
        if (!req.body.id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        Users.updateById(req.body.id, new Users(req.body), (err, data) => {

            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Users with id ${req.body.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Users with id " + req.body.id
                    });
                }
            } else res.send(data);
        }
        );

    } catch (err) {
        next(err);
    }
};


exports.getProfile = (req, res) => {
    try {
        if (!req.body.id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        Users.getProfile(req.body.id, (err, data) => {
            res.send(data)
        });
    } catch (err) {
        console.log(err)
    }
};

