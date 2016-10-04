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

    return (
      <div>
        <Modal isOpen={this.props.open}>
          <form>
            <h1>{ label }</h1>
            { this.renderErrors() }
            <label> Username:
              <input type="text" value={ this.state.username } onChange={this.update("username")}/>
            </label>
            <label> Password:
              <input type="password" value={ this.state.password } onChange={this.update("password")} />
            </label>
            <button onClick={this.handleSubmit}> { label } </button>
          </form>
          <button onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
}
