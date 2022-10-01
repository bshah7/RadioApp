const sql = require("./db.js");
const commonConfig = require("../../config/common.config.js");

// constructor
const setting = function (setting) {
    this.name = setting.key;
    this.image = setting.value;
};

setting.generalSetting = (resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'app/';
    sql.query(`SELECT * FROM tbl_setting`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }

        const result = {};
        res.forEach(function (row) {
            if (row.key == 'app_logo') {
                row.value = image_path + row.value;
            }

            if (row.key == 'about-us' || row.key == 'terms-and-conditions' || row.key == 'privacy-policy') {
                row.value = commonConfig.BASE_PATH + row.value;
            }

            result[row.key] = row.value;
        });

        resultReturn(null, { 'status': 200, 'message': "Setting get sucessfully", result });
        return;
    });
};

module.exports = setting;
