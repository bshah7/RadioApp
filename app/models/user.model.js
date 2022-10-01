const sql = require("./db.js");
const commonConfig = require("../../config/common.config.js");

// constructor
const user = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.mobile = user.mobile;
    this.email = user.email;
    this.type = user.type;
};

user.create = (newuser, resultReturn) => {

    sql.query("INSERT INTO tbl_user SET ?", newuser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }

        sql.query(`SELECT * FROM tbl_user WHERE id = '${res.insertId}'`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                resultReturn(err, null);
                return;
            }
            if (res.length) {
                const result = res[0];
                resultReturn(null, { 'status': 200, 'message': "User get sucessfully", result });
                return;
            }
            resultReturn({ 'status': '400', 'message': "User not found" }, null);
        });

    });
};

user.findByEmail = (email, resultReturn) => {
    sql.query(`SELECT * FROM tbl_user WHERE email = '${email}'`, (err, res) => {
        if (err) {
            resultReturn(err, null);
            return;
        }
        if (res.length) {
            const result = res[0];

            delete (result.password);
            resultReturn(null, { 'status': 200, 'message': "User get sucessfully", result });

            // console.log("found user: ", res[0]);
            // result(null, res[0]);
            return;
        }
        resultReturn({ 'status': '400', 'message': "User not found" }, null);
    });
};

user.getProfile = (id, resultReturn) => {

    const image_path = commonConfig.IMAGE_BASE_PATH + 'user/';

    sql.query('SELECT tbl_user.* ,concat("' + image_path + '", tbl_user.image) as image FROM tbl_user WHERE id = ? ', id, (err, res) => {
        if (err) {
            resultReturn(err, null);
            return;
        }
        if (res.length) {
            const result = res[0];
            resultReturn(null, { 'status': 200, 'message': "User get sucessfully", result });
            return;
        } else {
            resultReturn(null, { 'status': 400, 'message': "User not found" }, []);
            return;
        }
    });
};

user.findByMobile = (mobile, resultReturn) => {
    sql.query(`SELECT * FROM tbl_user WHERE mobile = '${mobile}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            resultReturn(err, null);
            return;
        }
        if (res.length) {

            const result = res[0];
            delete (result.password);
            resultReturn(null, { 'status': 200, 'message': "User get sucessfully", result });
            return;
        }
        resultReturn(null, { 'status': '400', 'message': "User not found" }, null);
    });
};

user.findById = (id, result) => {
    sql.query(`SELECT * FROM tbl_user WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found user with the id
        result({ kind: "not_found" }, null);
    });
};

user.getAll = (title, result) => {
    let query = "SELECT * FROM tbl_user";

    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("tbl_user: ", res);
        result(null, res);
    });
};

user.getAllPublished = result => {
    sql.query("SELECT * FROM tbl_user WHERE published=true", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("tbl_user: ", res);
        result(null, res);
    });
};

user.updateById = (id, user, resultReturn) => {
    sql.query(
        "UPDATE tbl_user SET name = ?, mobile = ?, email = ? WHERE id = ?",
        [user.name, user.mobile, user.email, id],
        (err, res) => {

            if (err) {
                console.log("error: ", err);
                resultReturn(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found user with the id
                resultReturn({ kind: "not_found" }, null);
                return;
            }

            sql.query(`SELECT * FROM tbl_user WHERE id = '${id}'`, (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    resultReturn(err, null);
                    return;
                }
                if (res.length) {
                    const result = res[0];
                    delete (result.password);
                    resultReturn(null, { 'status': 200, 'message': "User get sucessfully", result });
                    return;
                }
                resultReturn({ 'status': '400', 'message': "User not found" }, null);
            });
        }
    );
};

user.remove = (id, result) => {
    sql.query("DELETE FROM tbl_user WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found user with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with id: ", id);
        result(null, res);
    });
};

user.removeAll = result => {
    sql.query("DELETE FROM tbl_user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} tbl_user`);
        result(null, res);
    });
};

module.exports = user;