import React, { Component } from 'react';

class Navbar extends Component {
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
							<a href="index.html#">
								<span className="icon li-home" />{' '}
								<span className="text">Home</span>
							</a>
						</li>
						<li className="openable">
							<a href="index.html#">
								<span className="icon li-document" />{' '}
								<span className="text">Feedback</span>
							</a>
						</li>
						<li className="openable">
							<a href="index.html#">
								<span className="icon li-planet" />{' '}
								<span className="text">Explore</span>
							</a>
						</li>
						<li className="openable">
							<a href="index.html#">
								<span className="icon li-user" />{' '}
								<span className="text">Profile</span>
							</a>
						</li>
						<li className="openable">
							<a href="index.html#">
								<span className="icon li-graph" />{' '}
								<span className="text">Stats</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
