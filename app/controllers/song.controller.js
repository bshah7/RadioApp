const song = require("../models/song.model.js");

// Create and Save a new user
exports.getLatestSong = (req, res) => {
    try {
        const user_id = req.body.user_id ? req.body.user_id : '';
        song.getLatestSong((err, data) => {
            song.checkFavorite(data.result, user_id, (err, data) => {
                res.send(data)
            });
        });
    } catch (err) {
        next(err);
    }
};

exports.allSong = (req, res) => {
    try {

        if (!req.body.language_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });
        if (!req.body.city_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        const city_id = req.body.city_id ? req.body.city_id : '';
        const user_id = req.body.user_id ? req.body.user_id : '';
        const language_id = req.body.language_id ? req.body.language_id : '';

        song.allSong(language_id, city_id, (err, data) => {
            song.checkFavorite(data.result, user_id, (err, data) => {
                res.send(data)
            });
        });
    } catch (err) {
        next(err);
    }
};

exports.getFavoriteList = (req, res) => {
    try {
        if (!req.body.user_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });
        song.getFavoriteList(req.body.user_id, (err, data) => {
            song.checkFavorite(data.result, req.body.user_id, (err, data) => {
                res.send(data)
            });
        });
    } catch (err) {
        next(err);
    }
};

exports.getSongByCategory = (req, res) => {
    try {
        if (!req.body.category_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        if (!req.body.language_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        const category_id = req.body.category_id ? req.body.category_id : '';
        const user_id = req.body.user_id ? req.body.user_id : '';
        const language_id = req.body.language_id ? req.body.language_id : '';

        song.getSongByCategory(category_id, language_id, (err, data) => {
            song.checkFavorite(data.result, user_id, (err, data) => {
                res.send(data)
            });
        });
    } catch (err) {
        next(err);
    }
};

exports.getSongByLanguage = (req, res) => {
    try {
        if (!req.body.language_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });
        const user_id = req.body.user_id ? req.body.user_id : '';
        const language_id = req.body.language_id ? req.body.language_id : '';

        song.getSongByLanguage(language_id, (err, data) => {
            song.checkFavorite(data.result, user_id, (err, data) => {
                res.send(data)
            });
        });
    } catch (err) {
        next(err);
    }
};

exports.searchSong = (req, res) => {
    try {
        if (!req.body.name)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        if (!req.body.language_id)
            return res.status(400).json({
                message: "Please fill the required fields."
            });

        const name = req.body.name ? req.body.name : '';
        const language_id = req.body.language_id ? req.body.language_id : '';
        const user_id = req.body.user_id ? req.body.user_id : '';

        song.searchSong(name, language_id, (err, data) => {
            song.checkFavorite(data.result, user_id, (err, data) => {
                res.send(data)
            });
        });

    } catch (err) {
        console.log(err)
    }
};