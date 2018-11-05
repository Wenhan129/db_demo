const express = require('express');
const router = express.Router();

event_controller = require('../controllers/event.controller');


router.get('/url', event_controller.event_group_url);
router.post('/create', event_controller.event_create);
router.get('/:id', event_controller.event_details);
router.put('/:id/update', event_controller.event_update);
router.delete('/:id/delete', event_controller.event_delete);
router.post('/batch', event_controller.event_batch_add);

module.exports = router;