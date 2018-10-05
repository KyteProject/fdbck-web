import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';

const sectionStyle = {
	backgroundImage: `url(../../assets/img/backgrounds/headphones-large.jpg)`,
	backgroundRepeat: 'no-repeat',
	height: '100vh',
	width: '100vw',
	backgroundPosition: 'left center',
};
class Landing extends Component {
	render() {
		return (
			<div className="page">
				<div className="page__content" id="page-content">
					<div
						className="content d-none d-lg-block"
						id="content"
						style={sectionStyle}
					/>
					<Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</div>
			</div>
		);
	}
}

export default Landing;
