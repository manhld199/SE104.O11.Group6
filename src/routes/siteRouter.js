const express = require("express");
const router = express.Router();

// import controller
const SiteController = require("../controllers/SiteController.js");

router.get("/about", SiteController.about);
router.get("/register", SiteController.register);
router.get("/footer", SiteController.footer);
router.get("/login", SiteController.login);
router.get("/forgot-password", SiteController.forgot);
router.get("/reset-password", SiteController.reset);
router.get("/search-results", SiteController.search);
router.get("/payment", SiteController.payment);
router.get("/", SiteController.index);
router.get("/booking_info", SiteController.booking_info);

module.exports = router;
