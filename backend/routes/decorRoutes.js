const express = require('express');
const router = express.Router();
const decorController = require('../controllers/decorController');

router.post('/', decorController.createDecor);
router.post('/update/:id', decorController.updateDecor);
router.delete('/delete/:id', decorController.deleteDecor);
router.get('/fetchall', decorController.getAllDecors);
router.post('/sort/:order', decorController.getSortedDecors); //asc or desc
router.post('/search/:name', decorController.getDecorByName);


module.exports = router;