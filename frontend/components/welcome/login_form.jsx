import React from 'react';
import AuthForm from './auth_form';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
  }

  processForm(user) {
    this.props.login(user);
  }

  render() {
    return (
      <AuthForm errors={this.props.errors}
        processForm={this.processForm}
        open={this.props.open}
        closeModal={this.props.closeModal}
        label={"Log In"}/>
    );
  }

}
