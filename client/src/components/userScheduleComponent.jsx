import React, { Component } from "react";
import axios from "axios";

import {
  Row,
  ListGroup,
  ListGroupItem,
  Form,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";

class UserSchedule extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  groupData = data => {
    let result = [];
    // console.log(data);
    for (let d of data) {
      // console.log(d);

      let date = new Date(d.slotDate).toDateString();

      if (!result[date]) {
        result[date] = [d];
      } else {
        // if key already existed, extend into group
        result[date].push(d);
      }
    }

    return result;
  };

  getSchedule = () => {
    axios
      .get("http://localhost:1337/slot/find", {
        params: {
          bookedFor: localStorage.getItem("name")
        }
      })
      .then(response => {
        let schedulesByDate = this.groupData(response.data);

        console.log(schedulesByDate);

        let scheduleList = schedulesByDate.map(schedule => {
          return schedule.map(sc => {
            return <ListGroupItem>{sc.bookedBy}</ListGroupItem>;
          });
        });
        console.log(scheduleList);
        return scheduleList;
      });
  };

  render() {
    const scheduleList = this.state.scheduleList;
    return (
      <div className="Login">
        <center>
          <h3>Hello {localStorage.getItem("name")}!</h3>
          <br />
          {/* <em>Login to your account</em> */}
        </center>
        <Row>
          <Col>
            <ListGroup>{this.getSchedule()}</ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserSchedule;
