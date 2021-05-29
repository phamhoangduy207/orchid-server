const express = require('express');
const { getAllOrchids, addOrchid} = require('../controllers/orchidController')
const router = express.Router();

router.post('/orchids', addOrchid)
router.get('/orchids', getAllOrchids);

module.exports = {
    routes: router
}
