const express = require('express')
const router = express.Router();

// import controller
const SearchController = require('../controllers/SearchController.js')

router.get('/results', SearchController.searchResult)

router.get('/:acco_id', SearchController.accoDetail)

module.exports = router