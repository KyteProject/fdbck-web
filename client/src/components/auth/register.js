import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};

		axios
			.post('/api/users/register', newUser)
			.then(res => console.log(res.data))
			.catch(err => this.setState({ errors: err.response.data }));
	}

	render() {
		return (
			<div className="important-container login-container">
				<div className="login-container__buttons">
					<Link
						to="/login"
						className="btn btn-outline-primary btn--icon btn--icon-left">
						Already have and account? <span className="fa fa-angle-left" />
					</Link>
				</div>
				<div className="content">
					<Link
						to="/"
						className="logo-holder logo-holder--lg logo-holder--wide">
						<div className="logo-text">
							<strong className="text-primary">~</strong>
							<strong>FDBCK</strong>
							.beta
						</div>
					</Link>

					<p className="caption text-center margin-bottom-30">
						The musicians feedback community
					</p>

					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Email</label>
							<input
								type="text"
								className="form-control"
								placeholder="Your email address"
								name="email"
								value={this.state.email}
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								className="form-control"
								placeholder="Your username"
								name="name"
								value={this.state.name}
								autoComplete="username"
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Your password"
								name="password"
								value={this.state.password}
								autoComplete="new-password"
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group margin-bottom-20">
							<label>Confirm Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter password again"
								name="password2"
								autoComplete=""
								value={this.state.password2}
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group margin-bottom-30">
							<div className="form-row">
								<div className="col-2" />
								<div className="col-8">
									<button className="btn btn-primary btn-block">
										Create account
									</button>
								</div>
							</div>
						</div>
					</form>
					<div className="divider" />
					<div className="form-group text-center">
						<div className="form-row">
							<div className="col-6">
								<Link to="/about" className="text-muted">
									About us
								</Link>
							</div>
							<div className="col-6">
								<Link to="/support" className="text-muted">
									Support
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
