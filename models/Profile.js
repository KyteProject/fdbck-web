const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	forename: {
		type: String,
	},
	surname: {
		type: String,
	},
	bio: {
		type: String,
		max: 350
	},
	city: {
		type: String
	},
	country: {
		type: String,
		required: true
	},
	language: {
		type: String,
		required: true
	},
	social: {
		website: {
			type: String
		},
		soundcloud: {
			type: String
		},
		clyp: {
			type: String
		},
		discord: {
			type: String
		},
		facebook: {
			type: String
		},
		instagram: {
			type: String
		},
		twitter: {
			type: String
		},
		youtube: {
			type: String
		}
	},
	genres: {
		type: [String],
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('profile', profileSchema);
