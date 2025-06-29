const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController');

router.post('/', designController.createDesign);
router.put('/:id', designController.updateDesign);
router.delete('/:id', designController.deleteDesign);

module.exports = router;
