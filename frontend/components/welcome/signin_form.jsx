import React from 'react';
import AuthForm from './auth_form';
import { withRouter } from 'react-router';

class SigninForm extends React.Component {

  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
  }

  processForm(user) {
    this.props.signin(user, () => {
      return this.props.router.push("/");
    });
  }

  render() {
    return (
      <AuthForm errors={this.props.errors}
        processForm={this.processForm}
        open={this.props.open}
        closeModal={this.props.closeModal}
        label={"Sign In!"}/>
    );
  }
}
export default withRouter(SigninForm);
