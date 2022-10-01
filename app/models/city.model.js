const sql = require("./db.js");
const commonConfig = require("../../config/common.config.js");

// constructor
const City = function (city) {
    this.name = city.name;
    this.image = city.image;
};

City.getCity = (resultReturn) => {
    const image_path = commonConfig.IMAGE_BASE_PATH + 'city/';
    sql.query('SELECT *, concat("' + image_path + '", image) as image FROM tbl_city', (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        const result = res;
        resultReturn(null, { 'status': 200, 'message': "City get sucessfully", result });
        return;

    });
};

module.exports = City;
