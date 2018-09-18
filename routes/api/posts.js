const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Posts home page')
})

router.get('/test', (req, res) => res.json({
  msg: "Posts works"
}));

module.exports = router;