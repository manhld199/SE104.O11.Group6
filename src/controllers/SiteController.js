class SiteController {

    // [GET] /
    index(req, res) {
        res.send('trang chu')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/register.ejs', { title })
    }

    // [GET] /login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/login.ejs', { title })
    }

    // [GET] /forgot-password
    forgot(req, res) {
        res.render('./pages/forgot-password.ejs')
    }

    // [GET] /reset-password
    reset(req, res) {
        res.render('./pages/reset-password.ejs')
    }

}

module.exports = new SiteController()