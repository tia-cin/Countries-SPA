const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries = require('./countries-routes')
const Activities = require('./activities-routes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', Countries)
router.use('/activity', Activities)


module.exports = router;