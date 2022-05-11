function galleryController() {
    return {
        galleryRender: (req, res) => {
            res.render('Gallery', {
                style1: 'Navbar.css',
                style: 'gallery.css',
                title: 'gallery'
            });
        }
    }
}
module.exports = galleryController;