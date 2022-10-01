const sql = require("./db.js");

// constructor
const page = function (page) {
    this.name = page.name;
};

page.getPage = (page_name, resultReturn) => {
    sql.query(`SELECT * FROM tbl_page WHERE name = '${page_name}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res[0];

        if (result) {
            resultReturn(null, { 'status': 200, 'message': "get page sucessfully", result });
        }
        else {
            const result = [];
            resultReturn(null, { 'status': 200, 'message': "get page sucessfully", result });
        }
        return;
    });
};

module.exports = page;
