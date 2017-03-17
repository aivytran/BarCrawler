import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: "",
			modalOpen: false,
			modalType: 'login'};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		if (this.state.modalType === 'login') {
			this.props.login({user});
		} else {
			this.props.signup({user});
		}
	}

	navLink() {
		if (this.state.modalType === "login") {
			return <p>Don't have and account? <Link onClick={this.openModal.bind(this, 'signup')}>Sign Up</Link></p>;
		} else {
			return <p>Already have an account? <Link onClick={this.openModal.bind(this, 'login')}>Log In</Link></p>
		}
	}

	welcome() {
		if (this.state.modalType === "login") {
			return <h1>Log in to your account</h1>;
		} else {
			return <h1>Sign up to save routes, share, and more</h1>
		}
	}

	renderErrors() {
		return(
			<ul className="auth-error">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	openModal(modalType) {
		this.props.deleteErrors()
		this.setState({
			modalOpen: true,
			modalType
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	render() {
		return (
			<div >
				<li>
			    <strong><Link onClick={this.openModal.bind(this, 'login')} >Log In</Link></strong>
			    &nbsp;&nbsp;&nbsp;&nbsp;
			    <strong><Link onClick={this.openModal.bind(this, 'signup')}>Sign Up</Link></strong>
			  </li>

				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}
					id="signup-signin-modal">

					<div className="auth-view" >
	          <img src="assets/beercup.png" alt="logo"/>
						<h2>Welcome to Bar Crawler</h2>

						{this.welcome()}

						<div className="login-form">
						<form onSubmit={this.handleSubmit} >
							{this.renderErrors()}
								<fieldset className="new-input">
									<label> Username:
										<input type="text"
											value={this.state.username}
											onChange={this.update("username")}
											className="login-input" />
									</label>
									<div className="divider"></div>
								</fieldset>


		            {this.state.modalType === "signup" &&
									<fieldset className="new-input">
	                  <label> Email:
	                    <input type="text"
	                      value={this.state.email}
	                      onChange={this.update("email")}
	                      className="login-input" />
										</label>
										<div className="divider"></div>
									</fieldset>
								}


								<fieldset className="new-input">
									<label> Password:
										<input type="password"
											value={this.state.password}
											onChange={this.update("password")}
											className="login-input" />
									</label>
									<div className="divider"></div>
								</fieldset>

								<button className="auth-button" type="submit">
									{this.state.modalType}
								</button>

								{this.navLink()}

							</form>
						</div>
					</div>
				</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
