const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validateProfileInput = require('../../validation/profile');

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
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateProfileInput(req.body);

	if (!isValid) {
		return res.status(400)
			.json(errors);
	}

	const socialList = ['website', 'soundcloud', 'clyp', 'discord', 'facebook', 'instagram', 'twitter', 'youtube'];
	const profileFields = {};
	const data = req.body;

	profileFields.user = req.user.id;
	profileFields.social = {};

	for (const key in data) {
		if (socialList.includes(key)) profileFields.social[key] = data[key];
		else profileFields[key] = data[key];
	}

	if (profileFields.genres) profileFields.genres = req.body.genres.split(',');

	Profile.findOne({ user: req.user.id })
		.then(profile => {
			if (profile) {
				Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true })
					.then(profile =>
						res.json(profile)
					);
			} else {
				new Profile(profileFields)
					.save()
					.then(profile => res.json(profile));
			}
		});
});

module.exports = router;
