function aboutController(router) {
    return {
        render: (req, res) => {
            res.render('about', {
                style: 'About.css',
                style1: 'Navbar.css',
                title: 'about_us'
            });
        }
    }
}
module.exports = aboutController;