const sql = require("./db.js");
const commonConfig = require("../../config/common.config.js");

// constructor
const category = function (category) {
    this.name = category.name;
};

category.getCategory = (resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'category/';
    sql.query('SELECT *, concat("' + image_path + '", image) as image FROM tbl_category', (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "Category get sucessfully", result });
        return;

    });
};

module.exports = category;
