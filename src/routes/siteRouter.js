const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const session = require('express-session')
const SiteController = require('../controllers/SiteController.js');
const passport = require('passport');

router.get('/about', SiteController.about)
router.get('/register', SiteController.register)
router.get('/login', authMiddleware.isAuth, SiteController.showLoginForm)
router.post('/login', authMiddleware.isAuth, SiteController.login)
router.get('/forgot-password', SiteController.forgot);
router.get('/reset-password', SiteController.reset);
router.get('/search-results', SiteController.search);

router.get('/', SiteController.index)

module.exports = router
