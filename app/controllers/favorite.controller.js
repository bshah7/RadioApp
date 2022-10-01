const addRemoveFavorite = require("../models/favorite.model.js");

// Create and Save a new favorit
exports.addRemoveFavorite = (req, res) => {
    try {

        // Validation 
        if (!req.body.song_id) {
            return res.status(400).json({
                message: "Please fill in all the required fields song_id."
            });
        }

        if (!req.body.user_id) {
            return res.status(400).json({
                message: "Please fill in all the required fields."
            });
        }

        addRemoveFavorite.get_favorite(req.body.user_id, req.body.song_id, (err, data) => {

            if (err) {
                if (err.status == 400) {

                    const favorite = new addRemoveFavorite({
                        user_id: req.body.user_id,
                        song_id: req.body.song_id
                    });

                    // Save favorit in the database
                    addRemoveFavorite.create(favorite, (err, data) => {
                        if (err)
                            res.status(500).send({
                                message:
                                    err.message || "Some error occurred while creating the favorit."
                            });
                        else res.send(data);
                    });
                } else {
                    console.log('favorite');
                }
            }
            else {
                addRemoveFavorite.remove(req.body.user_id, req.body.song_id, (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.status(404).send({
                                message: `Not found favorite`
                            });
                        } else {
                            res.status(500).send({
                                message: "Could not delete favorite"
                            });
                        }
                    } else res.send({ 'status': 200, message: `This song is unfavorite successfully!` });
                });
            }
        });
    } catch (err) {
        console.log(err)
        // next(err);
    }
};