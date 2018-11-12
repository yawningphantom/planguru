import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      fullname: ""
    };
  }

  getValidationState() {
    const { email, password, fullname } = this.state;

    if (email.length > 10 && password.length > 6 && fullname.length > 3)
      return "success";
    else if (email.length > 5 && password.length > 5) return "warning";
    else if (email.length < 5 && email.length <= 0) return "error";
    return null;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <center>
          <h3>Sign Up</h3>
          <br />
          <em>Create an account to use Planguru without limits. For Free.</em>
        </center>
        <br />
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalText" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Full Name
            </Col>
            <Col sm={10}>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <br />
          <FormGroup controlId="formHorizontalPassword" bsSize="large">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10} />
            <Col sm={2}>
              <Button
                block
                bsSize="large"
                disabled={!this.getValidationState()}
                type="submit"
              >
                Login
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <Row>
          <Col>
            <Link to="/login">Already have an account. Login</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUpForm;
