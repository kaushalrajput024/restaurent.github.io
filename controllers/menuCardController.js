const db = require('../routes/db-config');


function menuCardController() {
    return {
        cart: (req, res) => {
            res.render('cart', {
                // Result: result,
                style: 'menu.css',
                title: 'cart',
                Logic: 'menucard.js'
                // style1: 'Navbar.css'
            });
        },
        menu: (req, res) => {
            db.query("SELECT * FROM food_menu", (err, result) => {
                if (err) throw err;
                // console.log(result);
                res.render('menu', {
                    Result: result,
                    style: 'menu.css',
                    title: 'menu',
                    Logic: 'menucard.js'
                    // style1: 'Navbar.css'
                });
            });
        },
        menu_desert: (req, res) => {
            db.query("SELECT * FROM food_menu WHERE catagories = 'desert'", (err, result) => {
                if (err) throw err;
                res.render('menu', {
                    Result: result,
                    style: 'menu.css',
                    title: 'menu_desert',
                    Logic: 'menucard.js'
                    // style1: 'Navbar.css'
                });
            });
        },
        menu_starter: (req, res) => {
            db.query("SELECT * FROM food_menu WHERE catagories = 'starter'", (err, result) => {
                if (err) throw err;
                // console.log("/public/img", result[2].foodimage);
                res.render('menu_starter', {
                    Result: result,
                    style: 'menu.css',
                    title: 'menu_starter',
                    Logic: 'menucard.js'
                });
            });
        },
        menu_drink: (req, res) => {
            db.query("SELECT * FROM food_menu WHERE catagories = 'drinks'", (err, result) => {
                if (err) throw err;
                res.render('menu_drink', {
                    Result: result,
                    style: 'menu.css',
                    title: 'menu_drink',
                    Logic: 'menucard.js'
                    // style1: 'Navbar.css'
                });
            });
        },
        menu_sweet: (req, res) => {
            db.query("SELECT * FROM food_menu WHERE catagories = 'sweets'", (err, result) => {
                if (err) throw err;
                res.render('menu_sweet', {
                    Result: result,
                    style: 'menu.css',
                    title: 'menu_sweet',
                    Logic: 'menucard.js'
                });
            });
        }
    }
}
module.exports = menuCardController;