import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			// Begin Navbar
			<nav className="horizontal-navigation">
				<ul>
					<li>
						<a href="layouts_blank_boxed_header_topnav.html#">
							<span className="icon li-home" />
							<span className="text">Home</span>
						</a>
					</li>
					<li className="openable">
						<a href="layouts_blank_boxed_header_topnav.html#">
							<span className="icon li-document" />
							<span className="text">Pages</span>
						</a>
						<ul>
							<li>
								<a href="pages-gallery.html" className="no-icon">
									<span className="text">Gallery</span>
								</a>
							</li>
							<li>
								<a href="pages-user-contacts.html" className="no-icon">
									<span className="text">User contacts</span>
								</a>
							</li>
							<li>
								<a href="pages-user-profile.html" className="no-icon">
									<span className="text">User profile</span>
								</a>
							</li>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">Payment</span>
								</a>
								<ul>
									<li>
										<a href="pages-payments-list.html" className="no-icon">
											<span className="text">List of invoices</span>
										</a>
									</li>
									<li>
										<a href="pages-payments-invoice.html" className="no-icon">
											<span className="text">Invoice</span>
										</a>
									</li>
								</ul>
							</li>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">FAQ</span>
								</a>
								<ul>
									<li>
										<a href="pages-faq.html" className="no-icon">
											<span className="text">Example 1</span>
										</a>
									</li>
									<li>
										<a href="pages-faq-2.html" className="no-icon">
											<span className="text">Example 2</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="pages-contact-us.html" className="no-icon">
									<span className="text">Contact us</span>
								</a>
							</li>
							<li>
								<a href="pages-calendar.html" className="no-icon">
									<span className="text">Calendar</span>
								</a>
							</li>
							<li>
								<a href="pages-login.html" className="no-icon">
									<span className="text">Login page</span>
								</a>
							</li>
							<li>
								<a href="pages-registration.html" className="no-icon">
									<span className="text">Registration</span>
								</a>
							</li>
						</ul>
					</li>
					<li className="openable">
						<a href="layouts_blank_boxed_header_topnav.html#">
							<span className="icon li-group-work" />
							<span className="text">Business solutions</span>
						</a>
						<ul>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">Banking</span>
								</a>
								<ul>
									<li>
										<a href="solutions-banking-main.html" className="no-icon">
											<span className="text">Account</span>
										</a>
									</li>
									<li>
										<a href="solutions-banking-cards.html" className="no-icon">
											<span className="text">Personal cards</span>
										</a>
									</li>
									<li>
										<a
											href="solutions-banking-activity.html"
											className="no-icon">
											<span className="text">Activity</span>
										</a>
									</li>
								</ul>
							</li>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">Marketing researches</span>
								</a>
								<ul>
									<li>
										<a
											href="solutions-markeing-classNameifier.html"
											className="no-icon">
											<span className="text">classNameifier</span>
										</a>
									</li>
									<li>
										<a
											href="solutions-markeing-research.html"
											className="no-icon">
											<span className="text">Marketing research</span>
										</a>
									</li>
									<li>
										<a
											href="solutions-markeing-production.html"
											className="no-icon">
											<span className="text">Production</span>
										</a>
									</li>
								</ul>
							</li>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">CRM system</span>
								</a>
								<ul>
									<li>
										<a href="solutions-crm-main.html" className="no-icon">
											<span className="text">Recent projects</span>
										</a>
									</li>
									<li>
										<a href="solutions-crm-operators.html" className="no-icon">
											<span className="text">Operators</span>
										</a>
									</li>
									<li>
										<a href="solutions-crm-project.html" className="no-icon">
											<span className="text">Project</span>
										</a>
									</li>
								</ul>
							</li>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">Smart house</span>
								</a>
								<ul>
									<li>
										<a
											href="solutions-smarthouse-main.html"
											className="no-icon">
											<span className="text">Room controls</span>
										</a>
									</li>
									<li>
										<a href="solutions-smarthouse-air.html" className="no-icon">
											<span className="text">Air conditioning</span>
										</a>
									</li>
								</ul>
							</li>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">Ecommerce</span>
								</a>
								<ul>
									<li>
										<a href="solutions-ecommerce-main.html" className="no-icon">
											<span className="text">Product list</span>
										</a>
									</li>
									<li>
										<a href="solutions-ecommerce-card.html" className="no-icon">
											<span className="text">Product card</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="solutions-trading-main.html" className="no-icon">
									<span className="text">Trading platform</span>
								</a>
							</li>
						</ul>
					</li>
					<li className="title">Interface</li>
					<li className="openable">
						<a href="layouts_blank_boxed_header_topnav.html#">
							<span className="icon li-laptop-phone" />
							<span className="text">Elements</span>
						</a>
						<ul>
							<li className="openable">
								<a
									href="layouts_blank_boxed_header_topnav.html#"
									className="no-icon">
									<span className="text">Cards</span>
								</a>
								<ul>
									<li>
										<a href="ui-cards-basic.html" className="no-icon">
											<span className="text">Basic examples</span>
										</a>
									</li>
									<li>
										<a href="ui-cards-image-group.html" className="no-icon">
											<span className="text">Card image & groups</span>
										</a>
									</li>
									<li>
										<a
											href="ui-cards-container-dividers.html"
											className="no-icon">
											<span className="text">Card container & dividers</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="ui-buttons.html" className="no-icon">
									<span className="text">Buttons</span>
								</a>
							</li>
							<li>
								<a href="ui-dropdowns.html" className="no-icon">
									<span className="text">Dropdowns</span>
								</a>
							</li>
							<li>
								<a href="ui-alerts-badges.html" className="no-icon">
									<span className="text">Alerts, badges & tags</span>
								</a>
							</li>
							<li>
								<a href="ui-modals.html" className="no-icon">
									<span className="text">Modals</span>
								</a>
							</li>
							<li>
								<a href="ui-popovers-tooltips.html" className="no-icon">
									<span className="text">Popovers & tooltips</span>
								</a>
							</li>
							<li>
								<a href="ui-tabs-pills.html" className="no-icon">
									<span className="text">Tabs & pills</span>
								</a>
							</li>
							<li>
								<a href="ui-accordion.html" className="no-icon">
									<span className="text">Accordion</span>
								</a>
							</li>
							<li>
								<a href="ui-list-group.html" className="no-icon">
									<span className="text">List group</span>
								</a>
							</li>
							<li>
								<a href="ui-typography.html" className="no-icon">
									<span className="text">Typography</span>
								</a>
							</li>
						</ul>
					</li>
					<li className="openable">
						<a href="layouts_blank_boxed_header_topnav.html#">
							<span className="icon li-pen-add" />
							<span className="text">Components</span>
						</a>
					</li>
					<li className="openable">
						<a href="layouts_blank_boxed_header_topnav.html#">
							<span className="icon li-layers" />
							<span className="text">Forms</span>
						</a>
					</li>
				</ul>
			</nav>
			// End Navbar
		);
	}
}

export default Navbar;
