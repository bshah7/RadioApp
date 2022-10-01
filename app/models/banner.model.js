const sql = require("./db.js");
const commonConfig = require("../../config/common.config.js");

// constructor
const banner = function (banner) {
    this.name = banner.name;
    this.image = banner.image;
};

banner.getBanner = (resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'banner/';
    sql.query('SELECT *, concat("' + image_path + '", image) as image FROM tbl_banner', (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "Banner get sucessfully", result });
        return;

    });
};

module.exports = banner;
