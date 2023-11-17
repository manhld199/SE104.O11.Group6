class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index', { user: req.session.user })
    }

    // [GET] /about
    about(req, res) {
        res.render('./pages/site/about')
    }

    // [GET] /error404
    error404(req, res) {
        res.render('./pages/site/error404.ejs')
    }

    // [GET] /term-of-use
    termOfUse(req, res) {
        res.render('./pages/site/terms-of-use')
    }

    // [GET] /privacy-policy
    privacyPolicy(req, res) {
        res.render('./pages/site/privacy-policy')
    }

}

module.exports = new SiteController()
