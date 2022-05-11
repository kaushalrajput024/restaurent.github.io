const bodyParser = require('body-parser')
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


function authController() {
    return {
        signupPage: (req, res) => {
            res.render('signup', {
                title: 'sign_up',
                style: 'signup.css'
                // style1: 'Navbar.css',
            });
        },
        signup: (req, res) => {
            const { firstname, lastname, mobilenumber, email, password, cnfrmpassword } = req.body;
            // {
            //     // const firstname = req.body.firstname;
            //     // const lastname = req.body.lastname;
            //     // const mobilenumber = req.body.mobilenumber;
            //     // const email = req.body.email;
            //     // const password = req.body.password;
            // }


            // bcrypt.genSalt(6, (err, salt) => {
            //     bcrypt.hash(password, salt, (err, hash) => {
            //         const hashpassword = salt + hash;
            //         const cnfrmpassword = hashpassword;
            //     });
            // });
            // ((encrypted) => {
            //     bcrypt.compare('password', encrypted, (err, res) => {
            //         // res == true or res == false
            //         console.log('Compared result', res, hashpassword)
            //     })
            // });

            db.query("SELECT email FROM user WHERE email = ?", [email], (error, result) => {
                if (error) throw error;
                if (result.length > 0) {
                    return res.render('signup', {
                        title: 'sign_up',
                        style: 'signup.css',
                        message: 'This email is already register'
                    });
                } else if (password != cnfrmpassword) {
                    return res.render('signup', {
                        title: 'sign_up',
                        style: 'signup.css',
                        message: 'Password do not match!'
                    });
                } else if (mobilenumber.length !== 10) {
                    return res.render('signup', {
                        title: 'sign_up',
                        style: 'signup.css',
                        message: 'Enter valid mobile number'
                    });
                } else {
                    // ***inserting data into database***
                    bcrypt.genSalt(6, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            const hashpassword = salt + hash;
                            // const cnfrmpassword = hashpassword;
                            var sql = "INSERT INTO user(firstname, lastname, mobilenumber, email, Password ,cnfrmpassword ,date) VALUES?";
                            var Values =
                                [
                                    [firstname, lastname, mobilenumber, email, hashpassword, cnfrmpassword, DATE]
                                ];
                            db.query(sql, [Values], function (err, result, fields) {
                                if (err) throw err;
                                res.render('ordernow', {
                                    style: 'order.css',
                                    title: 'order_now'
                                });
                            });
                        });
                    });
                }
            });
        },
        log: (req, res) => {
            res.render('login', {
                style: 'login.css',
                title: 'login'
            });
        },
        login: (req, res) => {
            const { email, password } = req.body;
            // console.log(password);
            db.query('SELECT * FROM user WHERE email = ?', [email], (err, result) => {
                if (err) throw err;
                // console.log(result[0].firstname);
                if (result.length > 0) {

                    if (result[0].Password !== password) {
                        return res.render('login',
                            {
                                style: 'login.css',
                                title: 'login',
                                message: 'Incorrect password!'
                            })
                    } else
                        return res.render('ordernow',
                            {
                                style: 'order.css',
                                title: 'Order_now'
                            });
                } else {
                    res.render('signup', {
                        title: 'sign_up',
                        style: 'signup.css',
                        message: 'You dont have account'
                    });
                }
            });
        }
    }
}
module.exports = authController;