import React from 'react';
import  SignupForm from '../welcome/signup_form';
import  LoginForm  from '../welcome/login_form';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logInModalOpen: false,
      signUpModalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(type){
    return (e) => {
      e.preventDefault();
      if (type === "login") {
        this.setState({ logInModalOpen: true });
      } else if (type === "signup"){
        this.setState({ signUpModalOpen: true });
      } else {
        this.setState({ logInModalOpen: false });
        this.setState({ signUpModalOpen: false });
      }
    };
  }

  loggedIn() {
  }

  closeModal() {
    this.setState({ logInModalOpen: false });
    this.setState({ signUpModalOpen: false });
  }

  render() {
  
  const { errors } = this.props.errors;

    return(
      <header>
        <LoginForm errors={errors}
            login={this.props.login}
            open={this.state.logInModalOpen}
            closeModal={this.closeModal} />
        <SignupForm  errors={errors}
            signup={this.props.signup}
            open={this.state.signUpModalOpen}
            closeModal={this.closeModal} />
        <ul>
          <li key={"logo"}></li>
          <li key={"signin"}>
            <button onClick={this.handleClick("login")}> Sign In</button>
          </li>
          <li key={"signup"}>
            <button onClick={this.handleClick("signup")}> Sign Up </button>
          </li>
        </ul>
      </header>
    );
  }
}
