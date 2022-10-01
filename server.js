const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

const sql = require('./app/models/db.js');
const commonConfig = require("./config/common.config.js");

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to radio application." });
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const image_path = commonConfig.USER_BASE_PATH + 'user/';
        cb(null, image_path);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

var upload = multer({ storage: storage }).single('image');

app.post('/api/image-upload', upload, (req, resultReturn) => {
    const file = req.file.filename;
    const id = req.body.id;
    console.log(req.file.filename);
    sql.query(
        "UPDATE tbl_user SET image = ?  WHERE id = ?", [file, id], (err, res) => {

            const image_path = commonConfig.IMAGE_BASE_PATH + 'user/';
            sql.query('SELECT tbl_user.*,concat("' + image_path + '", tbl_user.image) as image FROM tbl_user WHERE id = ' + id, (err, res) => {
                if (err) {
                    console.log("error: ", err);
                }
                if (res.length) {

                    const result = res[0];
                    delete (result.password);
                    resultReturn.json({ 'status': 200, message: "User Update successfully.", result });
                }
            });
        }
    );
});

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        message: err.message,
    });
});

// require("./app/routes/tutorial.routes.js")(app);
require("./app/routes/routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});