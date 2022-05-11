const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')                                        //url body-parser
const res = require('express/lib/response');
const { json } = require('express/lib/response');

const authController = require('../controllers/auth');                           //authentication controlled
const aboutController = require('../controllers/aboutController');               //about page controlled
const apiController = require('../controllers/api');                             //api's controlled
const adminPanelController = require('../controllers/adminPanelController');     //admin-panel controlled
const menuCardController = require('../controllers/menuCardController');         //menu card controlled
const contactPageController = require('../controllers/contactPageController');   //contact-Page-Controlled
const galleryController = require('../controllers/galleryController');           //gallery-page-controlled

//         ***urlencoded***
router.use(bodyParser.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded
router.use(bodyParser.json());                          // parse application/json
// ****************************************************

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
    res.render('index', {
        style1: 'Navbar.css',
        title: 'Home',
        sub: 'kaushal'
    });
    // res.render("index", { root: "./templates/views" });
});
router.get('/about', aboutController().render);
router.get('/gallery', galleryController().galleryRender);
router.get('/contact', contactPageController().contactRender);
router.get('/ordernow', authController().signupPage);
router.post('/ordernow', authController().signup);
router.get('/login', authController().log);
router.post('/login', authController().login);
// **************************************************************

// ***MENU***
router.get('/menu', menuCardController().menu);
router.get('/menu_desert', menuCardController().menu_desert);
router.get('/menu_starter', menuCardController().menu_starter);
router.get('/menu_drink', menuCardController().menu_drink);
router.get('/menu_sweet', menuCardController().menu_sweet);
router.get('/cart', menuCardController().cart);
// **************************************************************

// ***ADMIN PANEL***
router.get('/adminPanel97064', adminPanelController().adminRender);
router.get('/ad', adminPanelController().adRender);
router.get("/customerInformation", adminPanelController().customer);
router.get('/delete_customer_record', adminPanelController().deleteCustomerRecord);
router.get('/addmenu', adminPanelController().addMenuRender);
router.post('/addmenu', adminPanelController().addMenu);
router.get('/menucardcontrole', adminPanelController().menucardcontrole);
router.get('/delete_menu_record', adminPanelController().deleteMenuCardRecord);
// *************************************************

//                  ***API***
router.get('/api/data', apiController().foodMenu);
router.get('/api/user_%data', apiController().user);
router.get('/api/admin__$id_%data', apiController().adminId);
// **************************************************************

//       ***404 Error-Page ***
router.get('*', (req, res) => {
    res.status(404).render('404', {
        style: '404.css',
        style1: 'Navbar.css',
        title: 'Page not found!'
    });
});
// **************************************************************

module.exports = router;