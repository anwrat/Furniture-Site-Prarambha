const express = require('express');
const router = express.Router();
const decorController = require('../controllers/decorController');

router.post('/', decorController.createDecor);
router.post('/update/:id', decorController.updateDecor);
router.delete('/delete/:id', decorController.deleteDecor);

module.exports = router;