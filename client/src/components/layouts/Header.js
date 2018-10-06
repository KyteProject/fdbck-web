import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Header extends Component {
	render() {
		return (
			<header className="page__header invert">
				{/* <div className="logo-holder" /> */}
				<div className="box">
					<form className="page-header-search" id="header_search">
						<input
							type="text"
							className="form-control"
							placeholder="Type in to search"
						/>
						<div className="page-header-search__icon" />
					</form>
				</div>
				<Navbar />
				<div className="box-fluid" />
				<div className="box">
					<button
						className="btn btn-light btn-icon float-left"
						data-action="fixedpanel-toggle"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Upload track">
						<span className="li-upload2" />
					</button>
					<div className="dropdown float-left">
						<button
							className="btn btn-light btn-icon"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="li-clipboard-alert" />
						</button>
						<div
							className="dropdown-menu dropdown-menu-right trans-style"
							x-placement="bottom-end">
							<div className="page-heading">
								<div className="page-heading__container">
									<h1 className="title">Notifications</h1>
									<p className="caption">List of latest events</p>
								</div>
								<div className="page-heading__container float-right">
									<button className="btn btn-light btn-icon">
										<span className="fa fa-refresh" />
									</button>
								</div>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item padding-left-5 border-top-0">
									<div className="user user--bordered user--lg">
										<img
											src="assets/img/users/user_2.jpg"
											alt="Tracey Newman"
										/>
										<div className="user__name">
											<strong>Tracey Newman</strong> commented on your{' '}
											<strong>Awesome article</strong>,
											<span className="text-muted">5 min ago</span>
										</div>
									</div>
								</li>
								<li className="list-group-item padding-left-5">
									<div className="user user--bordered user--lg">
										<img src="assets/img/users/user_1.jpg" alt="John Doe" />
										<div className="user__name">
											<strong>John Doe</strong> added new article{' '}
											<strong>Progs for begginers</strong>,{' '}
											<span className="text-muted">13 min ago</span>
										</div>
									</div>
								</li>
								<li className="list-group-item padding-left-25">
									<div className="icon-box icon-box--lg margin-right-10">
										<span className="fa fa-cog" />
									</div>
									<p>
										<strong>Important</strong> memory issue. Memory loading{' '}
										<strong>99%</strong> - 2021 of 2048
									</p>
								</li>
								<li className="list-group-item padding-left-5">
									<div className="user user--bordered user--lg">
										<img
											src="assets/img/users/user_3.jpg"
											alt="Jonathan Foster"
										/>
										<div className="user__name">
											<strong>Jonathan Foster</strong> edited product{' '}
											<strong>JST Smartphone</strong>,{' '}
											<span className="text-muted">30 min ago</span>
										</div>
									</div>
								</li>
								<li className="list-group-item padding-left-25">
									<div className="icon-box icon-box--lg margin-right-10">
										<i className="fa fa-folder-open-o" />
									</div>
									<strong>File uploading</strong> proccess 25%.
									<div className="progress" style={{ height: 3 + 'px' }}>
										<div
											className="progress-bar bg-secondary"
											role="progressbar"
											style={{
												width: 25 + '%',
												ariaValuenow: 25,
												ariaValuemin: 0,
												ariaValuemax: 100,
											}}
										/>
									</div>
								</li>
								<li className="list-group-item padding-left-10 padding-right-10">
									<button className="btn btn-light btn-block margin-top-5">
										All notifications
									</button>
								</li>
							</ul>
						</div>
					</div>
					<button
						className="btn btn-light btn-icon float-left"
						data-action="fixedpanel-toggle"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Help">
						<span className="li-bubble-question" />
					</button>
					<button
						className="btn btn-light btn-icon float-left"
						data-action="fixedpanel-toggle"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Settings">
						<span className="li-cog" />
					</button>
				</div>
			</header>
		);
	}
}
