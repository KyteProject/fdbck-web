const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	const errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';

	if (Validator.isEmpty(data.name)) {
		errors.name = 'Username field cannot be blank';
	} else if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
		errors.name = 'Username must be between 2 and 30 characters';
	} else if (!Validator.isAlphanumeric(data.name)) {
		errors.name = 'Username must be alphanumeric and contain no spaces';
	}

	if (Validator.isEmpty(data.email)) {
		errors.email = 'An email is required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Not a valid email address';
	}

	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password cannot be blank';
	} else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = 'Password must be between 6 and 30 characters';
	}

	if (Validator.isEmpty(data.password2)) {
		errors.password2 = 'You must confirm the password';
	} else if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = 'Password must match';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
