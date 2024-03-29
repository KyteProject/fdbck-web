import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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

    const loginUser = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(loginUser);
  }

  render() {
    return (
      <div className="important-container login-container">
        <div className="login-container__buttons">
          <Link
            to="/register"
            className="btn btn-outline-primary btn--icon btn--icon-left">
            Create account <span className="fa fa-angle-left" />
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
                placeholder="Email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group margin-bottom-20">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
                autoComplete="saved-password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group margin-bottom-30">
              <div className="form-row">
                <div className="col-6">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      checked={true}
                      onChange={this.onChange}
                    />{' '}
                    <span className="custom-control-label">Remember me</span>
                  </label>
                </div>
                <div className="col-6 text-right">
                  <Link to="/login/reset">Forgot password?</Link>
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
