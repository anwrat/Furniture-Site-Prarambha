const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController');

router.post('/', designController.createDesign);
router.post('/update/:id', designController.updateDesign);
router.delete('/delete/:id', designController.deleteDesign);
router.post('/fetchall', designController.getAllDesigns);
router.post('/search/:name', designController.searchDesignByName);


module.exports = router;
