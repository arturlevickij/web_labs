const express = require('express');
const router = express.Router();
const stoneController = require('./stone.controller');

router.post('/create', stoneController.createStone);
router.get('/get', stoneController.getStones);
router.put('/update', stoneController.updateStone);
router.delete('/delete/:id', stoneController.deleteStone);

module.exports = router;
