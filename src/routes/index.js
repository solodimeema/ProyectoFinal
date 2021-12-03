const {Router}= require('express');
const router = Router();

router.get('/',(req, res) => {
    res.send('PAGINA DE INICIO')
});

module.exports = router;
