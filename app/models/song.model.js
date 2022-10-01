const sql = require("./db.js");
const commonConfig = require("../../config/common.config.js");
var async = require('async');


// constructor
const song = function (song) {
    this.name = song.name;
};

song.getLatestSong = (resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'song/';

    sql.query('SELECT tbl_song.*, concat("' + image_path + '", tbl_song.image) as image, concat("' + image_path + '", song_url) as song_url, tbl_category.name as category_name  FROM tbl_song LEFT JOIN tbl_category ON tbl_song.category_id = tbl_category.id  order by id desc limit 20', (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "get Latest song sucessfully", result });
        return;
    });
};

song.allSong = (language_id, city_id, resultReturn) => {

    const image_path = commonConfig.IMAGE_BASE_PATH + 'song/';
    const cat_path = commonConfig.IMAGE_BASE_PATH + 'category/';
    sql.query('SELECT tbl_song.*,tbl_category.name as category_name , tbl_artist.name as artist_name, concat("' + cat_path + '", tbl_category.image) as category_image, concat("' + image_path + '", tbl_song.image) as image, concat("' + image_path + '", song_url) as song_url FROM tbl_song LEFT JOIN tbl_category ON tbl_song.category_id = tbl_category.id LEFT JOIN tbl_artist ON tbl_song.artist_id = tbl_artist.id WHERE  language_id=' + language_id + ' AND city_id=' + city_id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "get all song sucessfully", result });
        return;
    });
};

song.getFavoriteList = (user_id, resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'song/';
    sql.query('SELECT tbl_song.*, concat("' + image_path + '", tbl_song.image) as image,tbl_category.name as category_name , concat("' + image_path + '", song_url) as song_url FROM tbl_song LEFT JOIN tbl_favorite ON tbl_song.id = tbl_favorite.song_id LEFT JOIN tbl_category ON tbl_song.category_id = tbl_category.id WHERE tbl_favorite.user_id = ?', user_id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "get all song sucessfully", result });
        return;
    });
};

song.getSongByCategory = (category_id, language_id, resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'song/';
    const cat_path = commonConfig.IMAGE_BASE_PATH + 'category/';
    sql.query('SELECT tbl_song.*,tbl_category.name as category_name , tbl_artist.name as artist_name, concat("' + cat_path + '", tbl_category.image) as category_image, concat("' + image_path + '", tbl_song.image) as image, concat("' + image_path + '", song_url) as song_url FROM tbl_song LEFT JOIN tbl_category ON tbl_song.category_id = tbl_category.id LEFT JOIN tbl_artist ON tbl_song.artist_id = tbl_artist.id WHERE tbl_song.category_id = ' + category_id + ' AND language_id=' + language_id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "get all song sucessfully", result });
        return;
    });
};

song.getSongByLanguage = (language_id, resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'song/';
    const cat_path = commonConfig.IMAGE_BASE_PATH + 'category/';
    sql.query('SELECT tbl_song.*,tbl_category.name as category_name , tbl_artist.name as artist_name, concat("' + cat_path + '", tbl_category.image) as category_image, concat("' + image_path + '", tbl_song.image) as image, concat("' + image_path + '", song_url) as song_url FROM tbl_song LEFT JOIN tbl_category ON tbl_song.category_id = tbl_category.id LEFT JOIN tbl_artist ON tbl_song.artist_id = tbl_artist.id WHERE tbl_song.language_id = ?', language_id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "get all song sucessfully", result });
        return;
    });
};

song.searchSong = (name, language_id, resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'song/';
    const cat_path = commonConfig.IMAGE_BASE_PATH + 'category/';
    const query = "SELECT tbl_song.*,tbl_category.name as category_name , tbl_artist.name as artist_name, concat('" + cat_path + "', tbl_category.image) as category_image, concat('" + image_path + "', tbl_song.image) as image, concat('" + image_path + "', song_url) as song_url FROM tbl_song LEFT JOIN tbl_category ON tbl_song.category_id = tbl_category.id LEFT JOIN tbl_artist ON tbl_song.artist_id = tbl_artist.id WHERE tbl_song.name LIKE  '%" + name + "%' AND tbl_song.language_id=" + language_id;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "get all song sucessfully", result });
        return;
    });
};


song.checkFavorite = (data, user_id, resultReturn) => {
    async.forEachSeries(data, function (row, forEachCallback) {
        sql.query("SELECT * FROM tbl_favorite where song_id=" + row.id + " AND user_id=" + user_id, (error, response) => {
            row.is_favorite = 0;

            if (error) {
                row.is_favorite = 0;
            }

            if (response) {
                if (response.length) {
                    row.is_favorite = 1;
                }
            }
            forEachCallback();
        });

    }, function (err) {
        if (err) {
            result = [];
            resultReturn(null, { 'status': 200, 'message': "get all song sucessfully", result });
            return;
        }
        result = data;
        resultReturn(null, { 'status': 200, 'message': "get all song sucessfully", result });
        return;
    });
};


module.exports = song;
