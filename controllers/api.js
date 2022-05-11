const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser')
const db = require('../routes/db-config');

function apiController() {
    return {
        foodMenu: (req, res) => {
            db.query("SELECT * FROM food_menu", (err, result) => {
                if (err) throw err;
                // console.log("/public/img", result[2].foodimage);
                res.json(result);
            });
        },
        user: (req, res) => {
            db.query("SELECT * FROM user", (err, result) => {
                if (err) throw err;
                // console.log("/public/img", result[2].foodimage);
                res.json(result);
            });
        },
        adminId: (req, res) => {
            db.query("SELECT * FROM adminId", (err, result) => {
                if (err) throw err;
                // console.log("/public/img", result[2].foodimage);
                res.json(result);
            });
        }
    }
}
module.exports = apiController;
