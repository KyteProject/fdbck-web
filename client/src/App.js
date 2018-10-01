import React, { Component } from 'react';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';

// import './css/style.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Header /> */}
				<Landing />
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
