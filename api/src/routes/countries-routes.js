const { Router } = require('express')
const { getCountries, getCountry } = require('../controllers/countries')

const router = Router()

router.get('/', getCountries)
router.get('/:id', getCountry)

module.exports = router