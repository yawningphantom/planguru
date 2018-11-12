import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/headerComponent";
import Login from "./components/loginComponent";
import SignUp from "./components/signupComponent";
import UserSchedule from "./components/userScheduleComponent";
import { Grid, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2} />
              <Col xs={12} md={8}>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
              </Col>
              <Col xs={12} md={2} />
            </Row>
          </Grid>
          <Route path="/schedule" component={UserSchedule} />
        </div>
      </Router>
    );
  }
}

export default App;
