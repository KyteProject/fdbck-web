const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		max: 30,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model('users', userSchema);
