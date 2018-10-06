import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<div className="page__container invert">
				<nav className="horizontal-navigation">
					<button
						className="btn btn-light btn--icon"
						data-action="horizontal-show">
						<span className="fa fa-bars" /> Toggle navigation
					</button>
					<ul>
						<li className="openable">
							<Link to="/">
								<span className="icon li-home" />{' '}
								<span className="text">Home</span>
							</Link>
						</li>
						<li className="openable">
							<Link to="/feedback">
								<span className="icon li-document" />{' '}
								<span className="text">Feedback</span>
							</Link>
						</li>
						<li className="openable">
							<Link to="/explore">
								<span className="icon li-planet" />{' '}
								<span className="text">Explore</span>
							</Link>
						</li>
						<li className="openable">
							<Link to="/profile">
								<span className="icon li-user" />{' '}
								<span className="text">Profile</span>
							</Link>
						</li>
						<li className="openable">
							<Link to="/stats">
								<span className="icon li-graph" />{' '}
								<span className="text">Stats</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
