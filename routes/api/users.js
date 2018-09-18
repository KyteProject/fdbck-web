const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Users home page')
})

router.get('/test', (req, res) => res.json({
  msg: "Users works"
}));

module.exports = router;