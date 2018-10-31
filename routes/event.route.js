const express = require('express');
const router = express.Router();

event_controller = require('../controllers/event.controller');

const app = express();

router.post('/create', event_controller.event_create);
router.get('/:id', event_controller.event_details);
router.put('/:id/update', event_controller.event_update);
router.delete('/:id/delete', event_controller.event_delete);

module.exports = router;