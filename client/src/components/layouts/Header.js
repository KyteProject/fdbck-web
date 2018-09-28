import React, { Component } from 'react';

import Navbar from './Navbar';

export default class Header extends Component {
	render() {
		return (
			<header className="page__header">
				<div className="box">
          <div className="logo-holder">

          </div>
        </div>
        <div className="box-fluid">
          <Navbar />
        </div>
        <div className="box">
          <div className="dropdown float-left">
            <button className="btn btn-light btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="li-clipboard-alert"></span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="page-heading">
                <div className="page-heading__container">
                  <h1 className="title">Notifications</h1>
                  <p className="caption">List of latest events</p>
                </div>
                <div className="page-heading__container float-right">
                  <button className="btn btn-light btn-icon">
                    <span className="fa fa-refresh"></span>
                  </button>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item padding-left-5 border-top-0">
                  <div className="user user--bordered user--lg">
                    <img src="assets/img/users/user_2.jpg" alt="Tracey Newman" />
                      <div className="user__name">
                        <strong>Tracey Newman</strong> commented on your <strong>Awesome article</strong>,
                        <span className="text-muted">5 min ago</span>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn btn-light btn-icon float-left" data-action="fixedpanel-toggle">
            <span className="li-cog"></span>
          </button>
        </div>
			</header>
		);
	}
}
