import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					{/* <Header /> */}
					{['/', '/register', '/login'].map((path, auth) => (
						<Route exact path={path} component={Landing} key={auth} />
					))}
					{/* <Footer /> */}
				</div>
			</Router>
		);
	}
}
