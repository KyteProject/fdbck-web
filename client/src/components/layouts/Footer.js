import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="card margin-bottom-0 invert">
				<div className="card-body text-muted text-center">
					© {new Date().getUTCFullYear()} FDBCK - All rights reserved.
				</div>
			</div>
		);
	}
}
