module.exports = app => {
    const user = require("../controllers/user.controller.js");
    const language = require("../controllers/language.controller.js");
    const category = require("../controllers/category.controller.js");
    const banner = require("../controllers/banner.controller.js");
    const setting = require("../controllers/setting.controller.js");
    const favorite = require("../controllers/favorite.controller.js");
    const song = require("../controllers/song.controller.js");
    const page = require("../controllers/page.controller.js");
    const notification = require("../controllers/notification.controller.js");
    const city = require("../controllers/city.controller.js");
    const validators = require('../validation/validation.js');


    var router = require("express").Router();

    router.post("/login", user.login);

    router.post("/get_profile", user.getProfile);

    router.post("/update_profile", user.updateProfile);

    router.post("/get_language", language.getLanguage);

    router.post("/get_category", category.getCategory);

    router.post("/get_banner", banner.getBanner);

    router.post("/get_city", city.getCity);

    router.post("/general_setting", setting.generalSetting);

    router.post("/add_remove_favorite", favorite.addRemoveFavorite);

    router.post("/get_latest_song", song.getLatestSong);

    router.post("/all_song", song.allSong);

    router.post("/get_favorite_list", song.getFavoriteList);

    router.post("/get_song_by_category", song.getSongByCategory);

    router.post("/get_song_by_language", song.getSongByLanguage);

    router.post("/search_song", song.searchSong);

    router.post("/notification_read", notification.notificationRead);

    router.post("/notification_list", notification.notificationList);

    router.post("/get_page", page.getPage);

    app.use('/api/', router);
};