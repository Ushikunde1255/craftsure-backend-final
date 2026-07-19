const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.json({ msg: 'Payments OK' }));
module.exports = router;
