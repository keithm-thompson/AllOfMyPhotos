import React from 'react';
import AuthForm from './auth_form';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
  }

  processForm(user) {
    this.props.signup(user, () => {
        return this.props.router.push("/");
    });
  }


  render() {
    return (
      <AuthForm errors={this.props.errors}
        processForm={this.processForm}
        open={this.props.open}
        closeModal={this.props.closeModal}
        label={"Sign Up!"}/>
    );
  }

}

export default withRouter(SignupForm);
