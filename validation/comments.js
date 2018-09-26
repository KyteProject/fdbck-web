const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCommentInput(data) {
	const errors = {};

	data.text = !isEmpty(data.text) ? data.text : '';

	if (Validator.isEmpty(data.text)) {
		errors.track = 'You need to enter some text';
	}
	//TODO: Proper filtering of input

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
