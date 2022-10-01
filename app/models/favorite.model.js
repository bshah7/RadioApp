const sql = require("./db.js");

// constructor
const favorite = function (favorite) {
    this.song_id = favorite.song_id;
    this.user_id = favorite.user_id;
};

favorite.create = (favorite, resultReturn) => {
    sql.query("INSERT INTO tbl_favorite SET ?", favorite, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        resultReturn(null, { 'status': 200, 'message': "Add favorite song sucessfully" });
        return;
    });
};

favorite.get_favorite = (user_id, song_id, result) => {
    sql.query(`SELECT * FROM tbl_favorite WHERE user_id = '${user_id}' AND song_id='${song_id}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ 'status': '400', 'message': "favorit not found" }, null);
    });
};

favorite.remove = (user_id, song_id, result) => {
    sql.query(`DELETE FROM tbl_favorite WHERE user_id = '${user_id}' AND song_id='${song_id}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
        }

        result(null, res);
    });
};

module.exports = favorite;