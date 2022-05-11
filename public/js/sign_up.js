const db = require('../../routes/db-config');
const bcrypt = require('bcrypt');
// const async = require('hbs/lib/async');

const register = async (req, res) => {
    const { email, password: Npassword } = req.body
    if (!email || !Npassword) return res.json({ statusbar: "error", error: "please enter email and password" });
    else {
        db.query('SELECT email FROM user WHERE email =?'[email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({ statusbar: "error", error: "email already registered" })
            else {
                const password = bcrypt.hash(Npassword, 6);
                db.query('INSERT INTO user SET ?', { email: email, password: password }, (error, result) => {
                    if (Error) throw Error;
                    return res.json({ statusbar: "success", success: "successfully register" })
                })

            }

        })
    }

}
module.exports = signup;