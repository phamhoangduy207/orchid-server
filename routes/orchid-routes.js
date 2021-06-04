const express = require('express');
<<<<<<< HEAD
const { getAllOrchids, addOrchid, getOrchid, updateOrchid, deleteOrchid} = require('../controllers/orchidController')

=======
const { getAllOrchids, getOrchid} = require('../controllers/orchidController')
>>>>>>> 37f955a3a3969e30cd35a2a499f6042392ac947b
const router = express.Router();

router.post('/orchids', addOrchid)
router.get('/orchids', getAllOrchids);
<<<<<<< HEAD
router.get('/orchids/:id', getOrchid);
router.put('/orchids/:id', updateOrchid);
router.delete('/orchids/:id', deleteOrchid);
=======
router.get('/orchid/:uid', getOrchid);
>>>>>>> 37f955a3a3969e30cd35a2a499f6042392ac947b

module.exports = {
    routes: router
}
