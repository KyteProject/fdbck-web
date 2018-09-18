const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');

const redirect = encodeURIComponent(
  'http://localhost:5000/api/discord/callback'
);

router.get('/login', (req, res) => {
  res.redirect(
    `https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=${
      keys.discordClientID
    }&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=${redirect}`
  );
});

module.exports = router;
