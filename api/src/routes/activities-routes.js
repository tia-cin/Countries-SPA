const { Router } = require('express')
const { createActivity, allActivities } = require('../controllers/activities')

const router = Router()

router.get('/', allActivities)
router.post('/', createActivity)

module.exports = router