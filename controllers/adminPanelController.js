// const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const db = require('../routes/db-config');

//         ***DATE TIME***
const date = new Date().getDate();
const Month = new Date().getMonth();
const Year = new Date().getFullYear();
const Week = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"];
const Weekday = Week[new Date().getDay()];
const DATE = `${date}/${Month}/${Year},${Weekday}`;
// *******************************************************************************************

function adminPanelController() {
    return {
        adRender: (req, res) => {
            res.render('ad', {
                style: 'ad.css'
            });
        },
        adminRender: (req, res) => {
            res.render('adminPanel', {
                style: 'adminPanel.css'
            });
        },
        customer: (req, res) => {
            db.query("SELECT * FROM `user` ORDER BY firstname ASC", (err, result) => {
                if (err) throw err;

                res.render('customerInformation', {
                    Result: result,
                    title: 'customer_Information',
                    style: 'customerInformation.css'
                    // logic: 'customerinformation.js'
                });
            });
        },
        addMenuRender: (req, res) => {
            res.render('addmenu', {
                title: 'Add_menu',
                style: 'addmenu.css'
            })
        },
        addMenu: (req, res) => {
            const { catagories, foodimage, foodname, foodprice } = req.body;
            var sql = "INSERT INTO food_menu(catagories, foodimage, foodname, foodprice, date) VALUES?";
            var Values =
                [
                    [catagories, foodimage, foodname, foodprice, DATE]
                ];
            db.query(sql, [Values], (err, result) => {
                if (err) throw err;
                console.log(result);
                res.render('addmenu', {
                    title: 'Add_Menu',
                    style: 'addmenu.css',
                    message: 'Successfully food add in menu'
                });
            });
        },
        menucardcontrole: (req, res) => {
            db.query("SELECT * FROM `food_menu` ORDER BY catagories ASC", (err, result) => {
                if (err) throw err;
                res.render('menucardcontrole', {
                    Result: result,
                    title: 'menu_card_controlle',
                    style: 'menucardcontrole.css'
                    // logic: 'customerinformation.js'
                });
            });
        },
        deleteCustomerRecord: (req, res) => {
            // const { mobilenumber } = req.body
            const mobilenumber = req.query.mobilenumber;
            db.query('DELETE FROM user WHERE mobilenumber = ?', [mobilenumber], (err, result) => {
                if (err) throw err;
                res.redirect('/customerInformation');
            });
        },
        deleteMenuCardRecord: (req, res) => {
            const id = req.query.id;
            db.query('DELETE FROM food_menu WHERE id = ?', [id], (err, result) => {
                if (err) throw err;
                res.redirect('/menucardcontrole');
            });

        }

    }
}
module.exports = adminPanelController;