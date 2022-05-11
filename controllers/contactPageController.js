function contactPageController() {
    return {
        contactRender: (req, res) => {
            res.render('contact', {
                style: 'contact.css',
                style1: 'Navbar.css',
                title: 'contact_us'
            });
        }
    }
}
module.exports = contactPageController;