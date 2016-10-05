import React from 'react';
import  SignupForm from '../welcome/signup_form';
import  SigninForm  from '../welcome/signin_form';


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signinModalOpen: false,
      signUpModalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    Header.handleClickOutside = Header.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static handleClickOutside(type) {
    return (e) => {
    e.preventDefault();
    this.handleClick(type)(e);
    this.forceUpdate();
    };
  }

  handleClick(type){
    return (e) => {
      e.preventDefault();
      if (type === "signin") {
        this.setState({ signinModalOpen: true });
        this.setState({ signUpModalOpen: false });
        this.props.clearErrors()
      } else if (type === "signup"){
        this.setState({ signUpModalOpen: true });
        this.setState({ signinModalOpen: false });
        this.props.clearErrors()
      }
    };
  }



  loggedIn() {
  }

  closeModal() {
    this.setState({ signinModalOpen: false });
    this.setState({ signUpModalOpen: false });
    this.props.clearErrors();
  }

  render() {
    return(
      <header className="header group">
        <SigninForm errors={this.props.errors}
            signin={this.props.signin}
            open={this.state.signinModalOpen}
            closeModal={this.closeModal} />
          <SignupForm  errors={this.props.errors}
            signup={this.props.signup}
            open={this.state.signUpModalOpen}
            closeModal={this.closeModal} />
          <nav>
            <a key={"logo"} className="header-logo">AllOfMyPhotos</a>
            <ul>
              <li key={"signin"}>
                <button onClick={this.handleClick("signin")} className="button"> Sign In</button>
              </li>
              <li key={"signup"}>
                <button onClick={this.handleClick("signup")} className="button signup-style"> Sign Up </button>
              </li>
            </ul>
          </nav>
      </header>
    );
  }
}
