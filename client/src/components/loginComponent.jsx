import React, { Component } from "react";
import axios from "axios";

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

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }

  getValidationState() {
    const { email, password } = this.state;
    if (email.length > 10 && password.length > 6) return "success";
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
    axios
      .post("http://localhost:1337/user/login", this.state)
      .then(response => {
        console.log(response);
        localStorage.setItem("userName", response.data[0].userName);
        localStorage.setItem("name", response.data[0].name);
        this.setState({
          redirect: true
        });
      });
    event.preventDefault();
  };

  render() {
    const redirect = this.state.redirect;

    if (redirect === true) {
      return <Redirect to="/schedule" />;
    }
    return (
      <div className="Login">
        <center>
          <h3>Hello!</h3>
          <br />
          <em>Login to your account</em>
        </center>
        <br />
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={8}>
              <FormControl
                autoFocus
                type="email"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
            </Col>
            <Col sm={2} />
          </FormGroup>
          <br />
          <FormGroup controlId="password">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={8}>
              <FormControl
                onChange={this.handleChange}
                placeholder="password"
                type="password"
              />
            </Col>
            <Col sm={2} />
          </FormGroup>
          <FormGroup>
            <Col sm={8} />
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
            <Link to="/signup">Still without a login? Sign up</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginForm;
