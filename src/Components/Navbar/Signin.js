import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div
        className="body"
        style={{
          height: "100px",
          width: "300px",
          marginLeft: "500px",
          marginTop: "40px"
        }}
      >
        <Form className="signin">
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label>password</Label>
            <Input type="password" placeholder="password" />
          </FormGroup>
          {/* <Link to="/List"> */}
          <Button
            className="btn-lg btn-dark btn-block"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Login
          </Button>
          {/* </Link> */}
        </Form>
      </div>
    );
  }
}

export default Contact;
