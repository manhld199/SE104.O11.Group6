/**
 * Express router for handling booking related routes.
 * @module bookingRouter
 * @requires express
 * @requires ../middlewares/auth.middleware
 * @requires ../middlewares/booking.middleware
 * @requires ../controllers/BookingController.js
 */
const express = require('express')
const router = express.Router();

// import middleware
const authMiddleware = require('../middlewares/auth.middleware')
const bookingMiddleware = require('../middlewares/booking.middleware')

// import controller
const BookingController = require('../controllers/BookingController.js')

router.get('/information', authMiddleware.isLoggedIn, bookingMiddleware.isChoosingRooms, BookingController.information)
router.post('/information', authMiddleware.isLoggedIn, bookingMiddleware.isChoosingRooms, BookingController.informationPost)

router.get('/payment', authMiddleware.isLoggedIn, bookingMiddleware.isFilledBookingInfo, BookingController.payment)
router.post('/payment', authMiddleware.isLoggedIn, bookingMiddleware.isFilledBookingInfo, BookingController.paymentPost)

// router.get('/success', authMiddleware.isLoggedIn, BookingController.success)
router.get('/success', BookingController.success)

// router.get('/:detail', authMiddleware.isLoggedIn, BookingController.detail)

router.get('/cancellation', BookingController.cancel)
router.post('/cancellation', BookingController.cancelPost)

module.exports = router