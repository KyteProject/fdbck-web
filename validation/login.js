//TODO Login by username

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
	const errors = {};

	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	if (Validator.isEmpty(data.email)) {
		errors.email = 'An email is required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Not a valid email address';
	}

	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password cannot be blank';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
