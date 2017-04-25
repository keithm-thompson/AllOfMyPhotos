import React from 'react';
import Modal from 'react-modal';

export default class AuthForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { open: this.props.open,
                  username: "",
                  password: ""
                };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.processForm(user);
    this.setState({ password: "" });
  }

  handleGuest(e) {
    e.preventDefault();
    const user = {
      username: "guest",
      password: "starwars"
    };
    this.props.processForm(user);
  }

  renderErrors() {
    if (this.props.errors){
      return(
  			<ul>
  				{this.props.errors.map((error, idx) => (
  					<li key={`error-${idx}`}>
  						{error}
  					</li>
  				))}
  			</ul>
  		);
    }
  }

  closeModal() {
    this.props.closeModal();
    this.setState({username: "", password: ""});
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  componentWillMount() {
    Modal.setAppElement('#root');
  }


  render () {

    const { label, buttonText, errors } = this.props;
    let guestButton;

    if( label == "Sign In!") {
      guestButton = <button onClick={ this.handleGuest }> Sign In as guest</button>;
    }
    return (
      <div>
        <Modal isOpen={this.props.open} className="modal-screen">
          <form className="modal">
            <h1>{ label }</h1>
            { this.renderErrors() }
            <label> Username:
              <input type="text" value={ this.state.username } onChange={this.update("username")}/>
            </label>
            <br></br>
            <br></br>
            <label> Password:
              <input type="password" value={ this.state.password } onChange={this.update("password")} />
            </label>
            <br></br>
            <br></br>
            <button onClick={this.handleSubmit}> { label } </button>
            <button onClick={this.closeModal} className="">Cancel</button>
            { guestButton }
          </form>
        </Modal>
      </div>
    );
  }
}
