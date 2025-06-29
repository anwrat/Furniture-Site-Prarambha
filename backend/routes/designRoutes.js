const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController');

router.post('/', designController.createDesign);
router.post('/update/:id', designController.updateDesign);
router.delete('/delete/:id', designController.deleteDesign);

module.exports = router;
