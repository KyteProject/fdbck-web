const Validator = require('validator');
const isEmpty = require('./is-empty');
const isAllowedHost = require('./is-allowed-host');

module.exports = function validatePostInput(data) {
	const errors = {};

	data.title = !isEmpty(data.title) ? data.title : '';
	data.track = !isEmpty(data.track) ? data.track : '';

	if (Validator.isEmpty(data.title)) {
		errors.title = 'Title cannot be blank';
	} else if (!Validator.isLength(data.title, { min: 0, max: 50 })) {
		errors.title = 'Title must be no more than 50 characters';
	}

	if (Validator.isEmpty(data.track)) {
		errors.track = 'A track is required';
	} else if (!Validator.isURL(data.track)) {
		errors.track = 'Not a valid URL';
	} else if (!isAllowedHost(data.track)) {
		errors.track = 'URL does not match an accepted platform or host';
	}

	if ((!isEmpty(data.text)) && (!Validator.isLength(data.text, { min: 1, max: 150 }))) {
		errors.text = 'Description cannot be longer than 150 characters';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
