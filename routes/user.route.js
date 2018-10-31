const express = require('express');
const router = express.Router();

user_controller = require('../controllers/user.controller');

const app = express();

router.post('/create', user_controller.user_create);

module.exports = router;