const express = require('express');
const router = express.Router();
const passport = require('passport');

const validatePostInput = require('../../validation/posts');
const validateCommentInput = require('../../validation/comments');

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

// @route		POST /api/posts/like/:post_id
// @desc		Like post
// @access	Private
router.post('/like/:post_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id })
		.then(() => {
			Post.findById(req.params.post_id)
				.then(post => {
					if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
						const removeIndex = post.likes
							.map(item => item.user.toString())
							.indexOf(req.user.id);

						post.likes.splice(removeIndex, 1);

						post.save()
							.then(post => res.json(post));
					} else {
						post.likes.unshift({ user: req.user.id });

						post.save()
							.then(post => res.json(post));
					}
				})
				.catch(() => res.status(404).json({ notfound: 'Post not found' }));
		});
});

// @route		POST /api/posts/comment/:post_id
// @desc		Add comment to post
// @access	Private
router.post('/comment/:post_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateCommentInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	Post.findById(req.params.post_id)
		.then(post => {
			const newComment = {
				text: req.body.text,
				name: req.body.name,
				avatar: req.body.avatar,
				user: req.user.id,
				score: 0, // TODO scoring system
			};

			post.comments.unshift(newComment);

			post.save()
				.then(post => res.json(post));
		})
		.catch(() => res.status(404).json({ postnotfound: 'No post found' }));
});

// @route		DELETE /api/posts/comment/:post_id/:comment_id
// @desc		Remove a comment
// @access	Private
router.delete('/comment/:post_id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {

	Post.findById(req.params.post_id)
		.then(post => {
			if (post.comments
				.filter(comment => comment._id
					.toString() === req.params.comment_id).length === 0) {
				return res.status(404).json({ commentnotexists: 'Comment does not exist' });
			}

			const removeIndex = post.comments
				.map(item => item._id.toString())
				.indexOf(req.params.comment_id);

			post.comments.splice(removeIndex, 1);

			post.save()
				.then(post => res.json(post));
		})
		.catch(() => res.status(404).json({ postnotfound: 'No post found' }));
});

module.exports = router;
