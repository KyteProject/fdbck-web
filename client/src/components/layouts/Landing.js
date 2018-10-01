import React, { Component } from 'react';

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
					<div className="important-container login-container">
						<div className="login-container__buttons login-container__buttons--right">
							<a
								href="pages-registration.html"
								className="btn btn-outline-primary btn--icon btn--icon-right">
								Create account <span className="fa fa-angle-right" />
							</a>
						</div>
						<div className="content">
							<a
								href="index.html"
								className="logo-holder logo-holder--lg logo-holder--wide">
								<div className="logo-text">
									<strong className="text-primary">~</strong>
									<strong>FDBCK</strong>
									.beta
								</div>
							</a>

							<p className="caption text-center margin-bottom-30">
								The musicians feedback community
							</p>

							<form action="index.html" method="post" autoComplete="off">
								<div className="form-group">
									<label>Username</label>
									<input
										type="text"
										className="form-control"
										placeholder="Email or phone"
									/>
								</div>
								<div className="form-group margin-bottom-20">
									<label>Password</label>
									<input
										type="password"
										className="form-control"
										placeholder="Your password"
										autoComplete="new-password"
									/>
								</div>
								<div className="form-group margin-bottom-30">
									<div className="form-row">
										<div className="col-6">
											<label className="custom-control custom-checkbox">
												<input
													type="checkbox"
													className="custom-control-input"
													checked=""
												/>{' '}
												<span className="custom-control-label">
													Remember me
												</span>
											</label>
										</div>
										<div className="col-6 text-right">
											<a href="pages-login.html#">Forgot password?</a>
										</div>
									</div>
								</div>
								<div className="form-group margin-bottom-30">
									<div className="form-row">
										<div className="col-2" />
										<div className="col-8">
											<button className="btn btn-primary btn-block">
												Login to account
											</button>
										</div>
									</div>
								</div>
							</form>
							<div className="divider" />
							<div className="form-group text-center">
								<div className="form-row">
									<div className="col-4">
										<a href="pages-login.html#" className="text-muted">
											About us
										</a>
									</div>
									<div className="col-4">
										<a href="pages-login.html#" className="text-muted">
											Contacts
										</a>
									</div>
									<div className="col-4">
										<a href="pages-login.html#" className="text-muted">
											Support
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="content d-none d-lg-block"
						id="content"
						style={sectionStyle}
					/>
				</div>
			</div>
		);
	}
}

export default Landing;
