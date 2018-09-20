const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Profile = require('../../models/Profile.js');
const User = require('../../models/User.js');

// @route		GET /api/profile/
// @desc		Get current useres profile
// @access	Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {};

	Profile.findOne({ user: req.user.id })
		.then(profile => {
			if (!profile) {
				errors.noprofile = 'There is no profile for this user';
				return res.status(404)
					.json(errors);
			}
			res.json(profile);
		})
		.catch(err => res.status(404)
			.json(err));
});

// @route		POST /api/profile
// @desc		Create or edit user profile
// @access	Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	const socialList = ['website', 'soundcloud', 'clyp', 'discord', 'facebook', 'instagram', 'twitter', 'youtube']
	const profileFields = {};
	const data = req.body;

	profileFields.user = req.user.id;
	profileFields.social = {};

	for (let key in data) {
		if (socialList.includes(key)) profileFields.social[key] = data[key];
		else profileFields[key] = data[key];
	}

	if (profileFields.genres) profileFields.genres = req.body.genres.split(',');

	res.json(profileFields);

});

module.exports = router;
