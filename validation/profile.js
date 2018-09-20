const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
	const errors = {};

	data.country = !isEmpty(data.country) ? data.country : '';
	data.language = !isEmpty(data.language) ? data.language : '';
	data.genres = !isEmpty(data.genres) ? data.genres : '';

	if (Validator.isEmpty(data.country)) {
		errors.country = 'A country is required';
	} // else if (!countriesList.contains(data.country)) {}

	if (Validator.isEmpty(data.language)) {
		errors.language = 'A prefered language is required';
	} // else if (!languageList.contains(data.language)) {}

	if (Validator.isEmpty(data.genres)) {
		errors.genres = 'At least one genre is required';
	}

	if ((!isEmpty(data.bio)) && (!Validator.isLength(data.bio, { min: 1, max: 350 }))) {
		errors.bio = 'Bio cannot be longer than 350 characters';
	}

	if ((!isEmpty(data.website)) && (!Validator.isURL(data.website))) {
		errors.website = 'Website must be a URL.';
	}

	if ((!isEmpty(data.soundcloud)) && (!Validator.isAlphanumeric(data.soundcloud))) {
		errors.soundcloud = 'soundcloud username must be alphanumeric and contain no spaces';
	}

	if ((!isEmpty(data.clyp)) && (!Validator.isAlphanumeric(data.clyp))) {
		errors.clyp = 'clyp username must be alphanumeric and contain no spaces';
	}

	if ((!isEmpty(data.discord)) && (!Validator.isAlphanumeric(data.discord))) {
		errors.discord = 'discord username must be alphanumeric and contain no spaces';
	}

	if ((!isEmpty(data.facebook)) && (!Validator.isAlphanumeric(data.facebook))) {
		errors.facebook = 'facebook username must be alphanumeric and contain no spaces';
	}

	if ((!isEmpty(data.instagram)) && (!Validator.isAlphanumeric(data.instagram))) {
		errors.instagram = 'instagram username must be alphanumeric and contain no spaces';
	}

	if ((!isEmpty(data.twitter)) && (!Validator.isAlphanumeric(data.twitter))) {
		errors.twitter = 'twitter username must be alphanumeric and contain no spaces';
	}

	if ((!isEmpty(data.youtube)) && (!Validator.isAlphanumeric(data.youtube))) {
		errors.youtube = 'youtube username must be alphanumeric and contain no spaces';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
