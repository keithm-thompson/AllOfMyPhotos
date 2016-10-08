import React from 'react';
import  SignupForm from '../welcome/signup_form';
import  SigninForm  from '../welcome/signin_form';
import { Link, withRouter } from 'react-router';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signinModalOpen: false,
      signUpModalOpen: false,
      searchText: ""
    };
    this.closeModal = this.closeModal.bind(this);
    Header.handleClickOutside = Header.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    window.header = this;
  }

  static handleClickOutside(type) {
    return (e) => {
      console.log(window.that);
    e.preventDefault();
    window.header.handleClick(type)(e);
    window.header.forceUpdate();
    };
  }

  handleClick(type){
    return (e) => {
      e.preventDefault();
      if (type === "signin") {
        this.setState({ signinModalOpen: true });
        this.setState({ signUpModalOpen: false });
        this.props.clearErrors();
      } else if (type === "signup") {
        this.setState({ signUpModalOpen: true });
        this.setState({ signinModalOpen: false });
        this.props.clearErrors();
      } else if (type === "signout") {
        this.props.signout(()=> {
          return this.props.router.push('/welcome');
        });
      }
    };
  }

  handleSearchInput(e) {
    e.preventDefault();
    this.setState({searchText: e.currentTarget.value});
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.searchText, ()=>{
      return this.props.router.push(`/search/?${this.state.searchText}`);
    });
  }

  welcomePageHeader() {
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
          <Link to="/" key={"logo"} className="header-logo">AllOfMyPhotos</Link>
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

  loggedInHeader() {
    return (
      <header className="header group">
        <nav className="group">
          <Link to="#" key={"logo"} className="header-logo">AllOfMyPhotos</Link>
          <div className="link-to-user">
              <Link to={`/users/${this.props.currentUser.id}`} className="">You</Link>
              <ul className="menu">
                <Link to="#" className="link">Upload Photos</Link>
                <Link to="#" className="link">View Your Photos</Link>
                <Link to="#" className="link">View Your Albums</Link>
              </ul>

        </div>
          <ul>
            <li>
              <form className="search" onSubmit={this.handleSearch} >
                <input type="text"
                   className="search-text"
                   placeholder="People or Photos"
                   value={this.state.searchText}
                   onChange={this.handleSearchInput}></input>
                <input type="submit" className="search-icon"></input>
              </form>
            </li>
            <li>
              <button onClick={this.handleClick("signout")} className="button"> Sign Out </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  closeModal() {
    this.setState({ signinModalOpen: false });
    this.setState({ signUpModalOpen: false });
    this.props.clearErrors();
  }

  render() {
    if (this.props.currentUser) {
      return this.loggedInHeader();
    } else {
      return this.welcomePageHeader();
    }
  }
}

export default withRouter(Header);
