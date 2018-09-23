const express = require('express');
const router = express.Router();
const passport = require('passport');

const validatePostInput = require('../../validation/posts');

const Profile = require('../../models/Profile.js');
const Post = require('../../models/Posts.js');

// @route		GET /api/posts/
// @desc		View all posts
// @access	Public
router.get('/', (req, res) => {
	Post.find()
		.sort({ date: -1 })
		.then(posts => res.json(posts))
		.catch(() => res.status(404).json({ notfound: 'Posts not found' }));
});

// @route		GET /api/posts/:post_id
// @desc		View post by ID
// @access	Public
router.get('/:post_id', (req, res) => {
	Post.findById(req.params.post_id)
		.then(post => res.json(post))
		.catch(() => res.status(404).json({ notfound: 'Post not found' }));
});

// @route		POST /api/posts/
// @desc		Create a posting
// @access	Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validatePostInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const newPost = new Post({
		title: req.body.title,
		text: req.body.text,
		track: req.body.track,
		name: req.body.name,
		avatar: req.body.avatar,
		user: req.user.id
	});

	newPost.save()
		.then(post => res.json(post));
});

// @route		DELETE /api/posts/:post_id
// @desc		Delete as posting
// @access	Private
router.delete('/:post_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id })
		.then(() => {
			Post.findById(req.params.post_id)
				.then(post => {
					if (post.user != req.user.id) {
						return res.status(401).json({ notauthorised: 'User not authorised' });
					}

					post.remove()
						.then(() => res.json({ success: 'Post deleted' }));
				})
				.catch(() => res.status(404).json({ notfound: 'Post not found' }));
		});
});
module.exports = router;
