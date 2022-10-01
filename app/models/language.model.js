const sql = require("./db.js");

// constructor
const language = function (language) {
    this.name = language.name;
};

language.getLanguage = (resultReturn) => {
    sql.query(`SELECT * FROM tbl_language`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "Language get sucessfully", result });
        return;

    });
};


module.exports = language;
