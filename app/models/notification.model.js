const sql = require("./db.js");
const commonConfig = require("../../config/common.config.js");

// constructor
const notification = function (notification) {
    this.id = notification.id;
    this.user_id = notification.user_id;
    this.notification_id = notification.notification_id;
};

const table_name = 'tbl_user_notification_tracking';

notification.create = (newNotification, resultReturn) => {

    sql.query("INSERT INTO " + table_name + " SET ?", newNotification, (err, res) => {
        if (err) {
            resultReturn(err, null);
            return;
        }
        resultReturn(null, { 'status': 200, 'message': "Read Notification sucessfully" });
        return;
    });
};

notification.notificationList = (user_id, resultReturn) => {


    sql.query("SELECT notification_id from tbl_user_notification_tracking WHERE  user_id = " + user_id + "", (err, data) => {
        if (err) {
            resultReturn(err, null);
            return;
        }

        var userArray = [];
        data.forEach(row => {
            userArray.push(row.notification_id);
        });

        const notification_image_path = commonConfig.IMAGE_BASE_PATH + 'notification/';

        var query = "SELECT tbl_notification.*,concat('" + notification_image_path + "', tbl_notification.image) as image from tbl_notification where id NOT IN (" + userArray + ")";


        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                resultReturn(err, null);
                return;
            }
            const result = res;
            resultReturn(null, { 'status': 200, 'message': "get all notification sucessfully", result });
            return;
        });
    });
};


module.exports = notification;